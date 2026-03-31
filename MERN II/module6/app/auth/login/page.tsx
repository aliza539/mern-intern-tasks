"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const login = () => {
    document.cookie = "session=true";
    router.push("/cart");
  };

  return (
    <button onClick={login} className="bg-black text-white p-2">
      Login
    </button>
  );
}