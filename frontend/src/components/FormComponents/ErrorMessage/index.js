import React from 'react';

import PropTypes from 'prop-types';

import { Message } from './styles';

export default function ErrorMessage({ error }) {
    return <Message>{error}</Message>;
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
};
