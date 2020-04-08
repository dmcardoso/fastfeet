import { lighten } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: ${(props) => props.size / 2}px;
    background-color: ${(props) => lighten(0.25, props.color)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Letters = styled.Text`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
`;
