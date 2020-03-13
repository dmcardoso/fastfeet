import React from 'react';

import { Container, Link } from './styles';

export default function Menu() {
    return (
        <Container>
            <Link to="/deliveries" selected>
                ENCOMENDAS
            </Link>
            <Link to="/">ENTREGADORES</Link>
            <Link to="/">DESTINATÁRIOS</Link>
            <Link to="/problems">PROBLEMAS</Link>
        </Container>
    );
}
