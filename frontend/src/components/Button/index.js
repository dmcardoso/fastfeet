import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './styles';
import colors from '~/styles/colors';

export default function Button({ type, children, color, ...rest }) {
    return (
        <StyledButton type={type} styleProps={{ color }} {...rest}>
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
};

Button.defaultProps = {
    type: 'button',
    color: colors.purple_primary,
};
