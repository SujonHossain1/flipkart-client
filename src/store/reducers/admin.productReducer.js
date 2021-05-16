import * as Types from '../constants';

const init = {
    products: [],
    product: {},
    loading: false,
    message: '',
    error: '',
};

const productReducer = (state = init, action) => {
    switch (action.type) {
        /** **** Get Products **** */
        case Types.GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
                error: '',
            };
        case Types.GET_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        /** **** Create Product ****  */
        case Types.CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                product: action.payload.product,
                error: '',
            };
        case Types.CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                message: '',
            };
        default:
            return state;
    }
};

export default productReducer;
