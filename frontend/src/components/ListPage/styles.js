import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    h2 {
        font-size: ${({ theme }) => theme.fontSizeParse(24)};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.grey_primary};
    }
`;
