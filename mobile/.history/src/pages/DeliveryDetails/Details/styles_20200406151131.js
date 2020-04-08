import styled, { css } from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
    flex: 1;
    padding: 0 20px;
`;

export const Box = styled.View.attrs({ elevation: 2 })`
    margin-bottom: 10px;
    border-radius: 4px;
    background: white;
    padding: 10px 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    color: #7d40e7;
    margin-left: 5px;
    font-weight: bold;
    font-size: 16px;
`;

export const Field = styled.View`
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : '0'};
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: ${(props) => (props.row ? 'space-between' : 'flex-start')};
`;

export const Label = styled.Text`
    color: #999999;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Value = styled.Text`
    color: #666666;
    font-size: 16px;
`;

export const BottomBox = styled.View.attrs({ elevation: 3 })`
    border-radius: 4px;
    background: #f8f9fd;
    flex-direction: row;
`;

export const BottomBoxItem = styled.TouchableOpacity`
    padding: 15px 22px;
    align-items: center;
    flex: 1;

    ${(props) =>
        !props.noMargin &&
        css`
            border-left-width: 1px;
            border-style: solid;
            border-right-color: #0000001a;
        `}
`;

export const BottomBoxItemText = styled.Text.attrs({ numberOfLines: 2 })`
    font-size: 12px;
    color: #999999;
    text-align: center;
`;

export const WithDrawButton = styled(Button)`
    background: #7d40e7;
`;
