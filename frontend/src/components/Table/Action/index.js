import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Action({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Action.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.func,
    ]).isRequired,
};
