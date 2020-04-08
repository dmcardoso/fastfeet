import React, { useMemo } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, ProblemDescription, ProblemDate } from './styles';

export default function Problem({ problem }) {
    const problemDate = useMemo(() => {
        if (problem && problem.createdAt) {
            return format(parseISO(problem.createdAt), 'dd/MM/yyyy', {
                locale: pt,
            });
        }
        return '';
    }, [problem]);

    return (
        <Container>
            <ProblemDescription>{problem.description}</ProblemDescription>
            <ProblemDate>{problemDate}</ProblemDate>
        </Container>
    );
}
