import { View, TextInput, TouchableWithoutFeedback, StyleSheet, Text, Modal, Image } from "react-native"
import { useState } from "react"
const GoalInput = (
    { 
        addGoalHandler,
        visible,
        endAddGoalHandler
    } : {
        addGoalHandler: (value: string) => void,
        visible: boolean,
        endAddGoalHandler: () => void 
    }
) => {
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText)
  }
  const onAddGoal = () => {
    addGoalHandler(enteredGoal)
    setEnteredGoal('')
  }
  return (
    <Modal animationType="slide" visible={visible}>
    <View style={styles.inputContainer}>  
        <Image 
          source={require('../assets/images/robot.png')}
          style={{
            width: 200,
            height: 200,
            marginBottom: 20
          }}
        />
        <View style={styles.textContainer}>
          <TextInput 
            placeholder='your course goal!'
            placeholderTextColor={'#9e9e9e'}
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            
          />
          </View> 

          <View style={styles.buttonsContainer}>
          <View style={{...styles.buttonContainer, backgroundColor: 'rgba(255, 0, 0, .75)', borderRadius: 25}}>
            <TouchableWithoutFeedback
              onPress={endAddGoalHandler}
            >
              <View style={{ padding: 10,}}>
                <Text 
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }
                }>
                  Cancel
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={onAddGoal}
              disabled={enteredGoal.length <= 5}
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

    </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        backgroundColor: 'orange'
      },
      textContainer: {
        width: '85%',
        borderRadius: 15,
        overflow: 'hidden',
      },
      buttonContainer: {
        width: '30%',
      },
      textInput: {
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
        color: '#dedede',
        backgroundColor: '#2e2e2e',
        paddingVertical: 5,
        paddingHorizontal: 15
      },
      buttonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10
      }
})