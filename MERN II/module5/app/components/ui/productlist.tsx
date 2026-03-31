import ProductCard from "./productcard";
import { Product } from "@/types/Product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-50 dark:bg-slate-950">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}