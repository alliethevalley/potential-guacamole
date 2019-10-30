import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tab from './Tab'


export default function Footer({screens, changeScreen, screenIndex}){

	
  return (
    <View style={styles.container} >{
    	screens.map((item, key) => {
    		return(
    			 <Tab 
    				title={screens[0]}
    				changeScreen={changeScreen}
    				key={key}
    				index={key}
    				isSelected = {screenIndex ===key}
    			/>
    		)
    	})
    }


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: 'black',
    shadowRadius: 50,
  },
});
