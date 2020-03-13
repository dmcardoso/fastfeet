import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;

    label {
        width: 100%;
        color: ${({ theme }) => theme.colors.grey_primary};
        font-size: ${({ theme }) => theme.fontSizeParse(14)};
        font-weight: bold;
        line-height: 19px;
        margin-bottom: 9px;
        text-transform: uppercase;
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

        &::placeholder {
            color: ${({ theme }) => theme.colors.grey_placeholder};
        }
    }
`;
