import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Container,
    Header,
    Bottom,
    Title,
    Details,
    Column,
    Label,
    Info,
    DetailsDelivery,
    DetailsButton,
} from './styles';
import Timeline from './Timeline';

export default function Delivery({ onPress, delivery }) {
    const deliveryDescription = useMemo(() => {
        const str = '' + delivery.id;
        const pad = '0';
        const result = pad.substring(0, pad.length - str.length) + str;

        return `Encomenda ${result}`;
    }, [delivery]);

    const formattedDate = useMemo(() => {
        return format(parseISO(delivery.createdAt), 'dd/MM/yyyy', {
            locale: pt,
        });
    }, [delivery.createdAt]);

    return (
        <Container>
            <Header>
                <Details>
                    <Icon name="local-shipping" color="#7D40E7" size={26} />
                    <Title>{deliveryDescription}</Title>
                </Details>
                <Timeline delivery={delivery} />
            </Header>
            <Bottom>
                <Column>
                    <Label>Data</Label>
                    <Info>{formattedDate}</Info>
                </Column>
                <Column>
                    <Label>Cidade</Label>
                    <Info>{delivery.recipients.city}</Info>
                </Column>
                <DetailsButton onPress={onPress}>
                    <DetailsDelivery>Ver detalhes</DetailsDelivery>
                </DetailsButton>
            </Bottom>
        </Container>
    );
}
