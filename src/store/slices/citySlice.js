import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import instance from '../../api/axios-config'

const initialState = {
	city: [],
	region: [],
	favorites: [],
	isLoading: false,
}

export const getCity = createAsyncThunk(
	'city/getCity',
	async (_, { rejectWithValue }) => {
		try {
			const response = await instance.get('all')
			return response.data
		} catch (error) {
			rejectWithValue(error.message)
		}
	},
)

export const getRegion = createAsyncThunk(
	'city/getRegion',
	async (region, { rejectWithValue }) => {
		try {
			const response = await instance.get(`region/${region}`)
			return response.data
		} catch (error) {
			rejectWithValue(error.message)
		}
	},
)

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		newFavorites(state, action) {
			state.favorites.push(action.payload)
		},
	},
	extraReducers: (buider) => {
		buider

			//get city
			.addCase(getCity.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getCity.fulfilled, (state, action) => {
				state.isLoading = false
				state.city = action.payload
			})
			.addCase(getCity.rejected, (state) => {
				state.isLoading = false
			})

			//get region
			.addCase(getRegion.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getRegion.fulfilled, (state, action) => {
				state.isLoading = false
				state.region = action.payload
			})
			.addCase(getRegion.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { newFavorites } = citySlice.actions

export default citySlice
