import { products } from "@/app/(user)/user/data/product";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  return { title: product ? product.name : "Product Not Found" };
}

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();

  return (
    <div className="p-10 flex gap-10">
      <Image src={product.image} alt={product.name} width={400} height={400} className="rounded" />
      <div>
        <h1 className="text-4xl font-bold font-playfair">{product.name}</h1>
        <p className="text-2xl text-blue-600 mt-4">${product.price}</p>
      </div>
    </div>
  );
}