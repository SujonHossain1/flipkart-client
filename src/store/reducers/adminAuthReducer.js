import * as Types from '../constants';

const init = {
    token: null,
    user: {},
    message: '',
    authenticate: false,
    authenticating: false,
    loading: false,
    error: '',
};

const adminAuthReducer = (state = init, action) => {
    switch (action.type) {
        case Types.ADMIN_LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
            };

        case Types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                authenticate: true,
                authenticating: false,
                user: action.payload.user,
                token: action.payload.token,
                message: action.payload.message,
                error: '',
            };

        case Types.ADMIN_LOGIN_FAILURE:
            return {
                ...state,
                authenticate: false,
                error: action.payload.error,
                message: '',
            };

        case Types.ADMIN_LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.ADMIN_LOGOUT_SUCCESS:
            return {
                ...init,
            };
        case Types.ADMIN_LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload?.error || 'Sign Out Failed',
                loading: false,
            };

        default:
            return state;
    }
};

export default adminAuthReducer;
