import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContainerInput({ children, ...rest }) {
    return <Container styleProps={{ ...rest }}>{children}</Container>;
}

ContainerInput.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    flex: PropTypes.string,
    margin: PropTypes.string,
    grid: PropTypes.bool,
    gridItem: PropTypes.bool,
    col: PropTypes.number,
    gap: PropTypes.number,
};

ContainerInput.defaultProps = {
    flex: null,
    margin: null,
    gridItem: false,
    grid: false,
    col: 1,
    gap: 30,
};
