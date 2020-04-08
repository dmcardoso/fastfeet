import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
    Container,
    ButtonSubmit,
    Image,
    ImageContainer,
    IconButton,
} from './styles';
import Background from '~/components/BackgroundDeliveryDetails';
import Camera from '~/components/Camera';
import api from '~/services/api';

export default function Confirm({ route, navigation }) {
    const [image, setImage] = useState(null);
    const [openCamera, setOpenCamera] = useState(true);
    const user = useSelector((state) => state.user.profile);
    const { deliveryId } = route.params;

    async function handleSendImage() {
        try {
            if (image) {
                const data = new FormData();
                data.append('file', {
                    type: 'image/jpg',
                    uri: image,
                    name: 'signature.jpg',
                });

                const response = await api.post('/files', data);

                if (response.data && response.data.id) {
                    const { id } = response.data;

                    const response_delivery = await api.put(
                        `/withdraw/${deliveryId}/${user.id}`,
                        {
                            signature_id: id,
                        },
                    );

                    console.tron.log(response_delivery);

                    if (
                        response_delivery.data.end_date &&
                        response_delivery.signature_id
                    ) {
                        Alert.alert(
                            'Entrega finalizada',
                            'Entrega finalizada com sucesso!',
                        );
                        navigation.navigate('Deliveries');
                    }
                }
            }
        } catch (e) {
            console.tron.log(e);
            Alert.alert('Erro ao enviar imagem!');
        }
    }

    return (
        <Background>
            <Container>
                {openCamera ? (
                    <Camera
                        setImage={(uri) => setImage(uri)}
                        closeCamera={() => setOpenCamera(false)}
                    />
                ) : (
                    <ImageContainer>
                        <IconButton
                            onPress={() => {
                                setImage(null);
                                setOpenCamera(true);
                            }}>
                            <Icon name="close" size={30} color="#fff" />
                        </IconButton>
                        <Image source={{ uri: image }} />
                        <ButtonSubmit onPress={handleSendImage}>
                            Enviar
                        </ButtonSubmit>
                    </ImageContainer>
                )}
            </Container>
        </Background>
    );
}
