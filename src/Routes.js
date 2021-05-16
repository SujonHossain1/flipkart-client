import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './admin/pages/Admin';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Header from './components/Shared/Header/Header';
import MenuHeader from './components/Shared/MenuHeader/MenuHeader';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('./components/Home/Home'));

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/">
                <Header />
                <MenuHeader />
                <Suspense fallback={<div> Loading...</div>}>
                    <Home />
                </Suspense>
            </PrivateRoute>
            <Route path="/sign-up">
                <Header />
                <SignUp />
            </Route>
            <Route path="/login">
                <Header />
                <Login />
            </Route>
            <Route path="/admin/dashboard">
                <Admin />
            </Route>
        </Switch>
    );
};

export default Routes;
