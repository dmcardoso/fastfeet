import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const statusText = {
    canceled: 'CANCELADA',
    pending: 'PENDENTE',
    delivered: 'ENTREGUE',
    withdrawled: 'RETIRADA',
};

export default function Status({ type }) {
    return (
        <Container type={type}>
            <strong>{statusText[type]}</strong>
        </Container>
    );
}

Status.propTypes = {
    type: PropTypes.oneOf(['canceled', 'pending', 'delivered', 'withdrawled'])
        .isRequired,
};
