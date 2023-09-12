export function findObjectBySlug(obj, targetSlug) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            if (obj[key].slug === targetSlug) {
                return obj[key];
            }
        }
    }
    return null; // Object with the specified slug not found
}