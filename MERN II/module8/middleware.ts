import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session");
  const sessionEmail = sessionCookie?.value ? decodeURIComponent(sessionCookie.value) : null;
  
  // 🕵️‍♂️ ROLE DETECTION (Agar cookie nahi bhi hai, toh email se pehchano)
  const roleCookie = request.cookies.get("role")?.value;
  const isActuallyAdmin = sessionEmail?.toLowerCase() === "admin@store.com" || roleCookie === "admin";

  const { pathname } = request.nextUrl;

  // 1. Agar banda LOGIN hai aur ghalti se Login/Register page pe jaye
  if (sessionEmail && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/register"))) {
    const url = isActuallyAdmin ? "/admin/dashboard" : "/products";
    return NextResponse.redirect(new URL(url, request.url));
  }

  // 2. Agar banda login NAHI hai aur Private pages khol raha hai
  if (!sessionEmail) {
    if (pathname.startsWith("/cart") || pathname.startsWith("/admin") || pathname.startsWith("/products")) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // 3. Admin protection (Zabardasti redirect agar admin nahi hai)
  if (pathname.startsWith("/admin") && !isActuallyAdmin) {
    // Agar normal user admin panel kholne ki koshish kare, usay products pe phenk do
    return NextResponse.redirect(new URL("/products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Products ko bhi matcher mein daal dein taake guest user na dekh sakay (optional)
  matcher: ["/cart/:path*", "/admin/:path*", "/auth/:path*", "/products/:path*"],
};