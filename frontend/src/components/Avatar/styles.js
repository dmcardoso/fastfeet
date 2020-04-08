import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 50%;
    background-color: ${(props) => lighten(0.35, props.color)};
    color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.fontSize};

    ${(props) =>
        props.margin &&
        css`
            margin: ${props.margin};
        `}
`;
