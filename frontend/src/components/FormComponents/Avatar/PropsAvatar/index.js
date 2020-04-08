import PropTypes from 'prop-types';

export const propTypes = {
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    preview: PropTypes.string,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
};
