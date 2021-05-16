import { Route, Switch } from 'react-router-dom';
import Admin from './admin/pages/Admin';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/">
                <Layout>
                    <Home />
                </Layout>
            </PrivateRoute>
            {/* ********* Admin App ********* */}
            <Route path="/:categorySlug">
                <Layout>
                    <Products />
                </Layout>
            </Route>
            {/* *********** Authentication ********** */}
            <Route path="/sign-up">
                <Layout>
                    <SignUp />
                </Layout>
            </Route>
            <Route path="/login">
                <Layout>
                    <Login />
                </Layout>
            </Route>
            {/* ********* Admin App ********* */}
            <Route path="/admin/dashboard">
                <Admin />
            </Route>
        </Switch>
    );
};

export default Routes;
