// import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { adminSignUp } from '../../../store/actions/AdminAuthAction';

const SignUp = () => {
    const [user, setUser] = useState({
        role: 'admin',
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const { authenticate } = useSelector((state) => state.adminAuth);
    const { error, message } = useSelector((state) => state.admin);

    const { from } = location.state || { from: { pathname: '/admin/dashboard' } };

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUser((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        dispatch(adminSignUp(user, history, from));
    };

    if (authenticate) {
        return <Redirect to="/admin/dashboard" />;
    }

    return (
        <div className="container">
            <div className="col-md-6 mx-auto  mt-5">
                <form onSubmit={submitHandler} className="bg-light p-5 rounded">
                    <h2 className="py-2">Sign Up</h2>
                    {error && <p style={{ color: 'red' }}>{error} </p>}
                    {message && <p style={{ color: 'green' }}>{message} </p>}
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            onChange={inputHandler}
                        />
                    </div>
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
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
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
                    <div className="mb-3">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
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

export default SignUp;
