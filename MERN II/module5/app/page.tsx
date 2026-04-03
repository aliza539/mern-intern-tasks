'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900 flex flex-col"
      >
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-3xl text-center">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Welcome to <span className="text-blue-500 dark:text-blue-400">MERN Store</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Discover premium electronics and accessories with a seamless shopping experience
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-col sm:flex-row">
              <Link href="/products">
                <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
                  Shop Now
                </button>
              </Link>
              <Link href="/auth/login">
                <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
                  Sign In
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto px-4 pb-20"
        >
          {[
            { icon: "", title: "Fast Delivery", desc: "Quick and reliable shipping" },
            { icon: "", title: "Secure Payment", desc: "Safe transaction guarantee" },
            { icon: "", title: "Quality Products", desc: "Premium selection only" },
          ].map((feature, idx) => (
            <motion.div key={idx} variants={itemVariants} className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

    </>
  );
}
