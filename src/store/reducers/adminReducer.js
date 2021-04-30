import * as Types from '../constants';

const init = {
    error: '',
    message: '',
    loading: false,
};

const adminReducer = (state = init, action) => {
    switch (action.type) {
        case Types.ADMIN_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Types.ADMIN_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                error: '',
            };

        case Types.ADMIN_SIGNUP_FAILURE:
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

export default adminReducer;
