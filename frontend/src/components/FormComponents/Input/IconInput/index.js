import React from 'react';
import { MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';

import { propTypes, defaultProps } from '../PropsInput';
import { Container } from './styles';
import colors from '~/styles/colors';

export default function IconInput({
    name,
    id,
    placeholder,
    type,
    icon: Icon,
    width,
    ...rest
}) {
    id = id || name;

    return (
        <Container htmlFor={id} styleProps={{ width }}>
            <Icon size={22} color={colors.grey_placeholder} />
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                name={name}
                {...rest}
            />
        </Container>
    );
}

IconInput.propTypes = {
    icon: PropTypes.func,
    ...propTypes,
};

IconInput.defaultProps = {
    icon: MdSearch,
    ...defaultProps,
};
