import { products } from "@/data/products";
import { Product } from "@/types/Product";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === Number(params.id));

  if (!product) return <h1>Not Found</h1>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.rating}</p>
    </div>
  );
}