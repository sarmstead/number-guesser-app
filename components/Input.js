import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({

})
export default Input;