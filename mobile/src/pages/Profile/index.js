import React, { useMemo } from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Container,
    UserImage,
    UserInfo,
    Label,
    Value,
    LogoutButton,
} from './styles';
import Avatar from '~/components/Avatar';
import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
    const user = useSelector((state) => state.user.profile);
    const dispatch = useDispatch();

    const formattedDate = useMemo(() => {
        return format(parseISO(user.createdAt), 'dd/MM/yyyy', { locale: pt });
    }, [user.createdAt]);

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container>
                {user.avatar && user.avatar.url ? (
                    <UserImage source={{ uri: user.avatar.url }} />
                ) : (
                    <Avatar size={168} fontSize="86px" name={user.name} />
                )}
                <UserInfo>
                    <Label>Nome Completo</Label>
                    <Value>{user.name}</Value>
                    <Label>Email</Label>
                    <Value>{user.email}</Value>
                    <Label>Data de cadastro</Label>
                    <Value>{formattedDate}</Value>
                    <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
                </UserInfo>
            </Container>
        </>
    );
}
