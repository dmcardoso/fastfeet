import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import { Container, NavHeader } from './styles';
import logo from '~/assets/fastfeet-logo.png';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
    const dispatch = useDispatch();

    function logout() {
        dispatch(signOut());
    }

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
                    <button type="button" onClick={logout}>
                        Sair do sistema
                    </button>
                </div>
            </header>
        </Container>
    );
}
