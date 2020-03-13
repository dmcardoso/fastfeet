import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import Header from '~/components/Header';

export default function Default({ children }) {
    return (
        <Container>
            <Header />

            <Content>
                <main>{children}</main>
            </Content>
        </Container>
    );
}

Default.propTypes = {
    children: PropTypes.element.isRequired,
};
