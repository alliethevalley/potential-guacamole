import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import profile from '../../assets/profile.jpg'


export default function Avatar(props) {
  const size = props.size
  return (
    <View>
    <Image style={{
    	width: size,
    	height: size,
    	borderRadius: size / 2
    }}
    source={profile}
    />
    </View>
  );
}

const styles = StyleSheet.create({
});
