/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import ReactInputMask from 'react-input-mask';

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
            <ReactInputMask
                id={id}
                placeholder={placeholder}
                name={name}
                maskChar={null}
                ref={ref}
                {...rest}
            />
            {!!error && <ErrorMessage error={error} />}
        </Container>
    );
}

export default forwardRef(ClearInput);
