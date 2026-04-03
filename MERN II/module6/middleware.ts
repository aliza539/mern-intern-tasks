import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  const pathname = request.nextUrl.pathname;

  // Allow access to auth pages without session
  if (pathname.startsWith("/auth")) {
    return NextResponse.next();
  }

  // Allow access to home and products pages without session
  if (pathname === "/" || pathname.startsWith("/products")) {
    return NextResponse.next();
  }

  // Require session for cart page
  if (pathname.startsWith("/cart")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};