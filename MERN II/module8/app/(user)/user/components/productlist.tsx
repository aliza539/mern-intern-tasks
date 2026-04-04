import ProductCard from "./productcard";
import { products as defaultProducts } from "@/app/(user)/user/data/product";
import { Product } from "@/app/(user)/user/types";

export default function ProductList({ products }: { products?: Product[] }) {
  // Agar products prop nahi milta, toh default data use karega
  const displayProducts = products || defaultProducts;

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {displayProducts.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}