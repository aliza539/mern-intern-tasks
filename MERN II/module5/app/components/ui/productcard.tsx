'use client'

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ id, name, price, image, rating }: Props) {
  const [added, setAdded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-slate-900 rounded-2xl p-4 w-56 shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/product/${id}`}>
        <div className="relative w-full h-40 mb-3 cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={image || "https://via.placeholder.com/224x160"}
            alt={name}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      <Link href={`/product/${id}`} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{name}</h2>
      </Link>

      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
        Price: ${price.toFixed(2)}
      </p>
      <p className="text-yellow-500 dark:text-yellow-400 font-semibold mb-4">
        Rating: {rating} ⭐
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setAdded(!added)}
        className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
          added
            ? "bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700"
            : "bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
        }`}
      >
        {added ? "✓ Added" : "Add to Cart"}
      </motion.button>
    </motion.div>
  );
}