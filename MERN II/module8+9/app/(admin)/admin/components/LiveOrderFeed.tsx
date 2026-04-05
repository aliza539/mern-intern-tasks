"use client";
import { useSocket } from "@/app/hooks/useSocket";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveOrderFeed() {
  const orders = useSocket();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Live Order Feed
      </h3>
      <div className="relative min-h-[200px]">
        <AnimatePresence initial={false}>
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm mb-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">Order #{order.id}</p>
                  <p className="text-xs text-slate-500">{order.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-bold">${order.amount}</p>
                  <p className="text-[10px] uppercase text-slate-400">Pending</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {orders.length === 0 && (
          <p className="text-sm text-slate-400 italic">Waiting for new orders...</p>
        )}
      </div>
    </div>
  );
}