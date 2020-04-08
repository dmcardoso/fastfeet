import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { useIsFocused } from '@react-navigation/native';

import List from './List';
import {
    Container,
    Header,
    WelcomeBack,
    DeliverymanName,
    Welcome,
    UserInfo,
    UserImage,
} from './styles';
import Avatar from '~/components/Avatar';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

export default function Deliveries({ navigation }) {
    const user = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [deliveries, setDeliveries] = useState([]);

    function handleLogout() {
        dispatch(signOut());
    }

    useEffect(() => {
        async function loadDeliveries() {
            try {
                const response = await api.get('/delivery');
                const deliveries_data = response.data.map((delivery) => {
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

                setDeliveries(deliveries_data);
            } catch (e) {
                Alert.alert(
                    'Falha ao listar entregas',
                    'Ocorreu um erro ao listar entregas',
                );
            }
        }
        if (isFocused) {
            loadDeliveries();
        }
    }, [isFocused]);

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Header>
                <UserInfo>
                    {user.avatar && user.avatar.url ? (
                        <UserImage source={{ uri: user.avatar.url }} />
                    ) : (
                        <Avatar size={68} fontSize="31px" name={user.name} />
                    )}
                    <Welcome>
                        <WelcomeBack>Bem vindo de volta,</WelcomeBack>
                        <DeliverymanName>{user.name}</DeliverymanName>
                    </Welcome>
                </UserInfo>
                <TouchableOpacity onPress={handleLogout}>
                    <Icon name="exit-to-app" color="#E74040" size={26} />
                </TouchableOpacity>
            </Header>
            <List
                data={deliveries}
                onPress={(deliveryId) =>
                    navigation.navigate('DeliveryDetails', { deliveryId })
                }
            />
        </Container>
    );
}
