export default function extractInitials(name, limit = 2) {
    const explodeName = name.split(' ', limit);

    if (explodeName.length === 1) {
        return explodeName[0].substring(0, 2).toUpperCase();
    }

    return explodeName
        .map((part) => part.substring(0, 1))
        .join('')
        .toUpperCase();
}
