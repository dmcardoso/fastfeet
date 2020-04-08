import React from 'react';

import { propTypes, defaultProps } from '../PropsButton/icon';
import { StyledButton } from './styles';

export default function IconButton({
    type,
    children,
    color,
    margin,
    icon: Icon,
    ...rest
}) {
    return (
        <StyledButton type={type} styleProps={{ color, margin }} {...rest}>
            <Icon size={22} color="#FFFFFF" />
            {children}
        </StyledButton>
    );
}

IconButton.propTypes = {
    ...propTypes,
};

IconButton.defaultProps = {
    ...defaultProps,
};
