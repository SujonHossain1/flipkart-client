/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as Types from '../constants';

export const getInitialData = () => async (dispatch) => {
    dispatch({ type: Types.GET_CATEGORIES_REQUEST });
    dispatch({ type: Types.GET_PRODUCTS_REQUEST });

    const res = await axios.post('/api/data/get-initial-data');

    if (res.status === 200) {
        const { products, categories } = res.data;
        dispatch({
            type: Types.GET_CATEGORIES_SUCCESS,
            payload: {
                categories,
            },
        });
        dispatch({
            type: Types.GET_PRODUCTS_SUCCESS,
            payload: {
                products,
            },
        });
    } else {
        dispatch({
            type: Types.GET_CATEGORIES_FAILURE,
            payload: {
                error: res.data.error,
            },
        });
        dispatch({
            type: Types.GET_PRODUCTS_FAILURE,
            payload: {
                error: res.data.error,
            },
        });
    }
};
