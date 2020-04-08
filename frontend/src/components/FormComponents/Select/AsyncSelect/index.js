/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import ReactAsyncSelect from 'react-select/async';

import { lighten } from 'polished';

import ErrorMessage from '../../ErrorMessage';
import { Container } from '../styles';
import colors from '~/styles/colors';

function AsyncSelect({ id, name, label, error, ...rest }, ref) {
    id = id || name;

    const addTheme = (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary: colors.purple_primary,
            primary25: lighten(0.3, colors.purple_primary),
            primary50: lighten(0.5, colors.purple_primary),
            primary75: lighten(0.25, colors.purple_primary),
        },
    });

    const addCustomStyles = {
        input: (provided) => ({
            ...provided,
            padding: '0',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: '11px 15px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: colors.grey_placeholder,
            margin: '0',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: colors.grey_input,
            margin: '0',
        }),
        control: (provided) => ({
            ...provided,
            borderColor: colors.grey_border,
        }),
    };

    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <ReactAsyncSelect
                cacheOptions
                defaultOptions
                ref={ref}
                theme={addTheme}
                styles={addCustomStyles}
                classNamePrefix="react-select"
                {...rest}
            />
            {error && <ErrorMessage error={error} />}
        </Container>
    );
}

export default forwardRef(AsyncSelect);
