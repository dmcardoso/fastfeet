/* eslint-disable react/prop-types */
import React, { useMemo, forwardRef } from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';
import { IconLinkButton, IconButton } from '~/components/Button';
import Form from '~/components/UnformComponents/Form';
import colors from '~/styles/colors';

function FormPage({ title, children, handleSubmit, initialData }, ref) {
    const routeMatch = useRouteMatch();

    const listPage = useMemo(() => {
        const explodeUrl = routeMatch.path.split('/');
        return explodeUrl[1] ? `/${explodeUrl[1]}` : '/';
    }, [routeMatch]);

    return (
        <Container>
            <nav>
                <h2>{title}</h2>
                <div>
                    <IconLinkButton
                        color={colors.grey_back_button}
                        icon={MdKeyboardArrowLeft}
                        to={listPage}
                        margin="0 16px 0 0"
                    >
                        Voltar
                    </IconLinkButton>
                    <IconButton
                        icon={MdCheck}
                        type="submit"
                        onClick={() =>
                            ref && ref.current && ref.current.submitForm()
                        }
                    >
                        Salvar
                    </IconButton>
                </div>
            </nav>
            <Form
                ref={ref}
                handleSubmit={handleSubmit}
                initialData={initialData}
            >
                {children}
            </Form>
        </Container>
    );
}

export default forwardRef(FormPage);
