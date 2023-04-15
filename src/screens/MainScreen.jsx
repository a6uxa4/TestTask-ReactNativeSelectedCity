import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import InsideMainScreen from './InsideMainScreen'
import FavoriteScreen from './FavoriteScreen'
import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../store/slices/citySlice'

export default function MainScreen() {
	const [components, setComponents] = useState(true)

	const { city, region, favorites } = useSelector((state) => state.city)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCity())
	}, [dispatch])

	return (
		<View style={styles.container}>
			{components ? (
				<InsideMainScreen
					setComponents={setComponents}
					favorites={favorites}
					region={region}
					dispatch={dispatch}
					city={city}
				/>
			) : (
				<FavoriteScreen
					setComponents={setComponents}
					city={favorites}
				/>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
})
