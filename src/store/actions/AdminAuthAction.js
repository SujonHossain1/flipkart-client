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
        } else {
            dispatch({
                type: Types.ADMIN_LOGIN_FAILURE,
                payload: {
                    message: res.data.error,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.ADMIN_LOGIN_FAILURE,
            payload: {
                message: error?.response?.data?.message || error.message || 'Something went wrong!',
            },
        });
    }
};

export const adminSignIn = (userInfo, history, from) => async (dispatch) => {
    dispatch({ type: Types.ADMIN_LOGIN_REQUEST });

    try {
        const res = await admin.post('/api/admin/sign-up', userInfo);

        if (res.status === 201) {
            const { message } = res.data;
            history.push(from);

            dispatch({
                type: Types.ADMIN_LOGIN_SUCCESS,
                payload: {
                    message,
                },
            });
        } else {
            dispatch({
                type: Types.ADMIN_LOGIN_FAILURE,
                payload: {
                    message: res.data.error,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.ADMIN_LOGIN_FAILURE,
            payload: {
                message: error?.response?.data?.message || error.message || 'Something went wrong!',
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
                message: 'Failed to login Admin!',
            },
        });
    }
};

export const adminSignOut = () => (dispatch) => {
    localStorage.removeItem('admin-auth-token');
    dispatch({
        type: Types.ADMIN_LOGOUT_REQUEST,
    });
};
