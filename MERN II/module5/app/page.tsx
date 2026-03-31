"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CartDrawer from "@/components/ui/carddrawer";
import ThemeToggle from "@/components/ui/themeToggle";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Discover premium electronics and accessories with beautiful animations,
              professional design, and seamless shopping experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-col sm:flex-row"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-500 dark:bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto"
                >
                  Sign In
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.section
          variants={containerVariants}
          className="bg-white dark:bg-slate-900 py-16 px-4"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            >
              Why Choose Us?
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "🚀",
                  title: "Fast Delivery",
                  desc: "Quick and reliable shipping to your doorstep",
                },
                {
                  icon: "💳",
                  title: "Secure Payment",
                  desc: "Multiple payment options with encryption",
                },
                {
                  icon: "✨",
                  title: "Quality Products",
                  desc: "Curated selection of premium items",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Theme Toggle */}
        <div className="fixed top-24 right-6 z-30">
          <ThemeToggle />
        </div>

        {/* Cart Drawer */}
        <CartDrawer />
      </motion.main>
    </>
  );
}
