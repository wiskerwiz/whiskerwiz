// frontend/src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/auth_app/';

class AuthService {
    register(userData) {
        return axios.post(API_URL + 'signup/', {
            username: userData.username,
            email: userData.email,
            password: userData.password,
            first_name: userData.first_name,
            last_name: userData.last_name,
        });
    }

    login(username, password) {
        return axios.post(API_URL + 'login/', {
            username,
            password,
        });
    }

    logout() {
        return axios.post(API_URL + 'logout/');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
