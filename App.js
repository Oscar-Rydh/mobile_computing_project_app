import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput
} from 'react-native';
import Notifier from './util/notifier';
import QuestionID from './util/QuestionID'
import Questions from './Questions';
import moment from 'moment';
const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');

let FEATHERS_APP = undefined

export default class App extends React.Component {

  state = {
    isSmoker: undefined,
    drinksAlcohol: undefined,
    questions: [],
    answeredQuestions: [],
    textInput: "",
    currentDate: new Date().getDate(),
    token: undefined
  }

  async componentDidMount() {

    await Notifier.stopNotifications();
    Notifier.startAllNotifications();

    // Set initial questions
    let questions = []
    const askMorning = true;
    const askLunch = true;
    const askDinner = true;
    const askAllDay = true;
    if (askMorning) questions = questions.concat(Object.values(Questions.morning))
    if (askLunch) questions = questions.concat(Object.values(Questions.lunch))
    if (askDinner) questions = questions.concat(Object.values(Questions.dinner))
    if (askAllDay) questions = questions.concat(Object.values(Questions.all_day))

    let answeredQuestions = []

    const storedState = await this.getState()
    if (storedState !== null && storedState.currentDate === this.state.currentDate) {
      answeredQuestions = storedState.answeredQuestions
      this.setState({ isSmoker: storedState.isSmoker, drinksAlcohol: storedState.drinksAlcohol })
    }

    questions = questions.filter(q => !answeredQuestions.includes(q.id))
    console.log(storedState)
    this.setState({
      questions: questions,
      answeredQuestions: answeredQuestions,
      token: await Notifier.getUnqiueId()
    })

    /**
     * Configure feathers app
     */
    FEATHERS_APP = feathers();
    // Connect to a different URL
    let URI = null
    if (process.env.NODE_ENV === 'production') {
      URI = 'https://mobile-computing-project.herokuapp.com'
    } else {
      URI = 'http://143.248.217.57:3030'
    }
    const restClient = rest(URI)
    // Configure an AJAX library (see below) with that client 
    FEATHERS_APP.configure(restClient.fetch(window.fetch));
  }

  /**
   * Used for testing
   */
  async resetState() {
    try {
      await AsyncStorage.removeItem('@StateStore:state');
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  }

  async saveState() {
    try {
      await AsyncStorage.setItem('@StateStore:state', JSON.stringify(this.state));
    } catch (error) {
      console.log(error)
      // Error saving data
    }
  }

  async getState() {
    try {
      const result = await AsyncStorage.getItem('@StateStore:state');
      if (result === null) {
        return null
      }
      return JSON.parse(result);
    } catch (error) {
      console.log("Got error", error)
      return null;
      // Error retrieving data
    }
  }

  async _setDrinksAlcohol(drinksAlcohol) {
    await this.setState({ drinksAlcohol }, this.saveState);
  }
  async _setIsSmoker(isSmoker) {
    await this.setState({ isSmoker }, this.saveState);
  }

  _registerAnswer(question, answer) {
    // Save answer in backend
    const date = moment()
    FEATHERS_APP.service('entries').create({
      question: question.question,
      question_id: question.id,
      answer: answer,
      date: date.format('DD/MM/YYYY'), // TODO: Is this how we wanna represent date?
      time: date.format('HH:mm'), // TODO: Is this how we wanna represent time?
      user_id: this.state.token
    })

    // Set the question as answered
    const answeredQuestions = this.state.answeredQuestions.concat([question.id])
    const questions = this.state.questions.slice(1)
    this.setState({
      answeredQuestions: answeredQuestions,
      questions: questions,
      textInput: ""
    }, this.saveState)
  }

  _renderYesNoButtons(question) {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button
            onPress={() => {
              this._registerAnswer(question, true)
            }}
            title="yes"
          />
        </View>
        <View style={styles.button} >
          <Button style={styles.button}
            onPress={() => {
              this._registerAnswer(question, false)
            }}
            title="no"
          />
        </View>
      </View>
    )
  }

  _renderScaleButtons(question) {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button
            onPress={() => {
              this._registerAnswer(question, 1)
            }}
            title="1"
          />
        </View>
        <View style={styles.button} >
          <Button style={styles.button}
            onPress={() => {
              this._registerAnswer(question, 2)
            }}
            title="2"
          />
        </View>
        <View style={styles.button} >
          <Button style={styles.button}
            onPress={() => {
              this._registerAnswer(question, 3)
            }}
            title="3"
          />
        </View>
        <View style={styles.button} >
          <Button style={styles.button}
            onPress={() => {
              this._registerAnswer(question, 4)
            }}
            title="4"
          />
        </View>
      </View>
    )
  }

  _renderTextInput(question) {
    return (
      <View>
        <TextInput
          autoFocus
          multiline
          value={this.state.textInput}
          onChangeText={text => this.setState({ textInput: text })}
        />
        <Button style={styles.button}
          onPress={() => {
            this._registerAnswer(question, this.state.textInput)
          }}
          title="Save"
        />
      </View>
    )
  }


  _renderIsSmoker() {
    return (
      <View style={styles.container}>
        <Text>Question: Do you ever smoke? </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button
              onPress={() => this._setIsSmoker(true)}
              title="yes"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._setIsSmoker(false)}
              title="no"
            />
          </View>
        </View>
      </View>
    )
  }

  _renderDrinksAlcohol() {
    return (
      <View style={styles.container}>
        <Text>Question: Do you ever drink alcohol? </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button
              onPress={() => this._setDrinksAlcohol(true)}
              title="yes"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._setDrinksAlcohol(false)}
              title="no"
            />
          </View>
        </View>
      </View>
    )
  }

  render() {
    const question = this.state.questions[0]

    if (this.state.isSmoker === undefined) {
      return (
        this._renderIsSmoker()
      )
    }

    if (this.state.drinksAlcohol === undefined) {
      return (
        this._renderDrinksAlcohol()
      )
    }

    if (!question) {
      return (
        <View style={styles.container}>
          <Text>Atta boy, you have answered all your questions!</Text>
        </View>
      )
    }

    // {question.type === 'text' && this._renderTextInput()}
    return (
      <View style={styles.container}>
        <Text>Question: {question.question}</Text>
        {question.type === 'boolean' && this._renderYesNoButtons(question)}
        {question.type === 'scale' && this._renderScaleButtons(question)}
        {question.type === 'text' && this._renderTextInput(question)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    padding: 20
  }
});
