import PropTypes from 'prop-types';

import {
    propTypes as clearPropTypes,
    defaultProps as clearDefaultProps,
} from './clear';

export const propTypes = {
    ...clearPropTypes,
    icon: PropTypes.func.isRequired,
};

export const defaultProps = {
    ...clearDefaultProps,
};
