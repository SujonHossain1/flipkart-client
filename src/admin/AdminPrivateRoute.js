/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const token = localStorage.getItem('admin-auth-token');

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
