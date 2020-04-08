import React from 'react';

import { propTypes, defaultProps } from '../PropsButton/clear';
import { StyledButton } from './styles';

export default function ClearButton({
    type,
    children,
    color,
    margin,
    ...rest
}) {
    return (
        <StyledButton type={type} styleProps={{ color, margin }} {...rest}>
            {children}
        </StyledButton>
    );
}

ClearButton.propTypes = {
    ...propTypes,
};

ClearButton.defaultProps = {
    ...defaultProps,
};
