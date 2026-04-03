
"use client";
import { motion } from "framer-motion";

export default function CartPage() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900"
      >
        <div className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Shopping Cart
          </h1>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Your cart is empty. Start shopping!
            </p>
          </div>
        </div>
      </motion.main>
    </>
  );
}
