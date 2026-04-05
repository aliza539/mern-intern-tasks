"use client";

import { useCart } from "@/app/context/CartContext";

export default function AddButton({ id }: { id: number }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(id, 1);
    alert("Added to cart!");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white px-3 py-1 hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}