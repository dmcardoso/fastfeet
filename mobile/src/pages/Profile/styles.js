import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    background: white;
    align-items: center;
    padding: 63px 35px 0 35px;
`;

export const UserImage = styled.Image`
    width: 168px;
    height: 168px;
    border-radius: 84px;
`;

export const UserInfo = styled.View`
    align-self: stretch;
    margin-top: 40px;
`;

export const Label = styled.Text`
    color: #666666;
    font-size: 16px;
`;

export const Value = styled.Text`
    color: #444444;
    font-size: 26px;
    margin-bottom: 15px;
    font-weight: bold;
`;
export const LogoutButton = styled(Button)`
    background-color: #e74040;
    margin-top: 15px;
`;
