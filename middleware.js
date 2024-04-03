import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Hello");
  const cookieStore = cookies();
  const cookie = cookieStore.get("qcentrio-access");
  console.log(request.nextUrl.pathname);
  if (!request.nextUrl.pathname.startsWith("/coming-soon/admin-access")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/coming-soon", request.url));
    }
  }
}

export const config = {
  matcher: [
    "/((?!coming-soon|website-access|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
