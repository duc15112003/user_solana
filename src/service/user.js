import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/auth';

const token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
});

const getUser = async (username) => {
    try {
        console.log("Username:", username);

        const response = await apiClient.get('/profile', {
            param: username
        });

        console.log("Response data:", response.data);

        return response.data.response;

    } catch (error) {
        if (error.response) {
            // Client received an error response (5xx, 4xx)
            console.error('Response error data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            // Client never received a response, or request never left
            console.error('No response received:', error.request);
        } else {
            // Anything else
            console.error('Error message:', error.message);
        }
        throw error;
    }
}

export default getUser();