import axios from 'axios';

const API_URL = '/auth';

class UserService {
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    login(user) {
        return axios.post(`${API_URL}/login`, user);
    }
}

export default new UserService();
