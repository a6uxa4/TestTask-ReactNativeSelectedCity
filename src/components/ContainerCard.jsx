import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import Card from './Card'

export default function ContainerCard({ city, dispatch }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={city}
				pagingEnabled={true}
				renderItem={({ item }) => (
					<Card
						dispatch={dispatch}
						item={item}
						navigate={true}
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
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingBottom: 210,
	},
})
