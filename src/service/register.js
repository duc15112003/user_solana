import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/auth';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const RegisterProcess = async (formData) => {
    try {
        // Gửi yêu cầu POST với axios
            await apiClient.post('/register', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    } catch (error) {
        throw error;
    }
};

const RegisterService = {
    RegisterProcess
};

export default RegisterService;
