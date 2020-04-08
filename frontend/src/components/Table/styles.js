import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div``;

export const StyledTable = styled.table.attrs({
    cellPadding: 0,
    cellSpacing: 0,
})`
    width: 100%;
    height: auto;
    background: transparent;
    border-spacing: 0 15px;

    thead {
        tr {
            th {
                text-align: left;
                font-size: 16px;
                font-weight: bold;
                color: ${({ theme }) => theme.colors.grey_primary};

                &:first-child {
                    padding-left: 25px;
                }

                &:last-child {
                    width: 49px;
                    padding-right: 10px;
                }
            }
        }
    }

    tbody {
        tr {
            height: 57px;
            border-radius: 4px;
            background: #ffffff;

            &:hover {
                background-color: ${darken(0.018, '#FFF')};
            }

            td {
                color: ${({ theme }) => theme.colors.grey_input};

                &:first-child {
                    border-radius: 4px 0 0 4px;
                    padding-left: 25px;
                }
            }
        }
    }
`;
