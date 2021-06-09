import { combineReducers } from 'redux';
import adminProductReducer from './admin.productReducer';
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
    product: adminProductReducer,
    products: productReducer,
    order: orderReducer,
    category: categoryReducer,
});

export default rootReducer;
