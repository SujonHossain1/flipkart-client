/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import * as Types from '../constants';

export const login = (userInfo, history, from) => async (dispatch) => {
    dispatch({ type: Types.LOGIN_REQUEST });

    try {
        const res = await axios.post('/api/users/login', userInfo);

        if (res.status === 200) {
            const { message, token, user } = res.data;
            localStorage.setItem('user-auth-token', `Bearer ${token}`);
            localStorage.setItem('auth-user', JSON.stringify(user));

            history.push(from);

            dispatch({
                type: Types.LOGIN_SUCCESS,
                payload: {
                    message,
                    user,
                    token,
                },
            });
        } else {
            dispatch({
                type: Types.LOGIN_FAILURE,
                payload: {
                    message: res.data.error,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.LOGIN_FAILURE,
            payload: {
                message: error?.response?.data?.message || error.message || 'Something went wrong!',
            },
        });
    }
};

export const isUserLogin = () => (dispatch) => {
    const token = localStorage.getItem('user-auth-token');
    const user = JSON.parse(localStorage.getItem('auth-user'));

    if (token) {
        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: { token, user },
        });
    } else {
        dispatch({
            type: Types.LOGIN_FAILURE,
            payload: {
                authenticate: false,
                message: 'Failed to login!',
            },
        });
    }
};
