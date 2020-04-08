import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) =>
        props.styleProps && props.styleProps.width
            ? props.styleProps.width
            : '100%'};
    height: auto;

    label {
        width: 100%;
        color: ${({ theme }) => theme.colors.grey_primary};
        font-size: ${({ theme }) => theme.fontSizeParse(14)};
        font-weight: bold;
        line-height: 19px;
        margin-bottom: 9px;
    }

    input {
        width: 100%;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.grey_border};
        padding: 12px 15px;
        font-size: ${({ theme }) => theme.fontSizeParse(16)};
        color: ${({ theme }) => theme.colors.grey_input};

        &:focus {
            border-color: ${({ theme }) => theme.colors.purple_primary};
        }

        &:hover {
            border-color: ${({ theme }) => theme.colors.grey_input_hover};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.grey_placeholder};
        }

        ${(props) =>
            !!props.styleProps.error &&
            css`
                border-color: ${props.theme.colors.red_primary};
            `}
    }
`;
