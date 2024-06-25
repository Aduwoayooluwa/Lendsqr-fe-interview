export const saveLocalStorage = (key: string, value: string) => {

    return localStorage.setItem(key, value);
}

export const getValFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}