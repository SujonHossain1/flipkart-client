import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/">
                <Home />
            </PrivateRoute>
            <Route path="/sign-up">
                <SignUp />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    );
};

export default Routes;
