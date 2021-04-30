/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const { authenticate } = useSelector((state) => state.adminAuth);
    const hasToken = localStorage.getItem('admin-auth-token');
    const [token, setToken] = useState(hasToken);

    useEffect(() => {
        setToken(hasToken);
    }, [authenticate, hasToken]);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin/dashboard/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminPrivateRoute;
