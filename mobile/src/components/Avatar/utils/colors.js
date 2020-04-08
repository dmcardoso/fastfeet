/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
export default function nameToColor(name) {
    let hash = 0;
    if (name.length === 0) return hash;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        hash &= hash;
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 255;
        color += `00${value.toString(16)}`.substr(-2);
    }
    return color;
}
