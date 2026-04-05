/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/schemas/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(RegisterSchema)
  });

  const onSubmit = async (values: any) => {
    setServerError("");
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Registration Successful!");
      router.push(data.redirectTo || "/auth/login");
    } else {
      setServerError(data.error || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">Create Account</h2>
        
        {serverError && <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{serverError}</p>}

        <div>
          <label className="text-sm font-medium dark:text-gray-200">Email</label>
          <input {...register("email")} className="w-full p-2 border rounded-md text-black" placeholder="name@example.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium dark:text-gray-200">Password</label>
          <input type="password" {...register("password")} className="w-full p-2 border rounded-md text-black" />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium dark:text-gray-200">Confirm Password</label>
          <input type="password" {...register("confirmPassword")} className="w-full p-2 border rounded-md text-black" />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message as string}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-all">
          {isSubmitting ? "Creating Account..." : "Register Now"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <Link href="/auth/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
}