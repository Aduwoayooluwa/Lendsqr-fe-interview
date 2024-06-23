export const saveLocalStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
}

export const getValFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
}