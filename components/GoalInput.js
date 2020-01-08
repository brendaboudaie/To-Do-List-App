import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    // entered text is argument, and returns curly braces
    const inputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Goal"
            onChangeText={inputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="ADD" onPress={addHandler} />
            </View>
            <View style={styles.button}>
              <Button title="CANCEL" color="grey" onPress={props.onCancel}/>
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    padding: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '60%',
  },
  button: {
      width: '40%',
  },
});

export default GoalInput;