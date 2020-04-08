import styled from 'styled-components';

export const Container = styled.label`
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.grey_border};
    border-radius: 4px;
    width: ${(props) =>
        props.styleProps && props.styleProps.width
            ? props.styleProps.width
            : '100%'};
    max-width: 100%;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;

    input {
        font-size: ${({ theme }) => theme.fontSizeParse(16)};
        color: ${({ theme }) => theme.colors.grey_input};
        width: calc(100% - 40px);
        border: unset;

        &:focus {
            border-color: ${({ theme }) => theme.colors.purple_primary};
        }

        &:hover {
            border-color: ${({ theme }) => theme.colors.grey_input_hover};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.grey_placeholder};
        }
    }
`;
