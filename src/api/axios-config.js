import axios from 'axios'
import { BASE_URL } from '../utils/helper'

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

export default instance
