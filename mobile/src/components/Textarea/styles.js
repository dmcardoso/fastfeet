import styled from 'styled-components/native';

export const Container = styled.View.attrs((props) => ({
    elevation: props.elevation,
}))`
    padding: 20px;
    border-radius: 4px;
    background-color: white;
`;

export const TInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: '#999999',
    multiline: true,
    textAlignVertical: 'top',
}))`
    font-size: 16px;
    color: #444444;
`;
