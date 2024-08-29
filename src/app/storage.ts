import { StoredKeys } from "./types";

export const LOCALSTORAGE = (() => ({
    get(key: StoredKeys) {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return undefined;
    },
    set(key: StoredKeys, value: {}) {
        const strValue = JSON.stringify(value);
        localStorage.setItem(key, strValue);
    },
    delete(key: StoredKeys) {
        localStorage.removeItem(key);
    }
}))()