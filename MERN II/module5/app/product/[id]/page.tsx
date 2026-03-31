'use client';

import { useState } from "react";
import { products } from "@/data/product";
import { Product } from "@/types/Product";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === parseInt(params.id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-400">Product not found</p>
      </div>
    );
  }

  const images = product.images || [product.image];

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center py-12 px-4"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-square bg-gray-200 dark:bg-slate-800 rounded-xl overflow-hidden"
            >
              <Image
                src={images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

          {/* Thumbnail Images */}
          <div className="flex gap-3 overflow-x-auto">
            {images.map((image: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                  selectedImageIndex === idx
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <Link
              href="/products"
              className="text-blue-500 hover:underline text-sm mb-2 inline-block"
            >
              ← Back to Products
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-yellow-500 text-xl">
                ⭐ {product.rating}
              </span>
            </div>
          </div>

          {product.category && (
            <p className="text-sm text-gray-600">
              Category: <span className="font-semibold">{product.category}</span>
            </p>
          )}

          {product.description && (
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Features */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Premium Quality</li>
              <li>✓ Free Shipping</li>
              <li>✓ 1 Year Warranty</li>
              <li>✓ 30-Day Return Policy</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-col sm:flex-row">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
        </div>
      </motion.main>
    </>
  );
}
