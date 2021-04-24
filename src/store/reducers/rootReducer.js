import { combineReducers } from 'redux';
import adminAuthReducer from './adminAuthReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    adminAuth: adminAuthReducer,
});

export default rootReducer;
