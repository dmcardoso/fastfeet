import PropTypes from 'prop-types';

export const propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
};

export const defaultProps = {
    id: null,
    type: 'text',
    width: '270px',
};
