"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Get session from cookies
    const cookies = document.cookie.split("; ");
    const sessionCookie = cookies.find((c) => c.startsWith("session="));

    if (sessionCookie) {
      const email = sessionCookie.split("=")[1];
      setUserEmail(email);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setUserEmail("");
        router.push("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex gap-8 shadow-lg items-center justify-between">
      <div className="flex gap-8">
        <Link
          href="/"
          className="hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Products
        </Link>
        <Link
          href="/cart"
          className="hover:text-blue-400 transition-colors duration-300 font-medium"
        >
          Cart
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <span className="text-sm text-gray-300">Welcome, {userEmail}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 transition-colors duration-300 px-4 py-2 rounded font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-green-600 hover:bg-green-700 transition-colors duration-300 px-4 py-2 rounded font-medium"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}