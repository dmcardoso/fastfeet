export default function formatId(id) {
    id = id.toString();
    const template = '00';
    return `#${template.substring(0, template.length - id.length) + id}`;
}
