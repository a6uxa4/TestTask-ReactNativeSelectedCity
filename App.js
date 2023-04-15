import { store } from './src/store'
import { Provider } from 'react-redux'
import MainScreen from './src/screens/MainScreen'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<MainScreen />
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'black',
	},
})
