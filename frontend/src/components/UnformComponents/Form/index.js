/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import { Form as UnformForm } from '@unform/web';

import { Container } from './styles';

function Form({ handleSubmit, children, initialData }, ref) {
    return (
        <UnformForm onSubmit={handleSubmit} initialData={initialData} ref={ref}>
            <Container>{children}</Container>
        </UnformForm>
    );
}

export default forwardRef(Form);
