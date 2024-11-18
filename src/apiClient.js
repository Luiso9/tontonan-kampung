import axios from 'axios';
import { apiURL } from './api/baseApi';

const axiosInstance = axios.create({
	baseURL: apiURL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
});

/**
 * A simplified API client for GET requests.
 * @param {string} endpoint - The API endpoint to request.
 * @param {Object} [options={}] - Additional options for the request.
 * @param {Object} [options.headers] - Custom headers for the request.
 * @returns {Promise<Object>} - Resolves with the response data.
 */
export const apiClient = (endpoint, options = {}) => {
	const { headers = {} } = options;

	return axiosInstance
		.get(endpoint, { headers })
		.then(response => {
			console.log('API Response:', response);  
			return response.data;  
		})
		.catch(error => {
			console.error('API Request Error:', error);
			if (error.response) {
				console.error('API Response Data:', error.response.data);  // Log response data on error
			}
			const errorMessage = error.response?.data?.message || 'API GET request failed';
			throw new Error(errorMessage);
		});
};

export default apiClient;
