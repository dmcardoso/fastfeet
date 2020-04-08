import React, { useState, useCallback } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Info from './Info';
import { DeliverymanColumn } from './styles';
import Avatar from '~/components/Avatar';
import Box from '~/components/Box';
import { LinkButton } from '~/components/Button';
import { IconInput } from '~/components/FormComponents/Input';
import ListPage from '~/components/ListPage';
import Status from '~/components/Status';
import Table from '~/components/Table';
import api from '~/services/api';
import formatId from '~/utils/formats/formatId';

export default function Deliveries() {
    const history = useHistory();
    const [modalInfoOpen, setModalInfoOpen] = useState(false);
    const [openDelivery, setOpenDelivery] = useState(null);
    const [search, setSearch] = useState('');

    const loadDeliveries = useCallback(() => {
        async function getData() {
            try {
                const response = await api.get(`delivery?q=${search}`);

                const deliveries = response.data.map((delivery) => {
                    let status = 'pending';

                    if (delivery.start_date) {
                        status = 'withdrawled';
                    }

                    if (delivery.end_date) {
                        status = 'delivered';
                    }

                    if (delivery.canceled_at) {
                        status = 'canceled';
                    }

                    return { ...delivery, status };
                });

                return deliveries;
            } catch (e) {
                toast.error('Ocorreu um erro inesperado');
                return [];
            }
        }

        return getData();
    }, [search]);

    async function deleteDelivery(id) {
        await api.delete(`delivery/${id}`);

        window.location.reload();
    }

    return (
        <>
            {modalInfoOpen && (
                <Info
                    open={modalInfoOpen}
                    onClose={() => {
                        setModalInfoOpen(false);
                        setOpenDelivery(null);
                    }}
                    openDelivery={openDelivery}
                />
            )}
            <ListPage title="Gerenciando encomendas">
                <Box justifyContent="space-between" margin="35px 0 5px 0">
                    <IconInput
                        name="search"
                        placeholder="Buscar por encomendas"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <LinkButton to="/deliveries/new" icon={MdAdd}>
                        CADASTRAR
                    </LinkButton>
                </Box>
                <Table
                    columns={[
                        {
                            name: 'ID',
                            accessor: 'id',
                            Cell: (celProps) => <>{formatId(celProps.value)}</>,
                        },
                        {
                            name: 'Destinatário',
                            accessor: 'recipients.name',
                        },
                        {
                            name: 'Entregador',
                            accessor: 'deliveryman',
                            Cell: (celProps) => (
                                <DeliverymanColumn>
                                    {celProps.value.avatar.url ? (
                                        <img
                                            src={celProps.value.avatar.url}
                                            alt={celProps.value.name}
                                        />
                                    ) : (
                                        <Avatar
                                            name={celProps.value.name}
                                            margin="0 5px"
                                        />
                                    )}
                                    {celProps.value.name}
                                </DeliverymanColumn>
                            ),
                        },
                        {
                            name: 'Cidade',
                            accessor: 'recipients.city',
                        },
                        {
                            name: 'Estado',
                            accessor: 'recipients.state',
                        },
                        {
                            name: 'Status',
                            accessor: 'status',
                            Cell: (celProps) => (
                                <Status type={celProps.value} />
                            ),
                        },
                    ]}
                    actions={{
                        onDelete(line) {
                            confirmAlert({
                                title: `Deseja excluir a encomenda ${line.id}?`,
                                message:
                                    'Ao confirmar a encomenda será excluída',
                                buttons: [
                                    {
                                        label: 'Sim',
                                        onClick: async () => {
                                            await deleteDelivery(line.id);
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
                                history.push(`/deliveries/${line.id}`);
                            }
                        },
                        onView(line) {
                            setOpenDelivery(() => {
                                setModalInfoOpen(true);
                                return line;
                            });
                        },
                    }}
                    loadData={loadDeliveries}
                />
            </ListPage>
        </>
    );
}
