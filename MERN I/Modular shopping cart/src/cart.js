/**
 * @typedef {import("./product.js").Product} Product
 */

/**
 * @typedef {Object} CartItem
 * @property {Product} product
 * @property {number} quantity
 */

export class Cart {
  constructor() {
    /** @type {CartItem[]} */
    this.items = [];

    /** @type {number} */
    this.discountPercentage = 0;
  }

  /**
   * Add product to cart
   * @param {Product} product
   * @param {number} [quantity=1]
   */
  addItem(product, quantity = 1) {
    const existing = this.items.find(
      ({ product: p }) => p.id === product.id
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items = [
        ...this.items,
        { product, quantity }
      ];
    }
  }

  /**
   * Remove product by ID
   * @param {string} productId
   */
  removeItem(productId) {
    this.items = this.items.filter(
      ({ product }) => product.id !== productId
    );
  }

  /**
   * Apply discount percentage
   * @param {number} percent
   */
  applyDiscount(percent) {
    this.discountPercentage = percent;
  }

  /**
   * Calculate total after discount
   * @returns {number}
   */
  getTotal() {
    const subtotal = this.items.reduce(
      (total, { product, quantity }) =>
        total + product.price * quantity,
      0
    );

    return subtotal - (subtotal * this.discountPercentage) / 100;
  }

  /**
   * Deep clone cart items
   * @returns {CartItem[]}
   */
  clone() {
    return structuredClone(this.items);
  }

  /**
   * Get cart items
   * @returns {CartItem[]}
   */
  getItems() {
    return [...this.items];
  }
}