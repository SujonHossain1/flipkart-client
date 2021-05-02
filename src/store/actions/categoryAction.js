/* eslint-disable import/prefer-default-export */
// import axios from 'axios';

import admin from '../../helpers/adminInstance';
import * as Types from '../constants';

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: Types.GET_CATEGORIES_REQUEST });
        const res = await admin.get('/api/categories');
        if (res.status === 200) {
            const { categories } = res.data;
            console.log(res.data);

            dispatch({
                type: Types.GET_CATEGORIES_SUCCESS,
                payload: {
                    categories,
                },
            });
        } else {
            dispatch({
                type: Types.GET_CATEGORIES_FAILURE,
                payload: {
                    error: res.data.error,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.GET_CATEGORIES_FAILURE,
            payload: {
                error: "Categories can't get",
            },
        });
    }
};

export const createCategory = (form) => async (dispatch) => {
    dispatch({ type: Types.CREATE_CATEGORY_REQUEST });
    try {
        const res = await admin.post('/api/categories', form);
        if (res.status === 201) {
            const { category, message } = res.data;
            dispatch({
                type: Types.CREATE_CATEGORY_SUCCESS,
                payload: {
                    category,
                    message,
                },
            });
        } else {
            dispatch({
                type: Types.CREATE_CATEGORY_FAILURE,
                error: res.data.error,
            });
        }
    } catch (error) {
        dispatch({
            type: Types.CREATE_CATEGORY_FAILURE,
            message: 'Something went wrong!',
        });
    }
};
