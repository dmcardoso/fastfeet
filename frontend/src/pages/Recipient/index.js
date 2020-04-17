import React, { useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import ContainerInput from '~/components/FormComponents/ContainerInput';
import FormPage from '~/components/FormPage';
import Input from '~/components/UnformComponents/Input';
import InputMask from '~/components/UnformComponents/InputMask';
import api from '~/services/api';

export default function Recipient() {
    const formRef = useRef(null);
    const history = useHistory();
    const urlParams = useParams();

    useEffect(() => {
        async function recipients() {
            try {
                const response = await api.get(`/recipients/${urlParams.id}`);
                const { data: recipient } = response;

                formRef.current.setData({
                    name: recipient.name,
                    street: recipient.street,
                    number: recipient.number,
                    complement: recipient.complement,
                    city: recipient.city,
                    state: recipient.state,
                    cep: recipient.cep,
                });
            } catch (e) {
                toast.error('Destinatário não encontrado!');
            }
        }

        if (urlParams && urlParams.id) {
            recipients();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function validateForm(values) {
        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é obrigatório!'),
                street: Yup.string().required('Rua é obrigatório!'),
                number: Yup.string().required('Número é obrigatório!'),
                complement: Yup.string(),
                city: Yup.string().required('Cidade é obrigatório!'),
                state: Yup.string().required('Estado é obrigatório!'),
                cep: Yup.string().required('CEP é obrigatório!'),
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
                        ? `/recipients/${urlParams.id}`
                        : '/recipients';

                const result = await api[apiMethod](apiUrl, { ...formValues });

                const { id } = result.data;
                if (urlParams && urlParams.id) {
                    toast.success('Destinatário atualizado com sucesso!');
                } else if (id) {
                    toast.success('Destinatário cadastrado com sucesso!');
                    history.push(`/recipients/${id}`);
                }
            } else {
                toast.error(
                    'Falha ao cadastrar destinatário, verifique os dados do formulário!'
                );
            }
        } catch (e) {
            toast.error('Falha ao cadastrar destinatário!');
        }
    }
    return (
        <FormPage
            title={
                urlParams && urlParams.id
                    ? 'Edição de destinatários'
                    : 'Cadastro de destinatários'
            }
            handleSubmit={handleSubmit}
            // initialData={{ name: 'Daniel' }}
            ref={formRef}
        >
            <ContainerInput grid row={3} gap={18}>
                <ContainerInput grid col={1}>
                    <ContainerInput flex="1">
                        <Input name="name" label="Nome" placeholder="Nome" />
                    </ContainerInput>
                </ContainerInput>
                <ContainerInput grid col={5}>
                    <ContainerInput gridItem col={3}>
                        <Input name="street" label="Rua" placeholder="Rua" />
                    </ContainerInput>
                    <ContainerInput gridItem col={1}>
                        <Input
                            name="number"
                            label="Número"
                            placeholder="Número"
                        />
                    </ContainerInput>
                    <ContainerInput gridItem col={1}>
                        <Input
                            name="complement"
                            label="Complemento"
                            placeholder="Complemento"
                        />
                    </ContainerInput>
                </ContainerInput>
                <ContainerInput grid col={3}>
                    <ContainerInput>
                        <Input
                            name="city"
                            label="Cidade"
                            placeholder="Cidade"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <Input
                            name="state"
                            label="Estado"
                            placeholder="Estado"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <InputMask
                            name="cep"
                            mask="99.999-999"
                            label="CEP"
                            placeholder="CEP"
                        />
                    </ContainerInput>
                </ContainerInput>
            </ContainerInput>
        </FormPage>
    );
}
