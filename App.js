import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import Notifier from './util/notifier';
import questions from './util/questions';
import QuestionID from './util/QuestionID'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()
    this.state = {
      questions: questions,
      userId: 1234,
      currentDate: date.getDate(),
      currentQuestion: "",
      currentQuestionId: 1,
      questionsToAnswer: true,
      scaleButton: false
    }
    // For testing
    this.resetState();
  }

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

  async componentDidMount() {
    let result = await
      Notifier.stopNotifications();
    Notifier.startAllNotifications();
    const storedState = await this.getState()
    if (storedState !== null && storedState.currentDate === this.state.currentDate) {
      this.setState(storedState);
    }
    this._setCurrentQuestion();
  }

  async _updateQuestionList(buttonValue) {
    delete this.state.questions[this.state.currentQuestionId];
    const newId = parseInt(this.state.currentQuestionId) + 1;
    await this.setState({ questions: this.state.questions, currentQuestionId: newId })
    this.saveState();
    this._setCurrentQuestion();
  }

  // Hur ska vi göra detta? 
  _setCurrentQuestion() {
    const date = new Date()
    const currentHour = date.getHours();
    const currentId = this.state.currentQuestionId;
    if ((currentHour > 5 && currentId < 19) ||
      (currentHour > 11 && currentId < 35) ||
      (currentHour > 16 && currentId < 51) ||
      currentHour > 21
    ) {
      this.setState({ currentQuestion: this.state.questions[this.state.currentQuestionId], questionsToAnswer: true })
      if (currentId === 18 || currentId === 19 || currentId === 34 || currentId === 35 || currentId === 50 ||
        currentId === 51 || currentId === 58 || currentId === 59) {
          this.setState({isScale: true})
        } else {
          this.setState({isScale: false})
        }
    } else {
      this.setState({ currentQuestion: "Please wait before answering more questions", questionsToAnswer: false, isScale: false })
    }
  }

  _renderYesNoButtons() {
    if (this.state.questionsToAnswer && !this.state.isScale) {
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button
              onPress={() => this._updateQuestionList(0)}
              title="yes"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._updateQuestionList(1)}
              title="no"
            />
          </View>
        </View>
      )
    }
  }

  _renderScaleButtons() {
    if (this.state.questionsToAnswer && this.state.isScale) {
      return (
        <View style={styles.buttonContainer}>
          <View style={styles.button} >
            <Button
              onPress={() => this._updateQuestionList(1)}
              title="1"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._updateQuestionList(2)}
              title="2"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._updateQuestionList(3)}
              title="3"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => this._updateQuestionList(4)}
              title="4"
            />
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Question: {this.state.currentQuestion}</Text>
        {this._renderYesNoButtons()}
        {this._renderScaleButtons()}
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
