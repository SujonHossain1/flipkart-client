import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { isAdminLogin } from '../../store/actions/AdminAuthAction';
import AdminPrivateRoute from '../AdminPrivateRoute';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Header from '../components/Header/Header';
import AdminHome from './AdminHome';

const Admin = ({ match }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAdminLogin());
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className="container-fluid">
                <Switch>
                    <AdminPrivateRoute exact path={`${match.path}/`}>
                        <AdminHome />
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
