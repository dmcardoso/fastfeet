import PropTypes from 'prop-types';

export const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    initialData: PropTypes.objectOf([PropTypes.any]),
};

export const defaultProps = { initialData: {} };
