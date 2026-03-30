import { products } from "@/data/products";
import { Product } from "@/types/Product";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === Number(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-xl text-gray-600">Sorry, the product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <span key={i} className="text-yellow-400 text-2xl">★</span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-500 border border-gray-300">
            {product.image || 'Product Image'}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="text-4xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</div>
            <div className="flex gap-1 mb-6">
              {renderStars(product.rating)}
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              High-quality product with excellent features and durability. 
              Perfect choice for your needs with great value for money.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Add to Cart
              </button>
              <button className="bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}