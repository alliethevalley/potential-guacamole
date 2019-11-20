import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {screens} from '../data/NavigationData'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Music from './Music'



class Navigator extends Component {
	constructor(props){
		super(props)
		this.state = {
			screenIndex: 2, //0
		}
		this.changeScreen = this.changeScreen.bind(this)
		this.focusAboutPage = this.focusAboutPage.bind(this)
	}
	
	
	changeScreen(index){
		this.setState({
			screenIndex: index,
		})

	}

	focusAboutPage() {
		this.setState({
			screenIndex: 0,
		})
	}

	render () {
		return (
			<View style={styles.container}>
				<Header focusAboutPage={this.focusAboutPage}/>
				<Music />
				<Footer 
					screens={screens} test={'test'}
					screenIndex = {this.screenIndex}
					changeScreen={this.changeScreen}
				
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex:1,
		backgroundColor: 'red',
	}
})

export default Navigator