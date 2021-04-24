import * as Types from '../constants';

const init = {
    token: null,
    user: {},
    message: '',
    authenticate: false,
    authenticating: false,
};

const authReducer = (state = init, action) => {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
            };

        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                authenticate: true,
                authenticating: false,
                user: action.payload.user,
                token: action.payload.token,
                message: action.payload.message,
            };

        case Types.LOGIN_FAILURE:
            return {
                ...state,
                authenticate: false,
                message: action.payload.message,
            };

        default:
            return state;
    }
};

export default authReducer;
