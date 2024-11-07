import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
	<View>
		<Text style={styles.heading}>Elevated cards</Text>
		<ScrollView>
			<View>
				<Text>Card</Text>
			</View>
		</ScrollView>
	</View>
  )
}

export default Cards

const styles = StyleSheet.create({
	heading: {
		fontSize: 24,
		fontWeight: '500',
		marginVertical: 8
	}
})