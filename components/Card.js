import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={styles.card}>{props.children}</View>
}

const styles=StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        backgroundColor: '#ffffff',
        elevation: 5,
        padding: '7%',
        borderRadius: 20
    }
})

export default Card;