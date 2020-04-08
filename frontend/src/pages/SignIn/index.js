import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form as UnformForm } from '@unform/web';

import { Container } from './styles';
import logo from '~/assets/fastfeet-logo.png';
import Button from '~/components/Button';
import Input from '~/components/UnformComponents/Input';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <Container>
            <img src={logo} alt="FastFeet" onSubmit={handleSubmit} />
            <UnformForm onSubmit={handleSubmit}>
                <Input
                    name="email"
                    label="SEU E-MAIL"
                    placeholder="exemplo@email.com"
                />
                <Input
                    name="password"
                    label="Sua Senha"
                    type="password"
                    placeholder="*************"
                />
                <Button type="submit">
                    {loading ? 'Carregando' : 'Entrar no sistema'}
                </Button>
            </UnformForm>
        </Container>
    );
}
