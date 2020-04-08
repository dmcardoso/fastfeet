import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    label {
        width: 100%;
        color: ${({ theme }) => theme.colors.grey_primary};
        font-size: ${({ theme }) => theme.fontSizeParse(14)};
        font-weight: bold;
        line-height: 19px;
        margin-bottom: 9px;
    }
`;
