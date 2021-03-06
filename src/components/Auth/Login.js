import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { login } from '../../store/actions/authAction';

const Login = () => {
    const [user, setUser] = useState({});
    const { authenticate } = useSelector((state) => state.auth);
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const { from } = location.state || { from: { pathname: '/' } };

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUser((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        dispatch(login(user, history, from));
    };

    if (authenticate) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container">
            <div className="col-md-6 mx-auto  mt-5">
                <form onSubmit={submitHandler} className="bg-light p-5 rounded">
                    <h2 className="py-2">Sign IN</h2>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            onChange={inputHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
