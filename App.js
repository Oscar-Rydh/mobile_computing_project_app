import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Notifier from './util/notifier';
import questions from './util/questions';
import QuestionID from './util/QuestionID'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()
    this.state = {questions: {}, userId: 1234, currentDate: date.getDate(), currentQuestionId: 1}
  }
  


  async componentDidMount() {
    let result = await
      Notifier.stopNotifications();
    Notifier.startAllNotifications();
    this._setCurrentQuestions();

  }

  _updateCurrentQuestion() {
    this.setState({currentQuestionId: parseInt(this.state.currentQuestionId) + 1})
  }

  // Hur ska vi göra detta? 
  _setCurrentQuestions() {
    const date = new Date();
    const currentHour = date.getHours();
    if (currentHour > 5 && currentHour <= 10) {
      this.setState({questions: questions.morning, currentQuestionId: Object.keys(questions.morning)[0]});
    } else if (currentHour > 10 && currentHour <= 15) {
      this.setState({questions: questions.lunch, currentQuestionId: Object.keys(questions.lunch)[0]});
    } else if (currentHour > 15 && currentHour <= 21) {
      this.setState({questions: questions.dinner, currentQuestionId: Object.keys(questions.dinner)[0]});
    } else {
      this.setState({questions: questions.all_day, currentQuestionId: Object.keys(questions.all_day)[0]})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Question: {this.state.questions[this.state.currentQuestionId]}</Text>
        <View style={styles.buttonContainer} >
          <View style={styles.button} >
            <Button
              onPress={() => this._updateCurrentQuestion()}
              title="yes"
            />
          </View>
          <View style={styles.button} >
            <Button style={styles.button}
              onPress={() => _updateCurrentQuestion()}
              title="no"
            />
          </View>
        </View>
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
    padding: 80
  }
});
