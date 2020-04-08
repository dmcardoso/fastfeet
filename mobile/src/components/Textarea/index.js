import React, { forwardRef } from 'react';

import { TInput, Container } from './styles';

function Textarea({ style, elevation, ...rest }, ref) {
    return (
        <Container style={style} elevation={elevation}>
            <TInput {...rest} ref={ref} />
        </Container>
    );
}

export default forwardRef(Textarea);
