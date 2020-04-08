import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    margin-top: 22.5px;
`;

export const HeaderList = styled.View`
    width: 100%;
`;

export const Title = styled.Text`
    width: 100%;
    color: #444444;
    font-weight: bold;
    font-size: 22px;
`;

export const DeliveriesList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 1 },
})`
    flex: 1;
    margin-top: 22.5px;
`;
