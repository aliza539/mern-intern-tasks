import { CartItem, Product } from "./types.js";

export class Cart {

  private items: CartItem[] = [];

  addItem(product: Product, quantity: number = 1): void {
    this.items.push({ product, quantity });
  }

  getItems(): CartItem[] {
    return this.items;
  }

  updateProduct(
    productId: string,
    updates: Partial<Pick<Product, "name" | "price">>
  ): void {

    const item = this.items.find(i => i.product.id === productId);

    if (!item) return;

    if (updates.name !== undefined) {
      item.product.name = updates.name;
    }

    if (updates.price !== undefined) {
      item.product.price = updates.price;
    }
  }
}

/* mapped type for readonly cart */

export type ReadonlyCart<T> = {
  readonly [K in keyof T]: T[K];
};