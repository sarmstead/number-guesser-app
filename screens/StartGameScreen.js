import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
       <View style={styles.startGameScreen}>
           <Text style={styles.title}>Start a New Game</Text>
           <View style={styles.inputContainer}>
               <Text>Select a Number</Text>
               <TextInput />
               <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}} />
               </View>   
           </View>
       </View> 
    );
}

const styles = StyleSheet.create({
    startGameScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
})

export default StartGameScreen;