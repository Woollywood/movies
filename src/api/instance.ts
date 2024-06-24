import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const instance = axios.create({
	baseURL,
	timeout: 1000,
	headers: {
		Authorization: apiKey,
	},
});
