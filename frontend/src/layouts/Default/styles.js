import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey_app};
    height: 100%;

    main {
        width: 1200px;
        max-width: 100%;
        margin: 0 auto;
    }
`;
