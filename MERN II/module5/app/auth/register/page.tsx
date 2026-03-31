import RegisterForm from "@/components/forms/registerform";
<<<<<<< HEAD


=======
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
import Link from "next/link";

export default function RegisterPage() {
  return (
<<<<<<< HEAD
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
            Create Account
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Join MERN Store today
=======
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Join MERN Store today
        </p>

        <RegisterForm />

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              Sign in
            </Link>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
          </p>
        </div>
<<<<<<< HEAD
      </main>
    </>
=======
      </div>
    </main>
>>>>>>> ebe2d2ceff5ae86a9640e17135171a770c4318ed
  );
}