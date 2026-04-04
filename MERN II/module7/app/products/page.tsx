import { Suspense } from "react";
import ProductList from "../components/productlist"; // Apna path check karein

export default function ProductsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8 font-playfair">Our Catalogue</h1>
      
      {/* Performance Streaming UI */}
      <Suspense fallback={<div className="grid grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>)}
      </div>}>
        <ProductList />
      </Suspense>
    </main>
  );
}