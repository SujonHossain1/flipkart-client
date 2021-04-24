import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

axios.defaults.baseURL = 'http://localhost:4000';
window.store = store;

const token = localStorage.getItem('user-auth-token');
if (token) {
    axios.defaults.headers.Authorization = token;
}

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
