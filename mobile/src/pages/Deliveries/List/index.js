import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import {
    Container,
    HeaderList,
    Title,
    DeliveriesList,
    LoadingListContainer,
    TypeButtons,
    TypeButton,
    TypeButtonText,
} from './styles';
import Delivery from '~/components/Delivery';
import api from '~/services/api';

export default function List({ isFocused, navigation }) {
    const [deliveries, setDeliveries] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [type, setType] = useState('pending');
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(false);
    const user = useSelector((state) => state.user.profile);

    function toggleType() {
        setType(() => {
            setPages(null);
            return type === 'pending' ? 'completed' : 'pending';
        });
    }

    useEffect(() => {
        if (isFocused) {
            loadDeliveries();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, isFocused]);

    async function loadDeliveries(pageRequest = 1) {
        if (pages !== null && pageRequest > pages) {
            return;
        }
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response = await api.get(
                `/deliveryman/${user.id}/deliveries`,
                {
                    params: {
                        page: pageRequest,
                        type,
                    },
                },
            );
            const deliveries_data = response.data.rows.map((delivery) => {
                let status = 'pending';

                if (delivery.start_date) {
                    status = 'withdrawled';
                }

                if (delivery.end_date) {
                    status = 'delivered';
                }

                if (delivery.canceled_at) {
                    status = 'canceled';
                }

                return { ...delivery, status };
            });

            setDeliveries(
                pageRequest >= 2
                    ? [...deliveries, ...deliveries_data]
                    : deliveries_data,
            );

            setPage(pageRequest);
            setRefreshing(false);
            setPages(Math.ceil(response.data.count / 5));
            setLoading(false);
        } catch (e) {
            Alert.alert(
                'Falha ao listar entregas',
                'Ocorreu um erro ao listar entregas',
            );
        }
    }

    function loadMore() {
        const nextPage = page + 1;

        loadDeliveries(nextPage);
    }

    function refresh() {
        setRefreshing(true);
        loadDeliveries();
    }

    return (
        <Container>
            <HeaderList>
                <Title>Entregas</Title>
                <TypeButtons>
                    <TypeButton onPress={toggleType}>
                        <TypeButtonText active={type === 'pending'}>
                            Pendente
                        </TypeButtonText>
                    </TypeButton>
                    <TypeButton onPress={toggleType}>
                        <TypeButtonText active={type === 'completed'}>
                            Entregue
                        </TypeButtonText>
                    </TypeButton>
                </TypeButtons>
            </HeaderList>
            <DeliveriesList
                onEndReachedThreshold={0.2}
                onEndReached={loadMore}
                onRefresh={refresh}
                refreshing={refreshing}
                data={deliveries}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Delivery
                        onPress={() =>
                            navigation.navigate('DeliveryDetails', {
                                deliveryId: item.id,
                            })
                        }
                        delivery={item}
                    />
                )}
                ListFooterComponent={() => (
                    <>
                        {loading && (
                            <LoadingListContainer>
                                <ActivityIndicator size={30} />
                            </LoadingListContainer>
                        )}
                    </>
                )}
            />
        </Container>
    );
}
