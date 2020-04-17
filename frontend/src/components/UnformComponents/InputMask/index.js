import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import {
    propTypes,
    defaultProps,
} from '~/components/FormComponents/Input/PropsInput';
import FormInputMask from '~/components/FormComponents/InputMask';

export default function InputMask({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref, value) {
                ref.setInputValue(value);
            },
            clearValue(ref) {
                ref.setInputValue('');
            },
        });
    }, [fieldName, registerField]);

    return (
        <FormInputMask
            name={fieldName}
            defaultValue={defaultValue}
            error={error}
            label={label}
            ref={inputRef}
            {...rest}
        />
    );
}

InputMask.propTypes = {
    ...propTypes,
};

InputMask.defaultProps = {
    ...defaultProps,
    width: '100%',
};
