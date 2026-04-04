export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13",
    price: 1200,
    category: "electronics",
    image: "/iphone.jpg",
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 50,
    category: "clothing",
    image: "/image-tshirt.jpg",
  },
];