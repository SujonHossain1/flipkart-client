/* eslint-disable import/prefer-default-export */

import admin from '../../helpers/adminInstance';
import * as Types from '../constants';

export const addProduct = (getProduct) => async (dispatch) => {
    dispatch({ type: Types.CREATE_PRODUCT_REQUEST });

    try {
        const res = await admin.post('/api/products/add-product-images', getProduct);
        if (res.status === 201) {
            const { message, product } = res.data;
            dispatch({
                type: Types.CREATE_PRODUCT_SUCCESS,
                payload: {
                    message,
                    product,
                },
            });
        } else {
            dispatch({
                type: Types.CREATE_PRODUCT_FAILURE,
                payload: {
                    error: res.data.error,
                },
            });
        }
    } catch (error) {
        dispatch({
            type: Types.CREATE_PRODUCT_FAILURE,
            payload: {
                error: error?.response?.data?.error || error.message || 'Something went wrong!',
            },
        });
    }
};
