import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Tab (
  { title, changeScreen, isSelected, index}
  ) {
      console.log(isSelected)

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => changeScreen(index)} > 

      <View style={styles.container} >
        <Text style ={
          isSelected
          ? styles.selectedText : styles.unselectedText
        }>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  selectedText:{
    color: 'blue',
  },
  unselectedText:{
    color:'black',
  },
});
