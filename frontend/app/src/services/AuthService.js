import axios from 'axios';

const API_URL = 'http://localhost:8000/auth_app/';

axios.defaults.withCredentials = true;  // Include credentials (cookies) with requests

// Get CSRF token from cookies
function getCSRFToken() {
    const csrfCookie = document.cookie.match(/csrftoken=([^;]*)/);
    return csrfCookie ? csrfCookie[1] : null;
}

axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken();
axios.defaults.withCredentials = true;  

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
        }).then(response => {
            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('user');
        return axios.post(API_URL + 'logout/');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
