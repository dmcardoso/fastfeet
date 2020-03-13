import { Link as ReactRouterLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Container = styled.ul`
    display: flex;
    align-items: center;
`;

export const Link = styled(ReactRouterLink)`
    font-size: ${({ theme }) => theme.fontSizeParse(15)};
    color: ${({ theme }) => theme.colors.grey_placeholder};
    font-weight: bold;

    ${(props) =>
        props.selected &&
        css`
            color: ${({ theme }) => theme.colors.grey_primary};
        `}
    & + a {
        margin-left: 21px;
    }
`;
