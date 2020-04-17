import React, { useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import ContainerInput from '~/components/FormComponents/ContainerInput';
import FormPage from '~/components/FormPage';
import AsyncSelect from '~/components/UnformComponents/AsyncSelect';
import Input from '~/components/UnformComponents/Input';
import api from '~/services/api';

export default function Delivery() {
    const formRef = useRef(null);
    const history = useHistory();
    const urlParams = useParams();

    useEffect(() => {
        async function getDelivery() {
            try {
                const response = await api.get(`/delivery/${urlParams.id}`);
                const { data: delivery } = response;

                formRef.current.setData({
                    recipient_id: delivery.recipient_id,
                    deliveryman_id: delivery.deliveryman_id,
                    product: delivery.product,
                });
            } catch (e) {
                toast.error('Encomenda não encontrada!');
                history.push('/deliveries');
            }
        }

        if (urlParams && urlParams.id) {
            getDelivery();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function loadRecipients(search) {
        try {
            const response = await api.get(`/recipients`, {
                params: {
                    q: search,
                },
            });

            return response.data.rows.map((recipient) => ({
                label: recipient.name,
                value: recipient.id,
            }));
        } catch (e) {
            toast.error('Ocorreu um erro inesperado');
        }
    }

    async function loadDeliverymans(search) {
        try {
            const response = await api.get(`/deliveryman`, {
                params: {
                    q: search,
                },
            });

            return response.data.rows.map((deliveryman) => ({
                label: deliveryman.name,
                value: deliveryman.id,
            }));
        } catch (e) {
            toast.error('Ocoreu um erro inesperado');
        }
    }

    async function validateForm(values) {
        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                recipient_id: Yup.number()
                    .typeError('Destinatário é obrigatório')
                    .required('Destinatário é obrigatório'),
                product: Yup.string()
                    .min(6, 'Mínimo de 6 caracteres')
                    .required('Nome do produto é obrigatório'),
                deliveryman_id: Yup.number('Entregador é obrigatório')
                    .typeError('Entregador é obrigatório')
                    .required('Entregador é obrigatório'),
            });

            await schema.validate(values, {
                abortEarly: false,
            });

            return true;
        } catch (err) {
            const validationErrors = {};

            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    validationErrors[error.path] = error.message;
                });
                formRef.current.setErrors(validationErrors);
            }

            return false;
        }
    }

    async function handleSubmit(formValues) {
        try {
            const isValid = await validateForm(formValues);

            if (isValid) {
                const apiMethod = urlParams && urlParams.id ? 'put' : 'post';
                const apiUrl =
                    urlParams && urlParams.id
                        ? `/delivery/${urlParams.id}`
                        : '/delivery';

                const result = await api[apiMethod](apiUrl, { ...formValues });

                const { id } = result.data;
                if (urlParams && urlParams.id) {
                    toast.success('Encomenda atualizada com sucesso!');
                } else if (id) {
                    toast.success('Encomenda cadastrada com sucesso!');
                    history.push(`/deliveries/${id}`);
                }
            } else {
                toast.error(
                    'Falha ao cadastrar encomenda, verifique os dados do formulário!'
                );
            }
        } catch (e) {
            toast.error('Falha ao cadastrar encomenda!');
        }
    }

    return (
        <FormPage
            title={
                urlParams && urlParams.id
                    ? 'Edição de encomendas'
                    : 'Cadastro de encomendas'
            }
            handleSubmit={handleSubmit}
            ref={formRef}
        >
            <ContainerInput grid col={2}>
                <ContainerInput flex="1">
                    <AsyncSelect
                        name="recipient_id"
                        label="Destinatário"
                        placeholder="Destinatário"
                        loadOptions={loadRecipients}
                    />
                </ContainerInput>
                <ContainerInput flex="1">
                    <AsyncSelect
                        name="deliveryman_id"
                        label="Entregador"
                        placeholder="Entregador"
                        loadOptions={loadDeliverymans}
                    />
                </ContainerInput>
            </ContainerInput>
            <ContainerInput flex="1" margin="18px 0 0 0">
                <Input
                    name="product"
                    label="Nome do produto"
                    placeholder="Nome do produto"
                />
            </ContainerInput>
        </FormPage>
    );
}
