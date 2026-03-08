import { Product, Category } from "./types.js";

export type Inventory = Record<Category, Product[]>;

export const createInventory = (): Inventory => {
  return {
    electronics: [],
    fashion: [],
    grocery: []
  };
};

export const addProductToInventory = (
  inventory: Inventory,
  product: Product
): void => {
  inventory[product.category].push(product);
};