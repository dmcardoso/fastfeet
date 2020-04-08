import React from 'react';
import ReactModal from 'react-modal';

import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');

export default function Modal({ children, open, onClose }) {
    function handleCloseModal() {
        if (onClose) onClose();
    }

    return (
        <ReactModal
            isOpen={open}
            contentLabel="onRequestClose Example"
            onRequestClose={handleCloseModal}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                content: {
                    border: 'unset',
                    background: '#fff',
                    inset: 'unset',
                    width: 450,
                    padding: 25,
                },
            }}
        >
            {children}
        </ReactModal>
    );
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func,
};

Modal.defaultProps = {
    open: false,
    onClose: null,
};
