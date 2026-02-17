import { NextRequest, NextResponse } from "next/server";

const locales = [
  "en",
  "hi", "bn", "ta", "te", "mr", "gu", "kn", "ml", "pa", "ur",
  "es", "fr", "de", "pt", "it", "nl", "pl", "sv", "ro", "uk",
  "ja", "zh", "ko",
  "vi", "th", "id", "ms",
  "ar", "tr",
  "ru",
];

const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return;
  }

  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
  if (hasLocale) return;

  const cookie = request.cookies.get("locale")?.value;
  const accept = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.split("-")[0];
  const locale =
    cookie || (locales.includes(accept || "") ? accept : defaultLocale);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
