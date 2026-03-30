import ProductCard from "./Productcard";
import { Product } from "../types/Product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}