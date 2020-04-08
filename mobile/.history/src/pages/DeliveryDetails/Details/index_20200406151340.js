import React, { useState, useEffect, useMemo } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Container,
    Box,
    Header,
    Title,
    Field,
    Label,
    Value,
    BottomBox,
    BottomBoxItem,
    BottomBoxItemText,
    WithDrawButton,
} from './styles';
import Background from '~/components/BackgroundDeliveryDetails';
import Loading from '~/components/Loading';
import api from '~/services/api';

export default function Details({ navigation, route }) {
    const { deliveryId } = route.params;
    const user = useSelector((state) => state.user.profile);
    const [delivery, setDelivery] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDelivery() {
            try {
                const response = await api.get(`delivery/${deliveryId}`);

                const delivery_data = response.data;
                let status_description = 'Pendente';

                if (delivery_data.start_date) {
                    status_description = 'Retirada';
                }

                if (delivery_data.end_date) {
                    status_description = 'Entregue';
                }

                if (delivery_data.canceled_at) {
                    status_description = 'Cancelada';
                }

                setDelivery({
                    ...delivery_data,
                    status_description,
                });
                setLoading(false);
            } catch (e) {
                Alert.alert('Entrega não encontrada!');
                navigation.navigate('Deliveries');
            }
        }

        getDelivery();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deliveryId]);

    async function handleWithDraw() {
        setLoading(true);
        try {
            const response = await api.post(
                `withdraw/${deliveryId}/${user.id}`,
            );

            const delivery_data = response.data;
            const { start_date } = delivery_data;

            if (start_date) {
                setDelivery({ ...delivery, start_date });
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            Alert.alert(
                'Erro ao retirar encomenda',
                'Não foi possível retirar encomenda',
            );
        }
    }

    const address = useMemo(() => {
        if (delivery && delivery.recipients) {
            const { recipients } = delivery;
            return `${recipients.street}, ${recipients.number}, ${recipients.complement}, ${recipients.city} - ${recipients.state}, ${recipients.cep}`;
        }
        return '';
    }, [delivery]);

    const startDate = useMemo(() => {
        if (delivery && delivery.start_date) {
            return format(parseISO(delivery.start_date), 'dd / MM / yyyy', {
                locale: pt,
            });
        } else {
            return '-- / -- / --';
        }
    }, [delivery]);

    const endDate = useMemo(() => {
        if (delivery && delivery.end_date) {
            return format(parseISO(delivery.end_date), 'dd / MM / yyyy', {
                locale: pt,
            });
        } else {
            return '-- / -- / --';
        }
    }, [delivery]);

    return (
        <Background>
            <Container>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <Box>
                            <Header>
                                <Icon
                                    name="local-shipping"
                                    color="#7D40E7"
                                    size={24}
                                />

                                <Title>Infomações da entrega</Title>
                            </Header>
                            <Field marginBottom="15px">
                                <Label>Destinatário</Label>
                                <Value>{delivery.recipients.name}</Value>
                            </Field>
                            <Field marginBottom="15px">
                                <Label>Endereço de entrega</Label>
                                <Value>{address}</Value>
                            </Field>
                            <Field>
                                <Label>Produto</Label>
                                <Value>{delivery.product}</Value>
                            </Field>
                        </Box>
                        <Box>
                            <Header>
                                <Icon name="event" color="#7D40E7" size={24} />
                                <Title>Situação da entrega</Title>
                            </Header>
                            <Field marginBottom="15px">
                                <Label>Status</Label>
                                <Value>{delivery.status_description}</Value>
                            </Field>
                            <Field row>
                                <Field>
                                    <Label>Data de retirada</Label>
                                    <Value>{startDate}</Value>
                                </Field>
                                <Field>
                                    <Label>Data de entrega</Label>
                                    <Value>{endDate}</Value>
                                </Field>
                            </Field>
                        </Box>
                        {delivery.start_date ? (
                            <BottomBox>
                                {!delivery.end_date && (
                                    <BottomBoxItem
                                        onPress={() =>
                                            navigation.navigate(
                                                'DeliveryNewProblem',
                                                {
                                                    deliveryId,
                                                },
                                            )
                                        }>
                                        <Icon
                                            name="highlight-off"
                                            color="#E74040"
                                            size={24}
                                        />
                                        <BottomBoxItemText>
                                            Informar Problema
                                        </BottomBoxItemText>
                                    </BottomBoxItem>
                                )}

                                <BottomBoxItem
                                    onPress={() =>
                                        navigation.navigate(
                                            'DeliveryProblems',
                                            {
                                                deliveryId,
                                            },
                                        )
                                    }>
                                    <Icon
                                        name="info-outline"
                                        color="#E7BA40"
                                        size={24}
                                    />
                                    <BottomBoxItemText>
                                        Visualizar Problemas
                                    </BottomBoxItemText>
                                </BottomBoxItem>
                                {!delivery.end_date && (
                                    <BottomBoxItem
                                        onPress={() =>
                                            navigation.navigate(
                                                'DeliveryConfirm',
                                                {
                                                    deliveryId,
                                                },
                                            )
                                        }
                                        noMargin>
                                        <Icon
                                            name="alarm-on"
                                            color="#7D40E7"
                                            size={24}
                                        />
                                        <BottomBoxItemText>
                                            Confirmar Entrega
                                        </BottomBoxItemText>
                                    </BottomBoxItem>
                                )}
                            </BottomBox>
                        ) : (
                            <WithDrawButton onPress={handleWithDraw}>
                                Retirar
                            </WithDrawButton>
                        )}
                    </>
                )}
            </Container>
        </Background>
    );
}
