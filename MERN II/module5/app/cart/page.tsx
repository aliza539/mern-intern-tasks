<<<<<<< HEAD
"use client";
import { motion } from "framer-motion";

export default function CartPage() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-slate-950"
      >
        <div className="max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Shopping Cart
          </h1>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Your cart is empty. Start shopping!
            </p>
          </div>
        </div>
      </motion.main>
    </>
=======
'use client';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Shopping Cart
        </h1>
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">
            Your cart is empty. Start shopping!
          </p>
        </div>
      </div>
    </main>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
  );
}
