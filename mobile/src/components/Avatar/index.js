import React from 'react';

import PropTypes from 'prop-types';

import { Container, Letters } from './styles';
import nameToColor from './utils/colors';
import initials from './utils/initials';

export default function Avatar({ name, charSize, fontSize, ...rest }) {
    const color = nameToColor(name);
    const letters = initials(name, charSize);

    return (
        <Container color={color} {...rest}>
            <Letters color={color} fontSize={fontSize}>
                {letters}
            </Letters>
        </Container>
    );
}

Avatar.propTypes = {
    size: PropTypes.number,
    fontSize: PropTypes.string,
    name: PropTypes.string.isRequired,
    charSize: PropTypes.number,
};

Avatar.defaultProps = {
    size: 35,
    fontSize: '16px',
    charSize: 2,
};
