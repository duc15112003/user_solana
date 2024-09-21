import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/ideas';

const token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
});

const getAllIdeas = async (page, size) => {
    try {
      const response = await apiClient.get('/all', {
        params: { page, size }
      })
      return response.data.result.content;
    } catch (error) {
      console.error('Error get all ideas', error)
      throw error
    }
}

const getIdea = async(id) =>{
    try {
        const response = await apiClient.get(`/id/${id}`);
        return response.data.result;
    } catch (error) {
        console.error('Error get a idea', error)
        throw error
    }
}

const ideaService = {
    getAllIdeas,
    getIdea
}

export default ideaService;
