import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { isAdminLogin } from '../../store/actions/AdminAuthAction';
import { getCategories } from '../../store/actions/categoryAction';
import AdminPrivateRoute from '../AdminPrivateRoute';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Header from '../components/Header/Header';
import AdminHome from './AdminHome';
import Categories from './Categories';
import Orders from './Orders';
import Products from './Products';

const Admin = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAdminLogin());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className="container-fluid">
                <Switch>
                    <AdminPrivateRoute exact="true" path={`${match.path}/`}>
                        <AdminHome />
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${match.path}/products`}>
                        <Products />
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${match.path}/orders`}>
                        <Orders />
                    </AdminPrivateRoute>

                    <AdminPrivateRoute path={`${match.path}/category`}>
                        <Categories />
                    </AdminPrivateRoute>

                    <Route path={`${match.path}/sign-up`}>
                        <SignUp />
                    </Route>
                    <Route path={`${match.path}/login`}>
                        <Login />
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default withRouter(Admin);
