import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function Auth({ children }) {
    return (
        <Wrapper>
            <Content>{children}</Content>
        </Wrapper>
    );
}

Auth.propTypes = {
    children: PropTypes.element.isRequired,
};
