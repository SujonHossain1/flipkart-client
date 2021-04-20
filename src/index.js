import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

axios.defaults.baseURL = 'http://localhost:4000';

const token = localStorage.getItem('user-auth-token');
if (token) {
    axios.defaults.headers.Authorization = token;
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
