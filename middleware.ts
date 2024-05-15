import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ['/profile']
const authRoutes = ['/login', '/signup', '/']

export default function middleware(request: NextRequest) {

  const currentUser = request.cookies.get("currentUser")?.value;

  console.log(currentUser);
  console.log( Date.now());

  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    (!currentUser || Date.now() > JSON.parse(currentUser).expiredAt)
  ) {
    request.cookies.delete("currentUser");
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("currentUser");

    return response;
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }