import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {music} from '../data/MusicData' 
import Song from './Song'

class Music extends Component{
   render() {

   	return(
   		<FlatList data = {music} numColumns = '1' renderItem={({item}) =>
   		<View style = {styles.container}>
   			<Song style = {styles.songs} title ={item.title} artist = {item.artist} link = {item.link}/>
   		</View>
   		}
   		/>
   )
   
   }
}




const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
     
   },

  songs: {
  		borderRadius: 1,
        borderWidth: 1,
        padding: 5

  }
})

export default Music

   