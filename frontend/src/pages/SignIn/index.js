import React from 'react';

import { Container } from './styles';
import logo from '~/assets/fastfeet-logo.png';
import Button from '~/components/Button';
import Input from '~/components/FormComponents/Input';

export default function SignIn() {
    return (
        <Container>
            <img src={logo} alt="FastFeet" />
            <form action="">
                <Input
                    name="email"
                    label="SEU E-MAIL"
                    placeholder="exemplo@email.com"
                />
                <Input
                    name="email"
                    label="Sua Senha"
                    type="password"
                    placeholder="*************"
                />
                <Button>Entrar no sistema</Button>
            </form>
        </Container>
    );
}
