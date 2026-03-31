export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  rating: number;
  description?: string;
  category?: string;
};
