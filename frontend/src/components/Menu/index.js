import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Link } from './styles';

export default function Menu() {
    const location = useLocation();
    return (
        <Container>
            <Link
                to="/deliveries"
                selected={location.pathname.startsWith('/deliveries')}
            >
                ENCOMENDAS
            </Link>
            <Link
                to="/deliverymans"
                selected={location.pathname.startsWith('/deliverymans')}
            >
                ENTREGADORES
            </Link>
            <Link
                to="/recipients"
                selected={location.pathname.startsWith('/recipients')}
            >
                DESTINATÁRIOS
            </Link>
            <Link
                to="/problems"
                selected={location.pathname.startsWith('/problems')}
            >
                PROBLEMAS
            </Link>
        </Container>
    );
}
