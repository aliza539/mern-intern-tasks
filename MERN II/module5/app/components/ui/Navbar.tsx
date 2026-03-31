'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Store</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-blue-400 transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-400 transition-colors duration-300 font-medium">
            Products
          </Link>
          <Link href="/cart" className="hover:text-blue-400 transition-colors duration-300 font-medium">
            Cart
          </Link>
          <Link href="/auth/login" className="hover:text-blue-400 transition-colors duration-300 font-medium">
            Login
          </Link>
          <Link href="/auth/register" className="hover:text-blue-400 transition-colors duration-300 font-medium">
            Register
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
          <Link href="/" onClick={closeMenu} className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2">
            Home
          </Link>
          <Link href="/products" onClick={closeMenu} className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2">
            Products
          </Link>
          <Link href="/cart" onClick={closeMenu} className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2">
            Cart
          </Link>
          <Link href="/auth/login" onClick={closeMenu} className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2">
            Login
          </Link>
          <Link href="/auth/register" onClick={closeMenu} className="hover:text-blue-400 transition-colors duration-300 font-medium px-3 py-2">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}