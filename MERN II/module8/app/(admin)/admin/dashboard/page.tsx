"use client";
import { useEffect, useState } from "react";
import { products } from "@/app/(user)/user/data/product"; // User data use kar rahe
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true);
  }, []); // Simple mount check

  if (!mounted) return <div className="p-10 font-bold">Loading Charts...</div>;


  const totalValue = products.reduce((acc, p) => acc + p.price, 0);
  const avgRating = (products.reduce((acc, p) => acc + p.rating, 0) / products.length).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header className="border-b pb-4">
        <h1 className="text-4xl font-bold font-playfair text-slate-800">Operational Insights</h1>
        <p className="text-gray-500">Live analytics and product performance charts</p>
      </header>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
          <p className="text-blue-100 uppercase text-xs font-bold tracking-widest">Inventory Value</p>
          <h2 className="text-4xl font-bold mt-2">${totalValue.toLocaleString()}</h2>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-md border">
          <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Stock Count</p>
          <h2 className="text-4xl font-bold mt-2 text-slate-800">{products.length} Products</h2>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-md border">
          <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Store Rating</p>
          <h2 className="text-4xl font-bold mt-2 text-yellow-500">⭐ {avgRating}</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold mb-8 text-slate-800">Price Distribution Chart</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={products}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{fontSize: 12, fill: '#666'}} />
              <YAxis tick={{fontSize: 12, fill: '#666'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} 
              />
              <Bar dataKey="price" fill="#2563eb" radius={[8, 8, 0, 0]} barSize={45} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}