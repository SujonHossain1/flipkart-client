/* eslint-disable import/prefer-default-export */

import admin from '../../helpers/adminInstance';
import * as Types from '../constants';

export const adminLogin = (userInfo, history, from) => async (dispatch) => {
    dispatch({ type: Types.ADMIN_LOGIN_REQUEST });

    try {
        const res = await admin.post('/api/admin/login', userInfo);

        if (res.status === 200) {
            const { message, token, user } = res.data;
            localStorage.setItem('admin-auth-token', `Bearer ${token}`);
            localStorage.setItem('auth-admin', JSON.stringify(user));

            history.push(from);

            dispatch({
                type: Types.ADMIN_LOGIN_SUCCESS,
                payload: {
                    message,
                    user,
                    token,
                },
            });
            window.location.reload();
        } else {
            dispatch({
                type: Types.ADMIN_LOGIN_FAILURE,
                payload: {
                    error: res.data.error,
                },
            });
        }
    } catch (error) {
        console.log(error);

        dispatch({
            type: Types.ADMIN_LOGIN_FAILURE,
            payload: {
                error: error?.response?.data?.message || error.message || 'Something went wrong!',
            },
        });
    }
};

export const adminSignUp = (userInfo) => async (dispatch) => {
    dispatch({ type: Types.ADMIN_SIGNUP_REQUEST });

    try {
        const res = await admin.post('/api/admin/sign-up', userInfo);

        if (res.status === 201) {
            const { message } = res.data;
            // history.push('/admin/dashboard');

            dispatch({
                type: Types.ADMIN_SIGNUP_SUCCESS,
                payload: {
                    message,
                },
            });
        } else {
            dispatch({
                type: Types.ADMIN_SIGNUP_FAILURE,
                payload: {
                    error: res.data.error || 'Something went wrong!',
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.ADMIN_SIGNUP_FAILURE,
            payload: {
                error: error?.response?.data?.error || error.message || 'Something went wrong!',
            },
        });
    }
};

export const isAdminLogin = () => (dispatch) => {
    const token = localStorage.getItem('admin-auth-token');
    const user = JSON.parse(localStorage.getItem('auth-admin'));

    if (token) {
        dispatch({
            type: Types.ADMIN_LOGIN_SUCCESS,
            payload: { token, user, message: '' },
        });
    } else {
        dispatch({
            type: Types.ADMIN_LOGIN_FAILURE,
            payload: {
                authenticate: false,
                error: 'Admin login to Failed!, Please Login',
            },
        });
    }
};

export const adminSignOut = () => async (dispatch) => {
    dispatch({ type: Types.ADMIN_LOGOUT_REQUEST });

    try {
        const res = await admin.post('/api/admin/sign-out');
        if (res.status === 200) {
            localStorage.removeItem('admin-auth-token');
            localStorage.removeItem('auth-admin');

            dispatch({
                type: Types.ADMIN_LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type: Types.ADMIN_LOGOUT_FAILURE,
                error: res.data.error || 'SignOut Failed',
            });
        }
    } catch (error) {
        dispatch({
            type: Types.ADMIN_LOGOUT_FAILURE,
            error: 'SignOut Failed',
        });
    }
};
