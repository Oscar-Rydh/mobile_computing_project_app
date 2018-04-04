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
    isSmoker: null,
    drinksAlcohol: null,
    questions: [{ question: 'Loading your questions...' }],
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
      .concat(Object.values(Questions.prenoon))
      .concat(Object.values(Questions.postnoon))
      .concat(Object.values(Questions.evening))
      .concat(Object.values(Questions.allday))

    // Sort questions, making sure questions for the earlier session comes first
    questions.sort((a, b) => a.session >= b.session)


    let answeredQuestions = this.state.answeredQuestions;
    const storedState = await this.getStateFromStore('@StateStore:state');
    const isSmoker = await this.getStateFromStore('@UserPreferences:isSmoker');
    const drinksAlcohol = await this.getStateFromStore('@UserPreferences:drinksAlcohol');

    if (storedState !== null && storedState.currentDate === this.state.currentDate) {
      answeredQuestions = storedState.answeredQuestions
    }

    console.log(isSmoker)
    if (isSmoker !== null) {
      this.setState({ isSmoker })
    }

    if (drinksAlcohol !== null) {
      this.setState({ drinksAlcohol })
    }
    questions = questions.filter(q => !answeredQuestions.includes(q.id))

    this.setState({
      questions: questions,
      answeredQuestions: answeredQuestions,
      token: await Notifier.getUnqiueId()
    })

    /**
     * Configure feathers app
     */
    try {
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
    } catch (error) {
      alert('Could not establish connection to backend')
      console.warn('Could not establish connection to backend')
    }
  }

  /**
   * Used for testing
   */
  async resetState() {
    try {
      await AsyncStorage.removeItem('@StateStore:state');
      await AsyncStorage.removeItem('@UserPreferences:isSmoker');
      await AsyncStorage.removeItem('@UserPreferences:drinksAlcohol');
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

  async saveIsSmoker(isSmoker) {
    try {
      await AsyncStorage.setItem("@UserPreferences:isSmoker", JSON.stringify(isSmoker))
      console.log("Saved smoker")
    } catch (error) {
      console.log(error)
    }
  }

  async saveDrinksAlcohol(drinksAlcohol) {
    try {
      await AsyncStorage.setItem("@UserPreferences:drinksAlcohol", JSON.stringify(drinksAlcohol))
    } catch (error) {
      console.log(error)
    }
  }


  async getStateFromStore(store) {
    try {
      const result = await AsyncStorage.getItem(store);
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
    await this.saveDrinksAlcohol(drinksAlcohol);
    this.setState({ drinksAlcohol }, this.saveState);
  }
  async _setIsSmoker(isSmoker) {
    await this.saveIsSmoker(isSmoker);
    this.setState({ isSmoker }, this.saveState);
  }

  _registerAnswer(question, answer) {
    // Save answer in backend
    const date = moment()
    try {
      FEATHERS_APP.service('entries').create({
        question: question.question,
        question_id: question.id,
        answer: answer,
        date: date.format('DD/MM/YYYY'), // TODO: Is this how we wanna represent date?
        time: date.format('HH:mm'), // TODO: Is this how we wanna represent time?
        user_id: this.state.token
      })

      // Set the question as answered
      let answeredQuestions = this.state.answeredQuestions.concat([question.id])
      let remainingQuestions = this.state.questions.slice(1)
      // Also remove the questions that depend on this question
      if (question.dependants && answer === false) {
        remainingQuestions = remainingQuestions.filter(q => !question.dependants.includes(q.id))
        question.dependants.forEach(q => {
          answeredQuestions = answeredQuestions.concat([q.id])
        })
      }
      this.setState({
        answeredQuestions: answeredQuestions,
        questions: remainingQuestions,
        textInput: ""
      }, this.saveState)

    } catch (error) {
      alert('Could not send response to backend')
      console.warn('Could not send response to backend')
    }

  }

  _renderYesNoButtons(question) {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button} >
          <Button
            onPress={() => {
              this._registerAnswer(question, true)
            }}
            title={question.yesLabel ? question.yesLabel : 'Yes'}
          />
        </View>
        <View style={styles.button} >
          <Button style={styles.button}
            onPress={() => {
              this._registerAnswer(question, false)
            }}
            title={question.noLabel ? question.noLabel : 'No'}
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
    /**
     * Ask initial questions
     */
    if (this.state.isSmoker === null) {
      return (
        this._renderIsSmoker()
      )
    }

    if (this.state.drinksAlcohol === null) {
      return (
        this._renderDrinksAlcohol()
      )
    }

    /**
     * Render questions
     */
    let question = this.state.questions[0]

    // Make sure we do not show questions that should be saved for later this day
    if (question && question.session) {
      const currentTime = moment()
      if (question.session === 1 && currentTime.isBefore(moment().hour(11).minute(0))) {
        question = undefined
      } else if (question.session === 2 && currentTime.isBefore(moment().hour(17).minute(0))) {
        question = undefined
      } else if (question.session === 3 && currentTime.isBefore(moment().hour(20).minute(0))) {
        question = undefined
      }
    }

    if (!question) {
      return (
        <View style={styles.container}>
          <Text>Atta boy, you have answered all your questions!</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{question.question}</Text>
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
