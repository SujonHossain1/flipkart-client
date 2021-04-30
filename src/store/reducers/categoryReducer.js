import * as Types from '../constants';

const init = {
    categories: [],
    loading: false,
    error: '',
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
        default:
            return state;
    }
};

export default categoryReducer;
