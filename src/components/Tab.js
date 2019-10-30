import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

/*functionconst iWasPressed = () => {
  console.log('i was pressed')
}*/

export default function Tab (
  { title, changeScreen, isSelected, index}
  ) {

  return (
    <TouchableOpacity 
      style={styles.container} //prop
      onPress={() => changeScreen(index)} //prop 
    >

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
