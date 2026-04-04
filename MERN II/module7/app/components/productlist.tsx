import { products, Product } from "../data/products";
import { Suspense } from "react";
import ProductCard from "./productcard";


function ProductWrapper({ product }: { product: Product }) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProductCard product={product} />
    </Suspense>
  );
}

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p : Product) => (
        <ProductWrapper key={p.id} product={p} />
      ))}
    </div>
  );
}