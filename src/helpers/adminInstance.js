import axios from 'axios';

const token = localStorage.getItem('admin-auth-token');

const admin = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Administrator: token || '',
    },
});

export default admin;
