import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList, StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((cuurentCourseGoals) => [
    ...cuurentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(cuurentCourseGoals => {
      return cuurentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#f0e68c'} onPress={startAddGoalHandler}/>
      <GoalInput 
      visible={modalIsVisible} 
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return( 
        <GoalItem text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>
        );
  }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      />
      </View>
    </View>
    </>
  )
    }

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#eee8aa'
  },
  goalsContainer: {
    flex: 5
  },

});
