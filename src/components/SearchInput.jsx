import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import React from 'react'

export default function SearchInput({ value, handleSearch }) {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.Styleinput}
				value={value}
				onChangeText={handleSearch}
			/>
			<TouchableOpacity style={styles.Stylebutton}>
				<Text style={styles.buttontext}>Поиск</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		width: '100%',
		height: 50,
		marginTop: 30,
		justifyContent: 'center',
	},
	Styleinput: {
		width: '70%',
		height: 48,
		backgroundColor: 'white',
		borderRadius: 12,
		borderColor: '#D0D4D9',
		padding: 10,
		borderWidth: 2,
		fontSize: 24,
	},
	Stylebutton: {
		width: '20%',
		height: 40,
		backgroundColor: '#008ce2',
		borderRadius: 8,
		borderColor: 'white',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttontext: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
})
