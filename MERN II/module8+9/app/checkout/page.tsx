"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePlaceOrder = async () => {
    setLoading(true);
    // Admin dashboard ki live feed ko trigger karne ke liye API call
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({ items: [], total: 0 }),
    });

    alert("Order Successful! Admin has been notified.");
    router.push("/user/home");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full border p-10 rounded-3xl shadow-xl text-center space-y-6">
        <h1 className="text-3xl font-bold">Secure Checkout</h1>
        <p className="text-slate-500">Review your items and confirm payment.</p>
        <div className="bg-slate-50 p-4 rounded-xl text-left border border-dashed">
          <p className="flex justify-between font-bold"><span>Total Amount:</span> <span>Calculating...</span></p>
        </div>
        <button 
          onClick={handlePlaceOrder}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 disabled:bg-slate-400 transition-all"
        >
          {loading ? "Processing..." : "Place Order Now"}
        </button>
      </div>
    </div>
  );
}