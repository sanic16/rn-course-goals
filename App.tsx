import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState<string[]>([])

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>  

        <View style={styles.textContainer}>
        <TextInput 
          placeholder='your course goal!'
          placeholderTextColor={'#dedede'}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        </View> 

        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={addGoalHandler}
          >
            <View style={{backgroundColor: '#dedede', padding: 10, borderRadius: 25}}>
              <Text 
                style={{
                  color: 'black',
                  textAlign: 'center',
                }
              }>
                ADD
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>

      <View style={styles.goalsContainer}>
        {courseGoals.map((goal, index) => (
          <Text key={index}>
            {goal}
          </Text>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#2e2e2e',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 24
  },
  textInput: {
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    color: '#dedede',
  },
  textContainer: {
    width: '65%'
  },
  buttonContainer: {
    width: '25%',
  },
  goalsContainer: {
    flex: 5
  }
});
