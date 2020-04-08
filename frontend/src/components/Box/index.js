import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Box({ children, ...rest }) {
    return <Container styleProps={{ ...rest }}>{children}</Container>;
}

Box.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    width: PropTypes.string,
    justifyContent: PropTypes.string,
    margin: PropTypes.string,
};

Box.defaultProps = {
    width: null,
    justifyContent: null,
    margin: null,
};
