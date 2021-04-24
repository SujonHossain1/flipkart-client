/* eslint-disable import/prefer-default-export */

import admin from '../../helpers/adminInstance';
import * as Types from '../constants';

export const adminLogin = (userInfo, history, from) => async (dispatch) => {
    dispatch({ type: Types.LOGIN_REQUEST });

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

export const isAdminLogin = () => (dispatch) => {
    const token = localStorage.getItem('admin-auth-token');
    const user = JSON.parse(localStorage.getItem('auth-admin'));

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
