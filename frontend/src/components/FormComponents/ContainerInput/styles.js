import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;

    ${(props) =>
        props.styleProps &&
        props.styleProps.flex &&
        css`
            flex: ${props.styleProps.flex};
        `}

    ${(props) =>
        props.styleProps &&
        props.styleProps.margin &&
        css`
            margin: ${props.styleProps.margin};
        `}

    ${(props) =>
        props.styleProps &&
        props.styleProps.grid &&
        css`
            display: grid;
            grid-gap: ${props.styleProps.gap}px;
        `}

    ${(props) =>
        props.styleProps &&
        props.styleProps.grid &&
        props.styleProps.col &&
        css`
            grid-template-columns: repeat(${props.styleProps.col}, 1fr);
        `}

    ${(props) =>
        props.styleProps &&
        props.styleProps.grid &&
        props.styleProps.row &&
        css`
            grid-template-rows: repeat(${props.styleProps.col}, 1fr);
        `}

    ${(props) =>
        props.styleProps &&
        props.styleProps.gridItem &&
        css`
            grid-column: span ${props.styleProps.col};
        `}
`;
