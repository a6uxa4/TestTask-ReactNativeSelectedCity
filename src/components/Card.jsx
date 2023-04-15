import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { newFavorites } from '../store/slices/citySlice'

export default function Card({ item, dispatch, navigate }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image
					source={{ uri: item.flags.png }}
					defaultSource={require('../../assets/wp4371959.jpg')}
					style={styles.image}
					resizeMode='contain'
				/>
				{navigate ? (
					<TouchableOpacity
						style={styles.button}
						onPress={() => dispatch(newFavorites(item))}>
						<Text style={styles.title}>В избранное</Text>
					</TouchableOpacity>
				) : (
					<Text>Избранном</Text>
				)}
			</View>
			<View style={styles.description}>
				<Text style={styles.title}>Название: {item.name.common}</Text>
				<Text style={styles.title}>Столица: {item.capital}</Text>
				<Text style={styles.title}>Население: {item.population}</Text>
				<Text style={styles.title}>Площадь: {item.area}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		minHeight: 150,
		maxHeight: 200,
		backgroundColor: '#1c1c1e',
		borderRadius: 12,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	card: {
		width: '40%',
		height: '90%',
		backgroundColor: 'white',
		borderRadius: 12,
		marginLeft: 10,
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	},
	image: {
		width: '80%',
		height: '60%',
		borderRadius: 12,
		marginTop: 10,
	},
	button: {
		width: '80%',
		height: '20%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		backgroundColor: '#1c1c1e',
	},
	title: {
		fontSize: 16,
		fontWeight: 600,
		color: 'white',
	},
	description: {
		width: '45%',
	},
})
