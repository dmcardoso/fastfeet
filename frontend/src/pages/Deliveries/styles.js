import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const DeliverymanColumn = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;

export const InputFilters = styled.div`
    display: flex;
    height: 44px;
`;

export const ButtonFilter = styled.button.attrs({
    type: 'button',
})`
    height: 100%;
    width: auto;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid transparent;
    margin-left: 15px;
    border-radius: 4px;
    color: #999999;
    background-color: #fff;

    ${(props) =>
        props.active &&
        css`
            background-color: ${lighten(0.18, '#6a25e4')};
            color: #fff;
        `}
`;
