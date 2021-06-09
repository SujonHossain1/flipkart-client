import * as Types from '../constants';

const init = {
    products: [],
    productByPrice: {
        under5k: [],
        under10k: [],
        under20k: [],
        under30k: [],
    },
    loading: false,
    error: '',
};

const productReducer = (state = init, action) => {
    switch (action.type) {
        case Types.GET_PRODUCTS_BY_SLUG_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Types.GET_PRODUCTS_BY_SLUG_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };

        case Types.GET_PRODUCTS_BY_SLUG_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
};

export default productReducer;
