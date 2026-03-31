'use client';

import ProductList from "@/components/ui/productlist";
import { products } from "@/data/product";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Our Products
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Explore our wide selection of premium electronics and accessories
        </p>
        <ProductList products={products} />
      </div>
    </main>
  );
}
