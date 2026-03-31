// Product Type Definition
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
};

// Mock Products Data - Replace with MongoDB in MERN-III
export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    image: "/images/headphones.jpg",
    category: "Electronics",
    stock: 25,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description:
      "Advanced fitness tracking and health monitoring smartwatch with OLED display.",
    image: "/images/smartwatch.jpg",
    category: "Electronics",
    stock: 15,
    rating: 4.7,
  },
  {
    id: 3,
    name: "USB-C Cable",
    price: 12.99,
    description: "Durable USB-C charging and data transfer cable. 2 meters long.",
    image: "/images/usb-cable.jpg",
    category: "Accessories",
    stock: 100,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Portable SSD",
    price: 149.99,
    description: "1TB portable SSD with fast read/write speeds up to 1050MB/s.",
    image: "/images/ssd.jpg",
    category: "Storage",
    stock: 30,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Webcam Pro",
    price: 89.99,
    description: "1080p HD webcam with auto-focus and built-in microphone.",
    image: "/images/webcam.jpg",
    category: "Electronics",
    stock: 20,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "RGB mechanical keyboard with Cherry MX switches and aluminum frame.",
    image: "/images/keyboard.jpg",
    category: "Peripherals",
    stock: 18,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Mouse Pad",
    price: 24.99,
    description: "Large gaming mouse pad with non-slip base. 80x30cm.",
    image: "/images/mousepad.jpg",
    category: "Accessories",
    stock: 50,
    rating: 4.1,
  },
  {
    id: 8,
    name: "Phone Stand",
    price: 15.99,
    description: "Adjustable phone stand compatible with all devices.",
    image: "/images/phonestand.jpg",
    category: "Accessories",
    stock: 60,
    rating: 4.4,
  },
];

// Helper function to get product by ID
export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

// Helper function to search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
}
