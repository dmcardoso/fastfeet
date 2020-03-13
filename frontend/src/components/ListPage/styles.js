import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;

    h2 {
        font-size: ${({ theme }) => theme.fontSizeParse(24)};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.grey_primary};
    }
`;
