/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { MdImage } from 'react-icons/md';

import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';
import colors from '~/styles/colors';

function Avatar({ name, id, preview, file, error, ...rest }, ref) {
    id = id || name;
    return (
        <Container>
            <label htmlFor={id}>
                {preview ? (
                    <img src={preview} alt="Preview" />
                ) : (
                    <>
                        <MdImage size={44} color={colors.grey_border} />
                        <span>Adicionar foto</span>
                    </>
                )}

                <input
                    type="file"
                    id={id}
                    name={name}
                    data-file={file}
                    accept="image/*"
                    ref={ref}
                    {...rest}
                />
            </label>
            {!!error && <ErrorMessage error={error} />}
        </Container>
    );
}

export default forwardRef(Avatar);
