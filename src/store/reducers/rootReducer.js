import { combineReducers } from 'redux';
import adminAuthReducer from './adminAuthReducer';
import adminReducer from './adminReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    adminAuth: adminAuthReducer,
});

export default rootReducer;
