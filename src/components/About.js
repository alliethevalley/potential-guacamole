import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Avatar from './Avatar'
import { title, description } from '../data/AboutPageData'


export default function About() {
  return (
    <View style={styles.container} >
   	 <Text style ={styles.header}> {title}</Text>
   	 <Avatar size = {150}/>
   	<Text style = {styles.description}>{description}</Text> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  
  header: {
  	fontSize: 35,
 	/*textAlign: 'center',*/
 	marginTop: 24,
 	marginBottom: 48,
 	fontWeight: 'bold',
  },

description: {
	textAlign: 'center',
	marginTop: 50,
	/*padding: 30,*/
  },
});
