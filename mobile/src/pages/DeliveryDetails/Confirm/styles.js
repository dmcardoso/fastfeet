import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    border-radius: 4px;
    padding: 20px;
`;

export const CameraContainer = styled.View`
    border-radius: 4px;
    width: 100%;
    height: 355px;
`;

export const ButtonSubmit = styled(Button)`
    background-color: #7d40e7;
    margin-top: 10px;
`;

export const ImageContainer = styled.View`
    position: relative;
    flex: 1;
`;

export const IconButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    right: 10px;
    top: 10px;
`;

export const IconClose = styled(Icon).attrs({
    name: 'close',
    size: 30,
    color: '#fff',
})``;

export const Image = styled.Image`
    flex: 1;
    border-radius: 4px;
`;
