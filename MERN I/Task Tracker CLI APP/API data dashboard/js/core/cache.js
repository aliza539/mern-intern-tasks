const cache = new WeakMap();

export function setCache(key, value) {
  cache.set(key, value);
}

export function getCache(key) {
  return cache.get(key);
}

export function hasCache(key) {
  return cache.has(key);
}