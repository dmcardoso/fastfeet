import React, { useState, useRef, useLayoutEffect } from 'react';
import {
    MdMoreHoriz,
    MdRemoveRedEye,
    MdModeEdit,
    MdDeleteForever,
} from 'react-icons/md';

import PropTypes from 'prop-types';

import Action from '../Action';
import { Container, ActionsList } from './styles';

export default function Actions({ line, options, customActions }) {
    const [isOpen, setIsOpen] = useState(false);
    const [menuRect, setMenuRect] = useState({ width: 0, height: 0 });
    const menuRef = useRef(null);

    useLayoutEffect(() => {
        const rect = menuRef.current.getBoundingClientRect();
        if (
            isOpen &&
            (rect.width !== menuRect.width || rect.height !== menuRect.height)
        ) {
            const { width, height } = rect;
            setMenuRect({ width, height });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const { onView, onEdit, onDelete } = options;

    return (
        <Container
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <MdMoreHoriz size={29} color="#C6C6C6" />
            <ActionsList isOpen={isOpen} ref={menuRef} propStyles={menuRect}>
                {onView && (
                    <Action onClick={() => onView(line)}>
                        <MdRemoveRedEye size={15} color="#8E5BE8" />
                        <span>Visualizar </span>
                    </Action>
                )}
                {onEdit && (
                    <Action onClick={() => onEdit(line)}>
                        <MdModeEdit size={15} color="#4D85EE" />
                        <span>Editar</span>
                    </Action>
                )}
                {onDelete && (
                    <Action onClick={() => onDelete(line)}>
                        <MdDeleteForever size={15} color="#DE3B3B" />
                        <span>Excluir</span>
                    </Action>
                )}
                {customActions.map(
                    ({ call, icon: Icon, iconColor, text }, idx) => (
                        <Action onClick={() => call && call(line)} key={idx}>
                            <Icon size={15} color={iconColor || '#8E5BE8'} />
                            <span>{text}</span>
                        </Action>
                    )
                )}
            </ActionsList>
        </Container>
    );
}

Actions.propTypes = {
    options: PropTypes.shape({
        onView: PropTypes.func,
        onEdit: PropTypes.func,
        onDelete: PropTypes.func,
    }),
    line: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    customActions: PropTypes.arrayOf(
        PropTypes.shape({
            call: PropTypes.func.isRequired,
            icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
                .isRequired,
            iconColor: PropTypes.string,
            text: PropTypes.string.isRequired,
        })
    ),
};

Actions.defaultProps = {
    options: {
        onView: null,
        onEdit: null,
        onDelete: null,
    },
    customActions: [],
};
