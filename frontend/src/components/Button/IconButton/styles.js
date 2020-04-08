import { darken } from 'polished';
import styled, { css } from 'styled-components';

import Link from '~/components/Link';

export const StyledButton = styled('button').attrs((props) => ({
    as: props.to ? Link : 'button',
}))`
    width: fit-content;
    height: auto;
    border-radius: 4px;
    padding: 11px 16px;
    border: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    line-height: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizeParse(16)};
    transition: 0.2s;
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

    svg {
        margin-right: 7px;
    }

    &:hover {
        background-color: ${(props) => darken(0.06, props.styleProps.color)};
    }
`;
