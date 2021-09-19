import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

// Import components
import Card from '../components/Card';

const StartGameScreen = props => {
    return (
       <View style={styles.startGameScreen}>
           <Text style={styles.title}>Start a New Game</Text>
           <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                        <Button title="Reset" onPress={() => {}}/>
                        <Button title="Confirm" onPress={() => {}} />
                </View>
           </Card>
       </View> 
    );
}

const styles = StyleSheet.create({
    startGameScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})

export default StartGameScreen;