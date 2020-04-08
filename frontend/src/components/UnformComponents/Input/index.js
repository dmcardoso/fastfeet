import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import FormInput from '~/components/FormComponents/Input';
import {
    propTypes,
    defaultProps,
} from '~/components/FormComponents/Input/PropsInput';

export default function Input({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <FormInput
            name={fieldName}
            defaultValue={defaultValue}
            error={error}
            label={label}
            ref={inputRef}
            {...rest}
        />
    );
}

Input.propTypes = {
    ...propTypes,
};

Input.defaultProps = {
    ...defaultProps,
    width: '100%',
};
