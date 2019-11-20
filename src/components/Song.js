import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';


export default function Song({ title, artist, link }) {
  console.log(title)
  
  return (
    <TouchableOpacity onPress = {() => Linking.openURL(link)}>


      <View style = {styles.container}>
      <Text style = {styles.title}> Title: {title}</Text>
      <Text style = {styles.artist}> Artist: {artist}</Text>
    </View>
   </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 0.1,
    shadowColor: '#9D5FC6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    padding: 4,
    marginBottom: 10,      
    backgroundColor: '#9D5FC6'  
  },

  title: {
    fontSize: 12,
    marginBottom: 2, 
    fontWeight: 'italic',
    color: 'black'

  },

  artist:{
    fontSize: 12,
    fontWeight: 'italic',
    color: 'black'
  },


});



