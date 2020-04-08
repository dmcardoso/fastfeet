import React, { forwardRef } from 'react';

import { Form as UnformForm } from '@unform/web';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Form({ handleSubmit, children, initialData }, ref) {
    return (
        <UnformForm onSubmit={handleSubmit} initialData={initialData} ref={ref}>
            <Container>{children}</Container>
        </UnformForm>
    );
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOf([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    initialData: PropTypes.objectOf([PropTypes.any]),
};

Form.defaultProps = {
    initialData: {},
};

export default forwardRef(Form);
