import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Avatar from './Avatar'


export default function Header() {
  return (
    <View style={styles.container}>
    <Avatar size ={20}
    />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    shadowRadius: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
});
