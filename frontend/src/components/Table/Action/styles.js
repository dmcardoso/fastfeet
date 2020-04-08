import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    width: 100%;
    height: auto;
    padding: 6px 0;
    align-items: center;
    cursor: pointer;
    border: none;
    background: unset;

    &:hover {
        span {
            color: ${({ theme }) => theme.colors.grey_primary};
        }
    }
    span {
        font-size: 16px;
        line-height: 20px;
        white-space: nowrap;
        color: ${({ theme }) => theme.colors.grey_placeholder};
    }

    & + & {
        border-top: 1px solid ${({ theme }) => theme.colors.grey_actions};
    }

    svg {
        margin-right: 8px;
    }

    &:first-of-type {
        padding-top: 0;
    }

    &:last-of-type {
        padding-bottom: 0;
    }
`;
