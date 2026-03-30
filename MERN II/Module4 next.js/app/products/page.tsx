import ProductList from "@/Components/productlist";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
}