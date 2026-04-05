/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { products } from "@/app/(user)/user/data/product"; 
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import ProductTable from "../components/ProductTable";
import LiveOrderFeed from "../components/LiveOrderFeed"; // ✅ Import kiya

export default function AdminDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-10 font-bold">Loading Analytics...</div>;

  const totalRevenue = products.reduce((acc, p) => acc + p.price * 10, 0);
  const totalOrders = 154;
  const totalUsers = 42;
  const totalStock = products.length;

  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-20">
      <header className="flex justify-between items-end border-b pb-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time store performance & inventory management</p>
        </div>
      </header>

      {/* Analytics Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-blue-600 text-white rounded-2xl shadow-lg transition-transform hover:scale-105">
          <p className="text-blue-100 text-xs font-bold uppercase">Total Revenue</p>
          <h2 className="text-3xl font-bold mt-1">${totalRevenue.toLocaleString()}</h2>
          <span className="text-xs text-blue-200">↑ 12% from last month</span>
        </div>
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase">Active Orders</p>
          <h2 className="text-3xl font-bold mt-1 text-slate-800">{totalOrders}</h2>
          <span className="text-xs text-green-500">Live feed active</span>
        </div>
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase">Total Users</p>
          <h2 className="text-3xl font-bold mt-1 text-slate-800">{totalUsers}</h2>
        </div>
        <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase">Total Stock</p>
          <h2 className="text-3xl font-bold mt-1 text-slate-800">{totalStock} Items</h2>
        </div>
      </div>

      {/* ✅ Layout Grid: Chart and Live Feed Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Revenue Trend Chart (Takes 2/3 space) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-slate-800">Revenue Performance Trend</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={products}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" hide />
                <YAxis tick={{fontSize: 12, fill: '#94a3b8'}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} 
                />
                <Area type="monotone" dataKey="price" stroke="#2563eb" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ⚡ Live Order Feed (Takes 1/3 space) */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          <LiveOrderFeed />
        </div>

      </div>

      {/* Inventory Table */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-6 text-slate-800">Inventory Management</h3>
        <ProductTable />
      </div>
    </div>
  );
}