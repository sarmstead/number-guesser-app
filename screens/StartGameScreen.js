import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StartGameScreen = props => {
    return (
       <View style={styles.startGameScreen}>
           <Text>The Game Screen</Text>
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