import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function Tab(props) {
	const title = props.title
  return (
    <View style={styles.container} >
    <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
});
