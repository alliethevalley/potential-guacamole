import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import profile from '../../assets/profile.jpg'


export default function Header() {
  return (
    <View style={styles.container}>
    <Image
      source={profile}
    
    }}
    />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    shadowRadius: 50,
    borderBottomWidth: 5,
  },
 

  }
});
