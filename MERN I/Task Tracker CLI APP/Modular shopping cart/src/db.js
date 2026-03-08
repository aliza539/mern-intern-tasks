import { Product } from "./product.js";

/**
 * Simulate fetching products from database
 * @returns {Promise<Product[]>}
 */
export const fetchProductsFromDB = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        Product.create({
          id: "1",
          name: "Laptop",
          price: 1000,
          category: "electronics"
        }),
        Product.create({
          id: "2",
          name: "Shoes",
          price: 200,
          category: "fashion"
        }),
        Product.create({
          id: "3",
          name: "Phone",
          price: 500,
          category: "electronics"
        })
      ]);
    }, 500);
  });
};