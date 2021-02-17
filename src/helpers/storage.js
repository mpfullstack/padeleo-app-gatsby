const defaultStorage = typeof window !== "undefined" ? localStorage : null;

const Storage = {
  set: (key, value) => defaultStorage.setItem(key, value),
  get: (key) => defaultStorage.getItem(key)
}

export default Storage;