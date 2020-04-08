import React from 'react';

import PropTypes from 'prop-types';

import { Group } from './styles';
import Modal from '~/components/Modal';

export default function Info({ open, onClose, openProblem }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Group>
                <h3>Visualizar problema</h3>
                <span>{openProblem.description}</span>
            </Group>
        </Modal>
    );
}

Info.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    openProblem: PropTypes.shape({
        description: PropTypes.string.isRequired,
    }),
};

Info.defaultProps = {
    openProblem: null,
};
