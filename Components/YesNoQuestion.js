import React from 'react';


const YesNoQuestion = (props) => {
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



  return (
    <View style={styles.container}>
      <Text>Question: {props.question} </Text>
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

export default YesNoQuestion;