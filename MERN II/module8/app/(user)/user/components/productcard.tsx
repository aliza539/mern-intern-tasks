"use client";

import { useState } from "react";
import { useCart } from "@/app/(user)/user/context/CartContext";
import { addToCartAction } from "@/app/(user)/user/actions/cartaction";
import { useRouter } from "next/navigation";
import { Product } from "@/app/(user)/user/types";

export default function ProductCard({ id, name, price, image, rating }: Product) {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart(); 
  const router = useRouter();

  const handleAdd = async () => {
    setLoading(true);
    
  
    const response = await addToCartAction(id, 1);
    
    if (!response.success) {
      if (response.error === "AUTH_REQUIRED") {
        alert("Please login first to add items to cart!");
        router.push("/auth/login"); // Redirecting to login
      } else {
        alert("Something went wrong: " + response.error);
      }
      setLoading(false);
      return;
    }

    addToCart(id, 1);
    alert(`${name} added to cart!`);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 w-60 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
      <div className="relative w-full h-40 mb-3">
        <img 
          src={image || "/placeholder.png"} 
          alt={name} 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>
      
      <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name}</h2>
      
      <div className="flex justify-between items-center mt-2">
        <p className="text-blue-600 dark:text-blue-400 font-bold">${price}</p>
        <p className="text-yellow-500 text-sm font-medium">⭐ {rating}</p>
      </div>
      
      <button
        onClick={handleAdd}
        disabled={loading}
        className={`w-full mt-4 py-2 rounded-lg font-semibold transition-colors ${
          loading 
            ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed" 
            : "bg-black dark:bg-white text-white dark:text-black hover:opacity-80"
        }`}
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}