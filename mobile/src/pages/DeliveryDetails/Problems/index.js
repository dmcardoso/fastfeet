import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { Container, ProblemsList, Title } from './styles';
import Background from '~/components/BackgroundDeliveryDetails';
import Problem from '~/components/Problem';
import api from '~/services/api';

export default function Problems({ navigation, route }) {
    const { deliveryId } = route.params;
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            try {
                const response = await api.get(
                    `delivery/${deliveryId}/problems`,
                );

                setProblems(response.data);
            } catch (e) {
                Alert.alert(
                    'Erro ao listar problemas da entrega',
                    'Não foi possível listar os problemas com essa entrega',
                );
            }
        }
        loadProblems();
    }, [deliveryId]);

    return (
        <Background>
            <Container>
                <Title>Encomenda 01</Title>
                <ProblemsList
                    data={problems}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Problem problem={item} />}
                />
            </Container>
        </Background>
    );
}
