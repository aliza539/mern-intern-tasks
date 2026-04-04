import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value;
  // Agar cookie exist karti hai par empty string hai toh usay null samjhein
  const sessionEmail = sessionCookie && sessionCookie !== "" ? decodeURIComponent(sessionCookie) : null;
  
  const roleCookie = request.cookies.get("role")?.value;
  const isActuallyAdmin = sessionEmail?.toLowerCase() === "admin@store.com" || roleCookie === "admin";

  const { pathname } = request.nextUrl;

  // 1. Agar banda LOGIN hai aur Login/Register page pe jaye -> Bhej do dashboard/products pe
  if (sessionEmail && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register"))) {
    const url = isActuallyAdmin ? "/admin/dashboard" : "/products";
    return NextResponse.redirect(new URL(url, request.url));
  }

  // 2. Agar banda login NAHI hai (ya session empty hai) aur Private pages khol raha hai
  if (!sessionEmail) {
    const privatePaths = ["/cart", "/admin", "/products", "/home"];
    if (privatePaths.some(path => pathname.startsWith(path))) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // 3. Admin protection: Sirf admin hi /admin paths access kar sake
  if (pathname.startsWith("/admin") && !isActuallyAdmin) {
    return NextResponse.redirect(new URL("/products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Sabhi private routes ko matcher mein shamil karein
  matcher: ["/cart/:path*", "/admin/:path*", "/auth/:path*", "/products/:path*", "/home/:path*"],
};