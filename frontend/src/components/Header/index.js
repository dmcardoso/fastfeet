import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content, StyledHeader } from './styles';

export default function Header({ children }) {
    return (
        <Container>
            <StyledHeader>
                <header>
                    <nav />
                    <div>
                        <strong>Admin FastFeet</strong>
                        <button type="button">Sair do sistema</button>
                    </div>
                </header>
            </StyledHeader>
            <Content>
                <main>{children}</main>
            </Content>
        </Container>
    );
}

Header.propTypes = {
    children: PropTypes.element.isRequired,
};
