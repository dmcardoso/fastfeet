import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: ${(props) =>
        props.styleProps && props.styleProps.width
            ? props.styleProps.width
            : 'auto'};
    ${(props) =>
        props.styleProps &&
        props.styleProps.justifyContent &&
        css`
            justify-content: ${props.styleProps.justifyContent};
        `};
    ${(props) =>
        props.styleProps &&
        props.styleProps.margin &&
        css`
            margin: ${props.styleProps.margin};
        `};
`;
