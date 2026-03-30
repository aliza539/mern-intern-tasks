'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Our Store</h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Discover amazing products with the best prices. Shop now and get exclusive deals!
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
            Shop Now
          </Link>
          <Link href="/auth/register" className="bg-white hover:bg-gray-200 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
            Join Us
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">🚚 Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered quickly and safely to your doorstep.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">💳 Secure Payment</h3>
            <p className="text-gray-600">Shop with confidence using our secure payment methods.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">⭐ Best Quality</h3>
            <p className="text-gray-600">We guarantee the highest quality products for our customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}