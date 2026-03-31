'use client'

import { useState } from "react";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ id, name, price, image, rating }: Props) {
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-4 w-56 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link href={`/product/${id}`}>
        <img 
          src={image || "/placeholder.png"} 
          alt={name}
          className="w-full h-40 object-cover rounded-lg mb-3 cursor-pointer hover:opacity-90 transition-opacity"
        />
      </Link>

      <Link href={`/product/${id}`} className="hover:text-blue-500 transition-colors">
        <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
      </Link>

      <p className="text-blue-600 font-semibold mb-1">Price: ${price.toFixed(2)}</p>
      <p className="text-yellow-500 font-semibold mb-4">Rating: {rating} ⭐</p>

      <button
        onClick={() => setAdded(!added)}
        className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
          added 
            ? "bg-green-500 hover:bg-green-600 text-white" 
            : "bg-blue-300 hover:bg-blue-400 text-gray-900"
        }`}
      >
        {added ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
}