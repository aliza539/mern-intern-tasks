import { Suspense } from "react";
import ProductList from "@/app/(user)/user/components/productlist";

export default function ProductsPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold font-playfair mb-8">Our Products</h1>
      <Suspense fallback={<p className="text-xl animate-pulse">Loading amazing products...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}