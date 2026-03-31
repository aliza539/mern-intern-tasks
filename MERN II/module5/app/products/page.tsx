'use client';

import ProductList from "@/components/ui/productlist";
import { products } from "@/data/product";
<<<<<<< HEAD
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gray-50 dark:bg-slate-950"
      >
        <div className="max-w-7xl mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Our Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            Explore our wide selection of premium electronics and accessories
          </p>
          <ProductList products={products} />
        </div>
      </motion.main>
    </>
=======

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Our Products
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Explore our wide selection of premium electronics and accessories
        </p>
        <ProductList products={products} />
      </div>
    </main>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
  );
}
