import styled from 'styled-components';

export const Message = styled.span`
    color: ${({ theme }) => theme.colors.red_primary};
    font-size: ${({ theme }) => theme.fontSizeParse(12)};
    font-weight: normal;
    margin-top: 2px;
`;
