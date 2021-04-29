import { Route, Switch, withRouter } from 'react-router-dom';
import AdminPrivateRoute from '../AdminPrivateRoute';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';
import AdminHome from './AdminHome';

const Admin = ({ match }) => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <Switch>
                            <AdminPrivateRoute exact path={`${match.path}/`}>
                                <AdminHome />
                            </AdminPrivateRoute>
                            <Route exact path={`${match.path}/sign-up`}>
                                <SignUp />
                            </Route>
                            <Route exact path={`${match.path}/login`}>
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(Admin);
