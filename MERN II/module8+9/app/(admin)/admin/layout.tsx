"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/app/component/themeToggle";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    // 🧹 Sabse Pehle Cookies Saaf: Har path se delete karna zaroori hai
    const paths = ["/", "/admin", "/auth", "/api"];
    paths.forEach(path => {
      document.cookie = `session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
      document.cookie = `role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
    });

    // 🧹 LocalStorage/SessionStorage Saaf (Taki state purani na rahe)
    sessionStorage.clear();
    // Note: LocalStorage.clear() nahi kar rahe taake Theme Toggle na tute

    // 🚀 Forceful Redirect: replace() use karne se back-button history khatam ho jati hai
    window.location.replace("/auth/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors">
      {/* Sidebar - Fixed for better UI */}
      <aside className="w-64 bg-slate-900 text-white p-8 flex flex-col fixed h-full shadow-2xl z-50">
        <h2 className="text-3xl font-bold text-blue-400 mb-12 italic tracking-tighter">Admin Panel</h2>
        
        <nav className="flex flex-col gap-6 flex-1">
          <Link href="/admin/dashboard" className="hover:text-blue-400 flex items-center gap-2 transition-all hover:translate-x-1">
            📊 Dashboard
          </Link>
          <Link href="/home" className="hover:text-blue-400 flex items-center gap-2 transition-all hover:translate-x-1">
            🛒 View Store
          </Link>
          
          <div className="mt-4 pt-4 border-t border-slate-800">
             <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-4">Appearance</span>
             <ThemeToggle />
          </div>
        </nav>

        {/* Powerful Logout Button */}
        <button 
          onClick={handleLogout} 
          className="mt-auto bg-red-600 py-3 rounded-xl font-bold hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Content Area - Added margin to prevent sidebar overlap */}
      <main className="flex-1 ml-64 p-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}