import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    width: 900px;
    max-width: calc(100% - 20px);
    margin: 0 auto;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        h2 {
            font-size: ${({ theme }) => theme.fontSizeParse(24)};
            font-weight: bold;
            color: ${({ theme }) => theme.colors.grey_primary};
        }

        > div {
            display: flex;
            width: auto;
        }
    }
`;
