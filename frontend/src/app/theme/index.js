import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { fontSizeParse } from './utils/font';
import mediaquery, { media } from './utils/media-query';
import colors from '~/styles/colors';
import screens from '~/styles/screens';

function Theme({ children }) {
    return (
        <ThemeProvider
            theme={{ colors, fontSizeParse, media, ...mediaquery, screens }}
        >
            {children}
        </ThemeProvider>
    );
}

Theme.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Theme;
