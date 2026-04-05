'use client'

import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { addToCartAction } from "@/lib/actions/cartActions"; // Server Action

type Props = {
  id: number; // ID lazmi hai
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ id, name, price, image, rating }: Props) {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart(); 

  const handleAdd = async () => {
    setLoading(true);
    
    await addToCartAction(id, 1);
    
    addToCart(id, 1);
    setLoading(false);
    alert("Added to Cart!");
  };

  return (
    <div className="bg-white rounded-2xl p-4 w-56 shadow-md hover:shadow-xl transition-all">
      <img src={image || "/placeholder.png"} alt={name} className="w-full h-40 object-cover rounded-lg mb-3" />
      <h2 className="text-lg font-bold text-gray-900">{name}</h2>
      <p className="text-blue-600 font-semibold">${price}</p>
       <p className="text-blue-600 font-semibold">${rating}</p>
      
      <button
        onClick={handleAdd}
        disabled={loading}
        className={`w-full mt-4 py-2 rounded-lg font-semibold transition ${
          loading ? "bg-gray-400" : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}