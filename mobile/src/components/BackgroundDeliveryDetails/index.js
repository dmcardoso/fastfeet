import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content, Header } from './styles';

export default function BackgroundDeliveryDetails({ children }) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
            <Container>
                <Header />
                <Content>{children}</Content>
            </Container>
        </>
    );
}
