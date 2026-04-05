/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/schemas/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit = async (values: any) => {
    setServerError("");
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.ok) {
      router.push(data.redirectTo);
      router.refresh();
    } else {
      setServerError(data.error || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {serverError && <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{serverError}</p>}
        
        <div>
          <label className="text-sm font-medium">Email</label>
          <input {...register("email")} className="w-full p-2 border rounded-md text-black" placeholder="email@test.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input type="password" {...register("password")} className="w-full p-2 border rounded-md text-black" />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-2 rounded-lg font-bold">
          {isSubmitting ? "Wait..." : "Login"}
        </button>
      </form>
    </div>
  );
}