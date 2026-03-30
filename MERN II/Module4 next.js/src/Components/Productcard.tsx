'use client'

import { useState } from "react";

type Props = {
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ name, price, image, rating }: Props) {
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-4 w-56 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <img 
        src={image || "/placeholder.png"} 
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-blue-600 font-semibold mb-1">Price: ${price}</p>
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