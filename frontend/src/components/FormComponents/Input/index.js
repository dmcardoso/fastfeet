import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ name, id, label, placeholder, type }) {
    id = id || name;

    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} />
        </Container>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string,
    type: PropTypes.string,
};

Input.defaultProps = {
    id: null,
    type: 'text',
};
