import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.nav`
    margin-top: 5px;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        align-items: center;

        li {
            margin-right: 8px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

export const Button = styled.button.attrs({
    type: 'button',
})`
    border: unset;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.grey_primary};
    background-color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
        ${(props) =>
            !props.active &&
            css`
                background-color: ${lighten(0.098, '#7D40E7')};
                color: #fff;
            `}
    }

    ${(props) =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `}

    ${(props) =>
        props.active &&
        css`
            background-color: #7d40e7;
            color: #fff;
        `}
`;
