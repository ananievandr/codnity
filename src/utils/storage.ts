import { StorageKeys } from './constants/StorageKeys';

export const storage = {
  setItem(key: StorageKeys, value: string) {
    localStorage.setItem(key, value);
  },
  getItem<K>(K: StorageKeys): string {
    return localStorage.getItem(K) || '';
  },
  removeItem(key: StorageKeys) {
    localStorage.removeItem(key);
  },
};
