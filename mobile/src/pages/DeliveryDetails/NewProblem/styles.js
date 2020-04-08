import styled from 'styled-components/native';

import Button from '~/components/Button';
import TTextarea from '~/components/Textarea';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const TextArea = styled(TTextarea).attrs({
    numberOfLines: 10,
    elevation: 2,
})`
    width: 100%;
    height: 300px;
`;

export const SubmitButton = styled(Button)`
    background-color: #7d40e7;
    margin-top: 20px;
`;
