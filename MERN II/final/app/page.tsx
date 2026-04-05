import Navbar from "./Component/Navbar";
import ProductList from "./Component/productlist";
import { products } from "@/data/product";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            Welcome to Our Store
          </h1>
          <ProductList products={products} />
        </div>
      </main>
    </div>
  );
}
