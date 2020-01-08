import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default function App() {
  const [courseGoals, setCourseGoals ] = useState([]) // for goals states
  const [isAddMode, setIsAddMode] = useState(false); // if starting from new or not

  const addHandler = goalTitle => {
    // setCoursegoals func takes currentGoal then adds {key, value} 
    // {key, value} is the next goal getting added to array list
    setCourseGoals(currentGoal => [...currentGoal, // ... notation = copy current list
                    {id: Math.random().toString(), value: goalTitle}]
                  );
    // when add button pressed, close modal
    setIsAddMode(false);
  };

  const removeHandler = goalId => {
    // filter only the ones that don't have the same ID
    setCourseGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== goalId)
    });
  };

  const cancelNewGoal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <View style = {styles.delete}> 
        <Text style = {{color: 'grey'}}>(Tap goal when completed)</Text>
      </View>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addHandler}
        onCancel={cancelNewGoal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id} // for unique keys
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={removeHandler.bind(this, itemData.item.id)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 50,
  },
  delete: {
    justifyContent: "center",
    alignItems: "center",
  }
});
