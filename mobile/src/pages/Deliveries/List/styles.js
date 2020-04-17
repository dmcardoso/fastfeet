import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    margin-top: 22.5px;
    flex: 1;
`;

export const HeaderList = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
`;

export const Title = styled.Text`
    color: #444444;
    font-weight: bold;
    font-size: 22px;
`;

export const DeliveriesList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 2 },
})`
    margin-top: 10.5px;
`;

export const LoadingListContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const TypeButtons = styled.View`
    flex-direction: row;
`;

export const TypeButton = styled.TouchableOpacity`
    padding-left: 15px;
`;

export const TypeButtonText = styled.Text`
    color: #999999;
    font-size: 12px;
    font-weight: bold;

    ${(props) =>
        props.active &&
        css`
            color: #7d40e7;
            text-decoration: underline;
        `}
`;
