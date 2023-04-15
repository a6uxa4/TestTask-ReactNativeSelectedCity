import { View, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { HEADER_REGION_SLIDES } from '../utils/helper'
import OnboardingItem from './OnboardingItem'
import { getRegion } from '../store/slices/citySlice'
import { useDispatch } from 'react-redux'

export default function Onboarding() {
	const [region, setRegion] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		if (region !== '') {
			dispatch(getRegion(region))
		}
	}, [region])

	return (
		<View style={styles.container}>
			<FlatList
				data={HEADER_REGION_SLIDES}
				pagingEnabled={true}
				renderItem={({ item }) => (
					<OnboardingItem
						item={item}
						region={region}
						setRegion={setRegion}
						onScroll={(e) => {
							e.preventDefault()
						}}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 20,
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
		height: 50,
		marginTop: 60,
	},
})
