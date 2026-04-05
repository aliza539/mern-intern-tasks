import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value;
  const roleCookie = request.cookies.get("role")?.value;

  // 🛑 Strong Check: Agar cookie sirf empty string hai ya "null" string hai toh usay null treat karo
  const sessionEmail = sessionCookie && sessionCookie !== "" && sessionCookie !== "null" 
    ? decodeURIComponent(sessionCookie) 
    : null;

  const userRole = roleCookie && roleCookie !== "" ? roleCookie : null;
  
  // Admin Check: Email se ya Role cookie se
  const isActuallyAdmin = (sessionEmail?.toLowerCase() === "admin@store.com") || (userRole === "admin");

  const { pathname } = request.nextUrl;

  // ✅ 1. Logged In Users Protection:
  // Agar banda login hai aur Login/Register page kholne ki koshish kare
  if (sessionEmail && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register"))) {
    const destination = isActuallyAdmin ? "/admin/dashboard" : "/products";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  // 🔒 2. Auth Protection:
  // Agar banda login NAHI hai aur Private pages access kare
  const privatePaths = ["/cart", "/admin", "/products", "/home"];
  const isPrivate = privatePaths.some(path => pathname.startsWith(path));

  if (!sessionEmail && isPrivate) {
    // Agar banda login nahi hai, toh usey sirf /auth pages access karne do
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 👮 3. Admin-Only Protection:
  // Agar /admin path hai aur user admin nahi hai
  if (pathname.startsWith("/admin") && !isActuallyAdmin) {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Static files aur images ko chorr kar baaki sab par apply karein
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};