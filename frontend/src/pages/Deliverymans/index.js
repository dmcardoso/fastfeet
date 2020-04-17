import React, { useCallback, useState, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ColumnImage } from './styles';
import Avatar from '~/components/Avatar';
import Box from '~/components/Box';
import { LinkButton } from '~/components/Button';
import { IconInput } from '~/components/FormComponents/Input';
import ListPage from '~/components/ListPage';
import Table from '~/components/Table';
import api from '~/services/api';
import formatId from '~/utils/formats/formatId';

export default function Deliverymans() {
    const tableRef = useRef();
    const history = useHistory();
    const [search, setSearch] = useState('');

    const loadDeliverymans = useCallback(
        ({ page }) => {
            async function getData() {
                try {
                    const response = await api.get(`deliveryman`, {
                        params: {
                            q: search,
                            page,
                        },
                    });

                    return {
                        total: response.data.count,
                        data: response.data.rows,
                    };
                } catch (e) {
                    toast.error('Ocorreu um erro inesperado');
                    return [];
                }
            }

            return getData();
        },
        [search]
    );

    async function deleteDeliveryman(id) {
        await api.delete(`deliveryman/${id}`);

        tableRef.current.fetchData();
    }

    return (
        <ListPage title="Gerenciando entregadores">
            <Box justifyContent="space-between" margin="35px 0 5px 0">
                <IconInput
                    name="search"
                    placeholder="Buscar por entregadores"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <LinkButton to="/deliverymans/new" icon={MdAdd}>
                    CADASTRAR
                </LinkButton>
            </Box>
            <Table
                ref={tableRef}
                columns={[
                    {
                        name: 'ID',
                        accessor: 'id',
                        Cell: (celProps) => <>{formatId(celProps.value)}</>,
                    },
                    {
                        name: 'Foto',
                        accessor: 'avatar',
                        Cell: (celProps) => (
                            <ColumnImage>
                                {celProps.value && celProps.value.url ? (
                                    <img
                                        src={celProps.value.url}
                                        alt={celProps.original.name}
                                    />
                                ) : (
                                    <Avatar name={celProps.original.name} />
                                )}
                            </ColumnImage>
                        ),
                    },
                    {
                        name: 'Nome',
                        accessor: 'name',
                    },
                    {
                        name: 'Email',
                        accessor: 'email',
                    },
                ]}
                actions={{
                    onDelete(line) {
                        confirmAlert({
                            title: `Deseja excluir o entregador ${line.name}?`,
                            message: 'Ao confirmar o entregador será excluído',
                            buttons: [
                                {
                                    label: 'Sim',
                                    onClick: async () => {
                                        await deleteDeliveryman(line.id);
                                    },
                                },
                                {
                                    label: 'Não',
                                    onClick: () => {},
                                },
                            ],
                        });
                    },
                    onEdit(line) {
                        if (line && line.id) {
                            history.push(`/deliverymans/${line.id}`);
                        }
                    },
                }}
                loadData={loadDeliverymans}
            />
        </ListPage>
    );
}
