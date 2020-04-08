import React from 'react';

import { Container, HeaderList, Title, DeliveriesList } from './styles';
import Delivery from '~/components/Delivery';

export default function List({ onPress, data }) {
    return (
        <Container>
            <HeaderList>
                <Title>Entregas</Title>
            </HeaderList>
            <DeliveriesList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <Delivery
                        onPress={() => onPress(item.id)}
                        delivery={item}
                    />
                )}
            />
        </Container>
    );
}
