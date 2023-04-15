import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import Onboarding from '../components/Onboarding'
import SearchInput from '../components/SearchInput'
import ContainerCard from '../components/ContainerCard'

export default function InsideMainScreen({
	setComponents,
	favorites,
	region,
	city,
	dispatch,
}) {
	const [data, setData] = useState(city)
	const [valueSearch, setValueSearch] = useState('')

	useEffect(() => {
		if (valueSearch === '') {
			if (region.length) {
				setData(region)
			} else {
				setData(city)
			}
		} else {
			setData(data)
		}
	}, [region, city, valueSearch])

	function handleSearch(value) {
		setValueSearch(value)
		const filteredData = data.filter((city) =>
			city.name.common.toLowerCase().includes(valueSearch.toLowerCase()),
		)
		setData(filteredData)
	}

	function handleClick() {
		setComponents(false)
	}
	return (
		<View style={styles.container}>
			<Onboarding />
			<SearchInput handleSearch={handleSearch} value={valueSearch} />
			<ContainerCard dispatch={dispatch} city={data} />
			{favorites.length ? (
				<TouchableOpacity
					style={styles.button}
					onPress={() => handleClick()}>
					<Text style={styles.title}>Избранные страны</Text>
				</TouchableOpacity>
			) : null}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	button: {
		width: 200,
		padding: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 12,
		backgroundColor: 'green',
		position: 'absolute',
		bottom: 70,
		left: 20,
	},
	title: {
		fontSize: 16,
		fontWeight: 600,
		color: 'white',
	},
})
