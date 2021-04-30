import { combineReducers } from 'redux';
import adminAuthReducer from './adminAuthReducer';
import adminReducer from './adminReducer';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import orderReducer from './orderReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    adminAuth: adminAuthReducer,
    product: productReducer,
    order: orderReducer,
    category: categoryReducer,
});

export default rootReducer;
