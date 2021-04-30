/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import admin from '../../helpers/adminInstance';
import * as Types from '../constants';

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: Types.GET_CATEGORIES_REQUEST });
        const res = await axios.get('/api/categories');
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
    try {
        const res = await admin.post('/api/categories', form);
        console.log(res.data);
        dispatch({
            type: 'POST',
        });
    } catch (error) {
        console.log(error);
    }
};
