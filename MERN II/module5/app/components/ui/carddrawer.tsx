"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  interface CartItem {
    id: number;
    name: string;
    price: number;
  }
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 dark:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 font-semibold flex items-center gap-2"
      >
        🛒 Cart ({cartItems.length})
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white dark:bg-slate-900 shadow-2xl p-6 flex flex-col z-50"
            >
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-slate-700 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Shopping Cart
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto mb-6">
                {cartItems.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      Your cart is empty
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-100 dark:bg-slate-800 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            ${item.price}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setCartItems(cartItems.filter((i) => i.id !== item.id))
                          }
                          className="text-red-500 hover:text-red-700 font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 dark:bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
              >
                Checkout
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}