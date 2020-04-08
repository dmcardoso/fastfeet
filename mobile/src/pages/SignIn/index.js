import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { Container, Form, FormInput } from './styles';
import logo from '~/assets/logo.png';
import Button from '~/components/Button';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
    const dispatch = useDispatch();
    const [deliverymanId, setDeliverymanId] = useState(null);

    function handleSubmit() {
        dispatch(signInRequest(deliverymanId));
    }

    return (
        <Container>
            <Image source={logo} />
            <Form>
                <FormInput
                    keyboardType="numeric"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={deliverymanId}
                    returnKeyType="send"
                    onChangeText={setDeliverymanId}
                    placeholder="Informe seu ID de cadastro"
                    onSubmitEditing={handleSubmit}
                />
                <Button onPress={handleSubmit}>Entrar no Sistema</Button>
            </Form>
        </Container>
    );
}
