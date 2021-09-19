import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Import components
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <Header title="Guess a Number"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
