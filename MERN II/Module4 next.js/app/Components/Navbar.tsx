import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex gap-8 shadow-lg">
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
    </nav>
  );
}