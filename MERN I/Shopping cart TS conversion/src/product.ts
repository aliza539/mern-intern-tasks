import { Product, Category } from "./types.js";

export const createProduct = (
  id: string,
  name: string,
  price: number,
  category: Category
): Product => {
  return { id, name, price, category };
};