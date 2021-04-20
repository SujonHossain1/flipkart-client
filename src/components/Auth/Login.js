import axios from 'axios';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation();

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
        const { data } = await axios.post('/api/users/login', user);
        localStorage.setItem('user-auth-token', `Bearer ${data.token}`);
        history.push(from);
    };

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
