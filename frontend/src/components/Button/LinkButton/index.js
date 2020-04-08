import React from 'react';

import IconButton from '../IconButton';
import { propTypes, defaultProps } from '../PropsButton/link';

export default function LinkButton({ to, ...rest }) {
    return <IconButton to={to} {...rest} />;
}

LinkButton.propTypes = {
    ...propTypes,
};

LinkButton.defaultProps = {
    ...defaultProps,
};
