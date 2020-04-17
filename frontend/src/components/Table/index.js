/* eslint-disable react/prop-types */
import React, {
    useState,
    useEffect,
    useMemo,
    useImperativeHandle,
    forwardRef,
} from 'react';

import get from 'get-value';

import Actions from './Actions';
import Pagination from './Pagination';
import { Container, StyledTable } from './styles';

function Table({ data, columns, actions, loadData, customActions }, ref) {
    const [tableState, setTableState] = useState({
        page: 1,
        pages: 0,
        data: [],
    });

    async function setTableData() {
        const dataResponse = await loadData({
            page: tableState.page,
            pages: tableState.pages,
        });

        const { data: nextData, total } = dataResponse;

        const nextPages = Math.ceil(total / 10);

        setTableState({
            ...tableState,
            data: nextData,
            pages: nextPages,
        });
    }

    useImperativeHandle(ref, () => ({
        fetchData() {
            setTableData();
        },
    }));

    useEffect(() => {
        if (loadData) setTableData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableState.page, loadData]);

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
            {tableState.pages > 1 && (
                <Pagination
                    setPage={(nextPage) =>
                        setTableState({ ...tableState, page: nextPage })
                    }
                    page={tableState.page}
                    pages={tableState.pages}
                />
            )}
        </Container>
    );
}

// Table.propTypes = {
//     data: PropTypes.arrayOf(PropTypes.object),
//     columns: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             accessor: PropTypes.string.isRequired,
//             Cell: PropTypes.func,
//         })
//     ),
//     actions: PropTypes.shape({
//         onDelete: PropTypes.func,
//         onView: PropTypes.func,
//         onEdit: PropTypes.func,
//     }),
//     loadData: PropTypes.func,
//     customActions: PropTypes.arrayOf(
//         PropTypes.shape({
//             call: PropTypes.func.isRequired,
//             icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
//                 .isRequired,
//             iconColor: PropTypes.string,
//             text: PropTypes.string.isRequired,
//         })
//     ),
// };

// Table.defaultProps = {
//     data: [],
//     columns: [],
//     customActions: [],
//     actions: {},
//     loadData: null,
// };

export default forwardRef(Table);
