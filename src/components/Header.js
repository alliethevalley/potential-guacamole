import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Avatar from './Avatar'


export default function Header( 
  {changeScreen}
  ){
    return (
      <TouchableOpacity
      style={styles.container} 
      onPress={() => changeScreen(0)} 
      >

      <View style={styles.container}>
       <Avatar size ={20} />
    </View>
    </TouchableOpacity>
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



