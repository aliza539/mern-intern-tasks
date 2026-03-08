export type Category = "electronics" | "fashion" | "grocery";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}

export interface CartItem {
  product: Product;
  quantity: number;
}