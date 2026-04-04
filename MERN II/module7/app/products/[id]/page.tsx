import { products } from "../../data/products"; // Path confirm kar lein (@/ use karein)
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | My Store`,
    description: `Buy ${product.name} for just $${product.price}. High quality item!`,
    openGraph: {
      title: product.name,
      description: `Buy ${product.name} at the best price.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  
  
  const product = products.find((p) => p.id === Number(id));


  if (!product) notFound();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Next/Image Optimization */}
        <div className="relative h-[400px] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill 
            priority 
            className="rounded-xl shadow-lg object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwFByNxgAAAABJRU5ErkJggg==" // Transparent shimmer pixel
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold font-playfair mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-blue-600 mb-6 font-sans font-semibold">
            ${product.price}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg italic">
            This is an SEO optimized description of {product.name}.
          </p>
          
          <button className="mt-8 bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors w-fit">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}