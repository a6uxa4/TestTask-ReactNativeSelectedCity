import React from 'react'
import { View, FlatList, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'
import { Text } from 'react-native'

export default function FavoriteScreen({ city, setComponents }) {
	function handleClick() {
		setComponents(true)
	}
	return (
		<View style={styles.wrapper}>
			<Button
				title='Назад'
				style={styles.button}
				onPress={() => handleClick()}
			/>
			<Text style={styles.text}>Избранные страны</Text>
			<View style={styles.container}>
				<FlatList
					data={city}
					pagingEnabled={true}
					renderItem={({ item }) => (
						<Card
							item={item}
							navigate={false}
							onScroll={(e) => {
								e.preventDefault()
							}}
						/>
					)}
					contentContainerStyle={{
						paddingHorizontal: 10,
						marginTop: 20,
						display: 'flex',
						gap: 20,
					}}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		marginTop: 100,
	},
	container: {
		width: '100%',
		paddingBottom: 210,
	},
	text: {
		color: 'white',
		fontSize: 30,
		fontWeight: 600,
	},
	button: {
		width: 100,
		height: 40,
	},
})
