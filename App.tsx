import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

type Goal = {
  id: string,
  value: string
}

export default function App() {

  const [courseGoals, setCourseGoals] = useState<Goal[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)

  const startAddGoalHandler = () => {
    setOpenModal(true)
  }

  const endAddGoalHandler = () => {
    setOpenModal(false)
  }

  const addGoalHandler = (value: string) => {
    setCourseGoals(currentGoals => (
      [...currentGoals, { id: new Date().getTime().toString(), value: value}]
    ))
    setOpenModal(false)

  }

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals(currentGoals => (
      currentGoals.filter(goal => goal.id !== goalId)
    ))
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color='orange' 
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        addGoalHandler={addGoalHandler}
        endAddGoalHandler={endAddGoalHandler}
        visible={openModal}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem 
              item={itemData.item}
              onDeleteItem={removeGoalHandler} 
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  
  
  
  goalsContainer: {
    flex: 5
  },
  
});
