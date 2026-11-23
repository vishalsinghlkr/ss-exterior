import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import type { Storage } from "redux-persist";

/**
 * Creates a SSR-safe storage engine.
 * On server render, provides a noop storage to avoid hydration failures.
 * On client render, binds to HTML5 localStorage.
 */
const createNoopStorage = (): Storage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage: Storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
