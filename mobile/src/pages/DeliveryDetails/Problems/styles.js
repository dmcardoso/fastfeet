import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const ProblemsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 1 },
})`
    flex: 1;
    margin-top: 12.5px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
