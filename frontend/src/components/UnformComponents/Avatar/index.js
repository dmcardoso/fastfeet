import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@unform/core';

import FormAvatar from '~/components/FormComponents/Avatar';
import { propTypes } from '~/components/FormComponents/Avatar/PropsAvatar';
import api from '~/services/api';

export default function Avatar({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    useEffect(() => {
        async function getPreview(id) {
            const response = await api.get(`files/${id}`);

            const { url } = response.data;
            setPreview(url);
        }

        if (file && !preview) {
            getPreview(file);
        }
    }, [file, preview]);

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'dataset.file',
            clearValue(ref) {
                ref.value = '';
                setPreview(null);
                setFile(null);
            },
            setValue(_, value) {
                setFile(value);
            },
        });
    }, [fieldName, registerField]);

    return (
        <FormAvatar
            preview={preview}
            name={fieldName}
            onChange={handleChange}
            ref={inputRef}
            error={error}
            file={file}
            {...rest}
        />
    );
}

Avatar.propTypes = {
    ...propTypes,
};
