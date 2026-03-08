/**
 * @typedef {import("./cart.js").CartItem} CartItem
 */

/**
 * Sort cart items by price
 * @param {CartItem[]} items
 * @returns {CartItem[]}
 */
export const sortByPrice = (items) => {
  return [...items].sort(
    (a, b) => a.product.price - b.product.price
  );
};

/**
 * Group items by category using Map
 * @param {CartItem[]} items
 * @returns {Map<string, CartItem[]>}
 */
export const groupByCategory = (items) => {
  const map = new Map();

  items.forEach((item) => {
    const { category } = item.product;

    if (!map.has(category)) {
      map.set(category, []);
    }

    map.get(category).push(item);
  });

  return map;
};

/**
 * Get unique categories using Set
 * @param {CartItem[]} items
 * @returns {Set<string>}
 */
export const getUniqueCategories = (items) => {
  return new Set(
    items.map(({ product }) => product.category)
  );
};