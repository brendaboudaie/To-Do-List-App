import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress = {props.onDelete}>
            <View style = {styles.listItems}> 
                <Text> {props.title} </Text> 
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItems: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#b5b5b5'
      },
});

export default GoalItem;