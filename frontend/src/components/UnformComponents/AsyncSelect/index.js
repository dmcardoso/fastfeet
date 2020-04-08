import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { AsyncSelect as FormAsyncSelect } from '~/components/FormComponents/Select';

export default function AsyncSelect({ name, ...rest }) {
    const selectRef = useRef(null);

    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'select.state.value',
            getValue: (ref) => {
                if (rest.isMulti) {
                    if (!ref.select.state.value) {
                        return [];
                    }
                    return ref.select.state.value.map((option) => option.value);
                }
                if (!ref.select.state.value) {
                    return '';
                }
                return ref.select.state.value.value;
            },
            setValue: (ref, value) => {
                if (value) {
                    const selected = ref.select.props.options.find((option) => {
                        return Number(option.value) === Number(value);
                    });

                    if (selected) {
                        ref.select.select.setValue(selected);
                    }
                }
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    return (
        <FormAsyncSelect
            defaultValue={defaultValue}
            ref={selectRef}
            error={error}
            {...rest}
        />
    );
}

AsyncSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    loadOptions: PropTypes.func.isRequired,
};
