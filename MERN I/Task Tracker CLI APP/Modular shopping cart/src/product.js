/**
 * @typedef {Object} ProductProps
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} category
 */

export class Product {
  /**
   * @param {ProductProps} param0
   */
  constructor({ id, name, price, category }) {
    if (!Product.isValidPrice(price)) {
      throw new Error("Invalid product price");
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  /**
   * @param {number} price
   * @returns {boolean}
   */
  static isValidPrice(price) {
    return typeof price === "number" && price > 0;
  }

  /**
   * @param {ProductProps} data
   * @returns {Product}
   */
  static create(data) {
    return new Product(data);
  }
}