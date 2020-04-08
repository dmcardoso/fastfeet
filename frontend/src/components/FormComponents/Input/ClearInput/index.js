/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import ErrorMessage from '../../ErrorMessage';
import { Container } from './styles';

function ClearInput(
    { name, id, label, placeholder, type, width, error, ...rest },
    ref
) {
    id = id || name;

    return (
        <Container styleProps={{ width, error }}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                ref={ref}
                {...rest}
            />
            {!!error && <ErrorMessage error={error} />}
        </Container>
    );
}

export default forwardRef(ClearInput);
