/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/app/component/themeToggle";

export default function Navbar() {
  const router = useRouter();
  // State ko batana paray ga ke ye string ho sakti hai ya null
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Cookie nikalne ka sabse asan aur error-free tareeka
    const cookies = document.cookie.split("; ");
    const roleCookie = cookies.find((row) => row.startsWith("role="));
    
    if (roleCookie) {
      const roleValue = roleCookie.split("=")[1];
      setRole(roleValue); 
    }
  }, []);

  const handleLogout = () => {
    // 1. Cookies delete karein
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // 2. State khali karein taake button foran gayab ho jaye
    setRole(null);
    
    // 3. Welcome page par bhej dein
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <Link href="/" className="text-2xl font-bold text-blue-400 italic tracking-tight">
        Store.
      </Link>
      
      <div className="flex gap-8 items-center font-medium">
        <Link href="../home" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link href="./products" className="hover:text-blue-400 transition-colors">Products</Link>
        <Link href="./cart" className="hover:text-blue-400 transition-colors">Cart</Link>

   
        {role === "admin" && (
         
          <Link 
            href="/admin/dashboard" 
            className="bg-amber-500 text-white px-4 py-1.5 rounded font-bold hover:bg-amber-600 transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)]"
          >
            Dashboard ⚙️
          </Link>
        )}

        <button 
          onClick={handleLogout} 
          className="bg-red-600/10 text-red-400 px-4 py-1.5 rounded border border-red-500/50 hover:bg-red-600 hover:text-white transition-all active:scale-95"
        >
          Logout
        </button>
        
        <div className="border-l border-slate-700 pl-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}