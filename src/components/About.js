import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function About() {
  return (
    <View style={styles.container} >
    <Text>Ayesha Allie</Text>
    <Text>a description about myself still need to actually fill this in. And talk about the things I like to do and who I am 
    </Text> 
    <Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
