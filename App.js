import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Notifier from './util/notifier'

export default class App extends React.Component {


  async componentDidMount() {
    let result = await   
    Notifier.startAllNotifications();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
});
