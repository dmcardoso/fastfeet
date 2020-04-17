import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
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
import { signOut } from '~/store/modules/auth/actions';

export default function Deliveries({ navigation }) {
    const user = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    function handleLogout() {
        dispatch(signOut());
    }

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
            <List isFocused={isFocused} navigation={navigation} />
        </Container>
    );
}
