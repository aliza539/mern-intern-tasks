import { Suspense } from "react";
import ProductList from "@/app/(user)/user/components/productlist";

export default async function ProductsPage() {
  // Static import ki jagah yahan fetch use hoga (Full Assembly requirement)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/products`, { cache: 'no-store' });
  const products = await res.json();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold font-playfair mb-8 text-slate-800">Our Products</h1>
      <Suspense fallback={<p className="text-xl animate-pulse text-blue-600">Loading amazing products...</p>}>
        <ProductList initialProducts={products} /> 
      </Suspense>
    </div>
  );
}