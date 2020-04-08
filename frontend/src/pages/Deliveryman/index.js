import React, { useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import ContainerInput from '~/components/FormComponents/ContainerInput';
import FormPage from '~/components/FormPage';
import Avatar from '~/components/UnformComponents/Avatar';
import Input from '~/components/UnformComponents/Input';
import api from '~/services/api';

export default function Deliveryman() {
    const formRef = useRef(null);
    const history = useHistory();
    const urlParams = useParams();

    useEffect(() => {
        async function getDeliveryman() {
            try {
                const response = await api.get(`/deliveryman/${urlParams.id}`);
                const { data: deliveryman } = response;

                formRef.current.setData({
                    email: deliveryman.email,
                    name: deliveryman.name,
                    avatar_id: deliveryman.avatar_id,
                });
            } catch (e) {
                toast.error('Entregador não encontrado!');
            }
        }

        if (urlParams && urlParams.id) {
            getDeliveryman();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function validateForm(values) {
        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('Email inválido!')
                    .required('Email é obrigatório!'),
                name: Yup.string()
                    .min(6, 'Mínimo de 6 caracteres')
                    .required('Nome é obrigatório'),
                avatar_id: Yup.number(),
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
                        ? `/deliveryman/${urlParams.id}`
                        : '/deliveryman';

                const result = await api[apiMethod](apiUrl, { ...formValues });

                const { id } = result.data;
                if (urlParams && urlParams.id) {
                    toast.success('Entregador atualizado com sucesso!');
                } else if (id) {
                    toast.success('Entregador cadastrado com sucesso!');
                    history.push(`/deliverymans/${id}`);
                }
            } else {
                toast.error(
                    'Falha ao cadastrar entregador, verifique os dados do formulário!'
                );
            }
        } catch (e) {
            toast.error('Falha ao cadastrar entregador!');
        }
    }
    return (
        <FormPage
            title={
                urlParams && urlParams.id
                    ? 'Edição de entregadores'
                    : 'Cadastro de entregadores'
            }
            handleSubmit={handleSubmit}
            // initialData={{ name: 'Daniel' }}
            ref={formRef}
        >
            <Avatar name="avatar_id" />
            <ContainerInput flex="1">
                <Input name="name" label="Nome" placeholder="Nome" />
            </ContainerInput>
            <ContainerInput flex="1" margin="18px 0 0 0">
                <Input name="email" label="Email" placeholder="Email" />
            </ContainerInput>
        </FormPage>
    );
}
