import { css } from 'styled-components';

import screens from '~/styles/screens';

function extractSizeParams(sizeParam) {
    return screens[sizeParam] ? screens[sizeParam] : sizeParam;
}

export function media(sizes) {
    return (...styleParam) => {
        const medias = sizes.map((sizeParam) => {
            const size = extractSizeParams(sizeParam);
            return css`
                @media screen and (max-width: ${size}px) {
                    ${css(...styleParam)};
                }
            `;
        });

        return css(medias);
    };
}

/**
 * Usage:
 *
 * ${media(screens.laptop, screens.smartphone)`
 *     background: blue;
 * `}
 *
 * ${media(screens.tablet)`
 *     background: grey;
 * `}
 *
 * ${mediaquery.smartphone`
 *     background: red;
 * `}
 */

export default Object.keys(screens).reduce(
    (acc, label) => {
        acc[label] = (...styles) => {
            return media([label])(...styles);
        };
        return acc;
    },
    { media }
);
