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

export function verifyEmail(email) {
    // VERIFYING ONLY EMAIL WITH SIXPL CAN ONLY LOGIN
    const emailArray = email.split('@')

    if (emailArray[1] === 'sixpl.com' && checkValidEmail(email)) {
        return true
    } else {
        return false;
    }
}

export const checkValidEmail = (email) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    if (isEmailValid) return true;
    return false;
}

export const checkValidURL = (url) => {
    if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
        return true
    } else {
        throw new Error('URL is not valid')
    }
}

export function isFormDataFilled(formData, requirements, responsibilities) {
    const values = Object.values(formData);
    // Check if any of the values are empty
    if (values.some(value => value === '')) {
        return false;
    }
    // Check if either requirements or responsibilities is empty
    if (requirements.length === 0 || responsibilities.length === 0) {
        return false;
    }
    return true;
}