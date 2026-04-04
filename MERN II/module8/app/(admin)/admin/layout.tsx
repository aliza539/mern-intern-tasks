"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/app/component/themeToggle";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-8 flex flex-col fixed h-full shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-400 mb-12 italic">Admin Panel</h2>
        <nav className="flex flex-col gap-6 flex-1">
          <Link href="/admin/dashboard" className="hover:text-blue-400 flex items-center gap-2">📊 Dashboard</Link>
          <Link href="/user/products" className="hover:text-blue-400 flex items-center gap-2">🛒 View Store</Link>
          <span className="text-sm text-gray-400">Theme</span>
            <ThemeToggle />
        </nav>
        <button onClick={handleLogout} className="mt-auto bg-red-600 py-3 rounded-xl font-bold hover:bg-red-700 transition">
          🚪 Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-10">
        {children}
      </main>
       
    </div>
  );
}