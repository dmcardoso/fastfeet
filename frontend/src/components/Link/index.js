import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

// import { Container } from './styles';
import PropTypes from 'prop-types';

export default function Link({ to, children, className }) {
    return (
        <ReactRouterLink to={to} className={className}>
            {children}
        </ReactRouterLink>
    );
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
};

Link.defaultProps = {
    className: null,
};
