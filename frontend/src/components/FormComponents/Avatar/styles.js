import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    label {
        width: 150px;
        cursor: pointer;
        height: 150px;
        border-radius: 50%;
        border: 1px dashed ${({ theme }) => theme.colors.grey_border};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

        &:hover {
            border-color: ${({ theme }) =>
                darken(0.06, theme.colors.grey_border)};
            span {
                color: ${({ theme }) => darken(0.06, theme.colors.grey_border)};
            }
        }

        span {
            font-size: ${({ theme }) => theme.fontSizeParse(16)};
            font-weight: bold;
            line-height: 21px;
            color: ${({ theme }) => theme.colors.grey_border};
        }

        input {
            display: none;
        }
    }
`;
