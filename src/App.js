import jwtDecode from 'jwt-decode';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { isUserLogin } from './store/actions/authAction';
import { getCategories } from './store/actions/categoryAction';

const App = memo(() => {
    const token = localStorage.getItem('user-auth-token');
    const { authenticate } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (token) {
        const result = jwtDecode(token);
        console.log('token result: ', result);
    }

    useEffect(() => {
        if (!authenticate) {
            dispatch(isUserLogin());
        }
    }, [authenticate, dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Router>
            <Routes />
        </Router>
    );
});

export default App;
