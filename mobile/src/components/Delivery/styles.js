import styled from 'styled-components/native';

export const Container = styled.View.attrs({ elevation: 2 })`
    flex: 1;
    height: 179px;
    margin-bottom: 30px;
    border-radius: 4px;
    background: white;
`;

export const Header = styled.View`
    padding: 13px 14.5px 0 14.5px;
    height: 115px;
`;

export const Details = styled.View`
    height: 19px;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: #7d40e7;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`;

export const Bottom = styled.View`
    height: 64px;
    background-color: #f8f9fd;
    padding: 18px 21.5px;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`;

export const Column = styled.View`
    justify-content: center;
`;

export const Label = styled.Text`
    color: #999999;
    font-size: 12px;
    font-weight: bold;
`;

export const Info = styled.Text`
    color: #444444;
    font-size: 16px;
    font-weight: bold;
`;

export const DetailsDelivery = styled.Text`
    color: #7d40e7;
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
`;

export const DetailsButton = styled.TouchableOpacity`
    align-self: flex-end;
`;
