import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
})`
    flex: 1;
    background: #7d40e7;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 37.5px;
    padding: 0 25px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15.5px;
`;
