import * as Types from '../constants';

const init = {
    categories: [],
    category: {},
    loading: false,
    error: '',
    message: '',
};

const categoryReducer = (state = init, action) => {
    switch (action.type) {
        case Types.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload.categories,
                loading: false,
                error: '',
            };
        case Types.GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        /** **** Create Category ******* */
        case Types.CREATE_CATEGORY_REQUEST:
            return {
                ...state,
                lading: true,
            };

        case Types.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload.category,
                message: action.payload.message,
                error: '',
            };

        case Types.CREATE_CATEGORY_FAILURE:
            return {
                ...state,
                message: '',
                error: action.payload?.error || 'Something went wrong!',
                loading: false,
            };
        default:
            return state;
    }
};

export default categoryReducer;
