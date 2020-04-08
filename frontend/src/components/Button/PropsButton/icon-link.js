import PropTypes from 'prop-types';

import {
    propTypes as iconPropTypes,
    defaultProps as iconDefaultProps,
} from './icon';

export const propTypes = {
    ...iconPropTypes,
    to: PropTypes.string.isRequired,
};

export const defaultProps = {
    ...iconDefaultProps,
};
