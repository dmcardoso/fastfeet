import React, { useState } from 'react';

import { useIsFocused } from '@react-navigation/native';

import {
    Container,
    Camera as RNCamera,
    IconButton,
    Icon,
    Header,
    Footer,
    IconButtonTop,
} from './styles';

export default function Camera({ closeCamera, setImage }) {
    const [flashMode, setFlashMode] = useState(false);
    const [type, setType] = useState(false);

    async function takePicture(camera) {
        const options = {
            quality: 0.5,
            base64: true,
            forceUpOrientation: true,
            fixOrientation: true,
        };
        const data = await camera.takePictureAsync(options);
        setImage(data.uri);
        closeCamera();
    }

    return (
        <RNCamera
            type={
                type
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back
            }
            flashMode={
                flashMode
                    ? RNCamera.Constants.FlashMode.on
                    : RNCamera.Constants.FlashMode.false
            }
            androidCameraPermissionOptions={{
                title: 'Permissão para usar a câmera',
                message: 'Nós precisamos de permissão para utilizar usa câmera',
                buttonPositive: 'Permitir',
                buttonNegative: 'Negar',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permissão para usar o microfone',
                message:
                    'Nós precisamos de permissão para utilizar seu microfone',
                buttonPositive: 'Permitir',
                buttonNegative: 'Negar',
            }}>
            {({ camera, status }) => (
                <Container>
                    <Header>
                        {!type && (
                            <IconButtonTop
                                onPress={() => setFlashMode((value) => !value)}>
                                <Icon
                                    name={flashMode ? 'flash-on' : 'flash-off'}
                                    size={30}
                                    color="#fff"
                                />
                            </IconButtonTop>
                        )}
                        <IconButtonTop
                            onPress={() => setType((value) => !value)}>
                            <Icon name="cached" size={30} color="#fff" />
                        </IconButtonTop>
                    </Header>
                    <Footer>
                        <IconButton
                            onPress={() => takePicture(camera)}
                            disabled={status !== 'READY'}>
                            <Icon name="photo-camera" size={50} color="#fff" />
                        </IconButton>
                    </Footer>
                </Container>
            )}
        </RNCamera>
    );
}
