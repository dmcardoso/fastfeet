import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ListPage({ title, children }) {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    );
}

ListPage.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
        .isRequired,
};
