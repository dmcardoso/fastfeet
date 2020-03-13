import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import { Container, NavHeader } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
    return (
        <Container>
            <header>
                <NavHeader>
                    <Link to="/">
                        <img src={logo} alt="FastFeet" />
                    </Link>
                    <Menu />
                </NavHeader>
                <div>
                    <strong>Admin FastFeet</strong>
                    <button type="button">Sair do sistema</button>
                </div>
            </header>
        </Container>
    );
}
