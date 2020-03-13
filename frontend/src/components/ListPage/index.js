import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ListPage({ title }) {
    return (
        <Container>
            <h2>{title}</h2>
        </Container>
    );
}

ListPage.propTypes = {
    title: PropTypes.string.isRequired,
};
