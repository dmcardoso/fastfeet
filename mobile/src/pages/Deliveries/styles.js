import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    flex: 1;
    padding: 20px 20px 0 20px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    height: 68px;
    align-self: stretch;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex: 1;
    flex-direction: row;
`;

export const WelcomeBack = styled.Text`
    font-size: 12px;
    color: #666666;
`;

export const DeliverymanName = styled.Text.attrs({
    numberOfLines: 1,
    ellipsizeMode: 'tail',
})`
    font-size: 22px;
    color: #444444;
    max-width: 100%;
    overflow: hidden;
    font-weight: bold;
`;

export const Welcome = styled.View`
    justify-content: center;
    height: 100%;
    margin-left: 12px;
`;

export const UserImage = styled.Image`
    width: 68px;
    height: 68px;
    border-radius: 34px;
`;
