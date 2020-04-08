import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 64px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey_border};
    background-color: #fff;

    header {
        width: 1380px;
        max-width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;

        div {
            display: flex;
            flex-direction: column;
            padding: 16px;
            align-items: center;

            strong {
                color: ${({ theme }) => theme.colors.grey_input};
                font-size: ${({ theme }) => theme.fontSizeParse(14)};
                font-weight: bold;
            }

            button {
                border: 0;
                background: unset;
                color: ${({ theme }) => theme.colors.red_primary};
                font-size: ${({ theme }) => theme.fontSizeParse(14)};
            }
        }
    }
`;

export const NavHeader = styled.nav`
    padding: 16px 0;
    display: flex;

    > a {
        padding: 0 30px;
        border-right: 1px solid ${({ theme }) => theme.colors.grey_border};
        margin-right: 30px;
        display: flex;
        align-items: center;

        img {
            width: 135px;
        }
    }
`;
