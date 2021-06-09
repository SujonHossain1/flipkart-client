/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as Types from '../constants';

export const getProductsBySlug = (slug) => async (dispatch) => {
    dispatch({ type: Types.GET_PRODUCTS_BY_SLUG_REQUEST });
    try {
        const res = await axios.get(`/api/products/products-by-slug/${slug}`);
        if (res.status === 200) {
            const { products, productByPrice } = res.data;
            dispatch({
                type: Types.GET_PRODUCTS_BY_SLUG_SUCCESS,
                payload: {
                    products,
                    productByPrice,
                },
            });
        } else {
            console.log(res);
        }
    } catch (error) {
        dispatch({
            type: Types.GET_PRODUCTS_BY_SLUG_FAILURE,
            error: error?.response?.data?.message || error.message || 'Something went wrong!',
        });
    }
};
