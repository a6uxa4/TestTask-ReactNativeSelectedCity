import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function OnboardingItem({ item, region, setRegion }) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{ backgroundColor: region === item.path ? '#57595d' : 'white' },
			]}
			onPress={() => setRegion(item.path)}>
			<Text
				style={[
					styles.title,
					{ color: region === item.path ? 'white' : 'black' },
				]}>
				{item.title}
			</Text>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 50,
		borderRadius: 12,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 700,
	},
})
