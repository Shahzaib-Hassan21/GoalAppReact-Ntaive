import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setenteredGoalText(enteredText);
      }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');

    }

    return(
        <Modal visible={props.visible} animationType='fade'>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/image1.png')}/>
        <TextInput style={styles.textInput} 
        placeholder='Your course goal!' onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button  title='Add Goal' onPress={addGoalHandler} color={'#f0e68c'}/>
          </View>
          <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel} color={'#bdb76b'}/>  
          </View>        
        
        </View>
      </View>
      </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 16,
        backgroundColor: '#eee8aa'
      },
      image: {
      width: 100,
      height: 100,
      margin: 20  
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 16,
        borderColor: '#eee8aa',
        backgroundColor: '#fffacd',
        borderRadius: 6
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection:'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }
})