import styled from 'styled-components';

export const Group = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: ${({ theme }) => theme.fontSizeParse(14)};
        color: ${({ theme }) => theme.colors.grey_primary};
        margin-bottom: 4px;
    }

    > span {
        font-size: ${({ theme }) => theme.fontSizeParse(16)};
        color: ${({ theme }) => theme.colors.grey_input};
        line-height: 26px;
    }
`;
