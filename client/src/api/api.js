import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchUsers = async () => {
    try {
        // const response = "hola";
        const response = await axios.get(`${API_URL}/users`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};