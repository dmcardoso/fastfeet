import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import Info from './Info';
import ListPage from '~/components/ListPage';
import Table from '~/components/Table';
import api from '~/services/api';
import formatId from '~/utils/formats/formatId';

export default function Problems() {
    const [modalInfoOpen, setModalInfoOpen] = useState(false);
    const [openProblem, setOpenProblem] = useState(null);

    async function loadDeliveriesProblems({ page }) {
        try {
            const response = await api.get('/problems', {
                params: {
                    page,
                },
            });

            return { total: response.data.count, data: response.data.rows };
        } catch (e) {
            toast.error('Ocorreu um erro inesperado');
            return [];
        }
    }

    async function cancelDelivery(id) {
        await api.delete(`problem/${id}/cancel-delivery`);
    }

    return (
        <>
            {modalInfoOpen && (
                <Info
                    open={modalInfoOpen}
                    onClose={() => {
                        setModalInfoOpen(false);
                        setOpenProblem(null);
                    }}
                    openProblem={openProblem}
                />
            )}
            <ListPage title="Problemas na entrega">
                <Table
                    columns={[
                        {
                            name: 'Encomenda',
                            accessor: 'delivery.id',
                            Cell: (celProps) => <>{formatId(celProps.value)}</>,
                        },
                        {
                            name: 'Problema',
                            accessor: 'description',
                        },
                    ]}
                    actions={{
                        onView(line) {
                            setOpenProblem(() => {
                                setModalInfoOpen(true);
                                return line;
                            });
                        },
                    }}
                    customActions={[
                        {
                            call(line) {
                                confirmAlert({
                                    title: `Deseja cancelar a encomenda ${line.delivery.product}?`,
                                    message:
                                        'Ao confirmar a encomenda será cancelada!',
                                    buttons: [
                                        {
                                            label: 'Sim',
                                            onClick: async () => {
                                                await cancelDelivery(line.id);
                                            },
                                        },
                                        {
                                            label: 'Não',
                                            onClick: () => {},
                                        },
                                    ],
                                });
                            },
                            icon: MdDeleteForever,
                            iconColor: '#DE3B3B',
                            text: 'Cancelar encomenda',
                        },
                    ]}
                    loadData={loadDeliveriesProblems}
                />
            </ListPage>
        </>
    );
}
