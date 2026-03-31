export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-gray-900 dark:text-white px-6 py-8 mt-20 text-center border-t border-gray-200 dark:border-slate-800">
      <p className="mb-4 font-semibold">© 2026 MERN Store. All rights reserved.</p>
      <div className="flex justify-center gap-6 flex-wrap mb-4">
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:underline transition-colors text-sm"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:underline transition-colors text-sm"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-blue-500 dark:text-blue-400 hover:underline transition-colors text-sm"
        >
          Privacy Policy
        </a>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-xs border-t border-gray-200 dark:border-slate-800 pt-4">
        Made with ❤️ using Next.js, Tailwind, and Framer Motion
      </p>
    </footer>
  );
}
