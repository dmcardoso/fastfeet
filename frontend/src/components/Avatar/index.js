import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';
import nameToColor from './utils/colors';
import initials from './utils/initials';

export default function Avatar({ name, charSize, ...rest }) {
    const color = nameToColor(name);
    const letters = initials(name, charSize);

    return (
        <Container color={color} {...rest}>
            {letters}
        </Container>
    );
}

Avatar.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    margin: PropTypes.string,
    fontSize: PropTypes.string,
    name: PropTypes.string.isRequired,
    charSize: PropTypes.number,
};

Avatar.defaultProps = {
    width: '35px',
    height: '35px',
    fontSize: '16px',
    charSize: 2,
    margin: null,
};
