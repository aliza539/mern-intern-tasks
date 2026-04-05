"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      await fetch("/api/logout", { method: "POST" });
      // Clear any local storage if used (Wishlist remains as it's persist)
      router.push("/auth/login");
      router.refresh();
    };
    handleLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-lg font-medium text-slate-600">Logging you out safely...</p>
      </div>
    </div>
  );
}