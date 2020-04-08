import React from 'react';

import IconButton from '../IconButton';
import { propTypes, defaultProps } from '../PropsButton/icon-link';

export default function IconLinkButton({ to, ...rest }) {
    return <IconButton to={to} {...rest} />;
}

IconLinkButton.propTypes = {
    ...propTypes,
};

IconLinkButton.defaultProps = {
    ...defaultProps,
};
