import Image from "next/image";
import { Product } from "../data/products";


export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded"
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />

      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>${product.price}</p>
    </div>
  );
}