import styled from 'styled-components';

const statusColor = {
    canceled: {
        background: '#FAB0B0',
        text: '#DE3B3B',
    },
    pending: {
        background: '#F0F0DF',
        text: '#C1BC35',
    },
    delivered: {
        background: '#DFF0DF',
        text: '#2CA42B',
    },
    withdrawled: {
        background: '#BAD2FF',
        text: '#4D85EE',
    },
};

export const Container = styled.div`
    padding: 4px 7px;
    width: fit-content;
    background-color: ${(props) =>
        props.type && statusColor[props.type].background};
    border-radius: 12px;
    > strong {
        font-size: 14px;
        display: flex;
        font-weight: bold;
        color: ${(props) => props.type && statusColor[props.type].text};
        align-items: center;

        &::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${(props) =>
                props.type && statusColor[props.type].text};
            margin-right: 6px;
        }
    }
`;
