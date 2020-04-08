import styled, { css } from 'styled-components';

import Link from '~/components/Link';

export const StyledButton = styled.button.attrs((props) => ({
    as: props.to ? Link : 'button',
}))`
    width: 100%;
    height: auto;
    border-radius: 4px;
    padding: 12px;
    text-align: center;
    color: #ffffff;
    border: unset;
    cursor: pointer;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizeParse(16)};
    background-color: ${(props) =>
        props.styleProps && props.styleProps.color
            ? props.styleProps.color
            : null};
    ${(props) =>
        props.styleProps &&
        props.styleProps.margin &&
        css`
            margin: ${props.styleProps.margin};
        `}
`;
