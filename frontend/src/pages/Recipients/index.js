import React, { useCallback, useState, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Box from '~/components/Box';
import { LinkButton } from '~/components/Button';
import { IconInput } from '~/components/FormComponents/Input';
import ListPage from '~/components/ListPage';
import Table from '~/components/Table';
import api from '~/services/api';
import formatId from '~/utils/formats/formatId';

export default function Recipients() {
    const tableRef = useRef();
    const history = useHistory();
    const [search, setSearch] = useState('');

    const loadRecipients = useCallback(
        ({ page }) => {
            async function getData() {
                try {
                    const response = await api.get(`recipients`, {
                        params: {
                            q: search,
                            page,
                        },
                    });

                    const recipients = response.data.rows.map((recipient) => ({
                        ...recipient,
                        full_address: `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`,
                    }));

                    return { total: response.data.count, data: recipients };
                } catch (e) {
                    toast.error('Ocorreu um erro inesperado');
                    return [];
                }
            }

            return getData();
        },
        [search]
    );

    async function deleteRecipient(id) {
        await api.delete(`recipients/${id}`);

        tableRef.current.fetchData();
    }

    return (
        <ListPage title="Gerenciando destinatários">
            <Box justifyContent="space-between" margin="35px 0 5px 0">
                <IconInput
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por destinatários"
                />
                <LinkButton to="/recipients/new" icon={MdAdd}>
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
                        name: 'Nome',
                        accessor: 'name',
                    },
                    {
                        name: 'Endereço',
                        accessor: 'full_address',
                    },
                ]}
                actions={{
                    onDelete(line) {
                        confirmAlert({
                            title: `Deseja excluir o destinatário ${line.name}?`,
                            message:
                                'Ao confirmar o destinatário será excluído',
                            buttons: [
                                {
                                    label: 'Sim',
                                    onClick: async () => {
                                        await deleteRecipient(line.id);
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
                            history.push(`/recipients/${line.id}`);
                        }
                    },
                }}
                loadData={loadRecipients}
            />
        </ListPage>
    );
}
