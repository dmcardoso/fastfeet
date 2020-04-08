import React from 'react';

import {
    Points,
    Step,
    Line,
    StepDescriptions,
    StepDescription,
} from './styles';

export default function Timeline({ delivery }) {
    return (
        <>
            <Points>
                <Step active />
                <Line />
                <Step active={delivery.start_date} />
                <Line />
                <Step active={delivery.end_date} />
            </Points>
            <StepDescriptions>
                <StepDescription>Aguardando Retirada</StepDescription>
                <StepDescription>Retirada</StepDescription>
                <StepDescription>Entregue</StepDescription>
            </StepDescriptions>
        </>
    );
}
