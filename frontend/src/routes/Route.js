import React from 'react';
import { Route as ReactRouterRoute, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import AuthLayout from '~/layouts/Auth';
import DefaultLayout from '~/layouts/Default';

// import { store } from '~/store';
// import { Container } from './styles';

export default function Route({ component: Component, isPrivate, ...rest }) {
    // const { signed } = store.getState().auth;
    const signed = true;
    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <ReactRouterRoute
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

Route.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
        .isRequired,
};

Route.defaultProps = {
    isPrivate: false,
};
