'use client';

import Link from "next/link";
<<<<<<< HEAD
import CartDrawer from "@/components/ui/carddrawer";
import ThemeToggle from "@/components/ui/themeToggle";
=======
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to MERN Store
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Discover premium electronics and accessories with a seamless shopping experience
        </p>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed

        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link href="/products">
            <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
              Shop Now
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Sign In
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { icon: "🚀", title: "Fast Delivery", desc: "Quick and reliable shipping" },
            { icon: "💳", title: "Secure Payment", desc: "Safe transaction guarantee" },
            { icon: "✨", title: "Quality Products", desc: "Premium selection only" },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
<<<<<<< HEAD

        {/* Cart Drawer */}
        <CartDrawer />
      </motion.main>
    </>
=======
      </div>
    </div>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
  );
}
