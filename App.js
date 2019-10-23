import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/Navigator';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  footer: {
    height: 80,
    backgroundColor: 'blue',
  },

});



