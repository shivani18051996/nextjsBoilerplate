import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const _isLogin = request.cookies.get("Allow");
  const token = _isLogin ? _isLogin.value : false;
  const publicRoute = ["/", "/login", "/signup"];

  console.log("Hello World");

  if (token) {
    if (publicRoute.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.next();
    }
  } else {
    if (publicRoute.includes(request.nextUrl.pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|svg).*)"],
};
