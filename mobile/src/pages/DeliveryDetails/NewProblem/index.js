import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, TextArea, SubmitButton } from './styles';
import Background from '~/components/BackgroundDeliveryDetails';
import api from '~/services/api';

export default function NewProblem({ route, navigation }) {
    const { deliveryId } = route.params;
    const [problem, setProblem] = useState('');

    async function handleSubmit() {
        try {
            const response = await api.post(`delivery/${deliveryId}/problems`, {
                description: problem,
            });

            if (response && response.data && response.data.id) {
                Alert.alert('Problema cadastrado com sucesso!');
                if (navigation.canGoBack()) {
                    navigation.goBack();
                }
            }
        } catch (e) {
            Alert.alert(
                'Erro ao cadastrar problema',
                'Não foi possível cadastrar problema!',
            );
        }
    }

    return (
        <Background>
            <Container>
                <TextArea
                    value={problem}
                    onChangeText={setProblem}
                    placeholder="Inclua o problema que ocorreu na entrega."
                />
                <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
            </Container>
        </Background>
    );
}
