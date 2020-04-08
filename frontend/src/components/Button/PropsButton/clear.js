import PropTypes from 'prop-types';

import colors from '~/styles/colors';

export const propTypes = {
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    margin: PropTypes.string,
};

export const defaultProps = {
    type: 'button',
    color: colors.purple_primary,
    margin: null,
};
