import React, { useMemo } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Group } from './styles';
import Modal from '~/components/Modal';

export default function Info({ open, onClose, openDelivery }) {
    const startDate = useMemo(() => {
        if (openDelivery.start_date) {
            return format(parseISO(openDelivery.start_date), 'dd/MM/yyyy', {
                locale: pt,
            });
        }
        return null;
    }, [openDelivery]);

    const endDate = useMemo(() => {
        if (openDelivery.end_date) {
            return format(parseISO(openDelivery.end_date), 'dd/MM/yyyy', {
                locale: pt,
            });
        }
        return null;
    }, [openDelivery]);

    const canceledDate = useMemo(() => {
        if (openDelivery.canceled_at) {
            return format(parseISO(openDelivery.canceled_at), 'dd/MM/yyyy', {
                locale: pt,
            });
        }
        return null;
    }, [openDelivery]);

    return (
        <Modal open={open} onClose={onClose}>
            <Group>
                <h3>Informações da encomenda</h3>
                <span>
                    {!!openDelivery.recipients.city &&
                        openDelivery.recipients.street}
                </span>
                <span>
                    {!!openDelivery.recipients.city &&
                        `${openDelivery.recipients.city} - `}
                    {!!openDelivery.recipients.state &&
                        openDelivery.recipients.state}
                </span>
                {!!openDelivery.recipients.cep && (
                    <span>{openDelivery.recipients.cep}</span>
                )}
            </Group>
            {openDelivery.status !== 'pending' && (
                <Group>
                    <h3>Datas</h3>
                    {startDate && (
                        <span>
                            <strong>Retirada: </strong> {startDate}
                        </span>
                    )}
                    {canceledDate && (
                        <span>
                            <strong>Cancelada: </strong> {canceledDate}
                        </span>
                    )}
                    {endDate && (
                        <span>
                            <strong>Entrega: </strong> {endDate}
                        </span>
                    )}
                </Group>
            )}
            {openDelivery.status === 'delivered' && openDelivery.signature && (
                <Group>
                    <h3>Assinatura do destinatário</h3>
                    <img
                        src={openDelivery.signature.url}
                        alt="Assiantura do destinatário"
                    />
                </Group>
            )}
        </Modal>
    );
}

Info.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    openDelivery: PropTypes.shape({
        recipients: PropTypes.shape({
            cep: PropTypes.string,
            street: PropTypes.string,
            city: PropTypes.string,
            state: PropTypes.string,
        }),
        signature: PropTypes.shape({
            url: PropTypes.string,
        }),
        status: PropTypes.string,
        start_date: PropTypes.string,
        canceled_at: PropTypes.string,
        end_date: PropTypes.string,
    }),
};

Info.defaultProps = {
    openDelivery: null,
};
