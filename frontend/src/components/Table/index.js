import React, { useState, useEffect, useMemo } from 'react';

import get from 'get-value';
import PropTypes from 'prop-types';

import Actions from './Actions';
import { Container, StyledTable } from './styles';

export default function Table({
    data,
    columns,
    actions,
    loadData,
    customActions,
}) {
    const [tableState, setTableState] = useState({
        page: 0,
        pages: 0,
        showPagination: false,
        data: [],
    });

    useEffect(() => {
        async function setTableData() {
            const dataResponse = await loadData({
                page: tableState.page,
                pages: tableState.pages,
            });
            setTableState({ ...tableState, data: dataResponse });
        }

        if (loadData) setTableData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableState.page, tableState.pages, loadData]);

    const tableColumns = useMemo(() => {
        return [...columns, { name: 'Ações', accessor: 'tb-actions' }];
    }, [columns]);

    const rowData = tableColumns.map((column) => ({
        accessor: column.accessor,
        Cell: column.Cell,
    }));

    const tableData = useMemo(() => {
        if (loadData) {
            return tableState.data || [];
        }
        return data;
    }, [tableState, data, loadData]);

    return (
        <Container>
            <StyledTable>
                <thead>
                    <tr>
                        {tableColumns.map((column, idx) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <th key={`tb-column-${idx}`}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, idx) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <tr key={`tb-item-${idx}`}>
                                {rowData.map(({ accessor, Cell }, idx_data) => {
                                    if (accessor === 'tb-actions') {
                                        return (
                                            <Actions
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={`tb-row-item-${idx_data}`}
                                                options={actions}
                                                customActions={customActions}
                                                line={item}
                                            />
                                        );
                                    }

                                    if (Cell) {
                                        return (
                                            <td
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={`tb-row-item-${idx_data}`}
                                            >
                                                {Cell({
                                                    original: item,
                                                    value: get(item, accessor),
                                                    tableState,
                                                })}
                                            </td>
                                        );
                                    }

                                    return (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <td key={`tb-row-item-${idx_data}`}>
                                            {get(item, accessor)}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </Container>
    );
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            accessor: PropTypes.string.isRequired,
            Cell: PropTypes.func,
        })
    ),
    actions: PropTypes.shape({
        onDelete: PropTypes.func,
        onView: PropTypes.func,
        onEdit: PropTypes.func,
    }),
    loadData: PropTypes.func,
    customActions: PropTypes.arrayOf(
        PropTypes.shape({
            call: PropTypes.func.isRequired,
            icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
                .isRequired,
            iconColor: PropTypes.string,
            text: PropTypes.string.isRequired,
        })
    ),
};

Table.defaultProps = {
    data: [],
    columns: [],
    customActions: [],
    actions: {},
    loadData: null,
};
