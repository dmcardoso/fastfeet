import styled from 'styled-components';

export const StyledButton = styled.div`
    width: 100%;
    height: auto;
    border-radius: 4px;
    padding: 12px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizeParse(16)};
    background-color: ${(props) =>
        props.styleProps && props.styleProps.color
            ? props.styleProps.color
            : null};
`;
