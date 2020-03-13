import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.purple_primary};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
