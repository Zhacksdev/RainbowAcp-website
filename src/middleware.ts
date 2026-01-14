import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Daftar domain yang diizinkan untuk redirect
const ALLOWED_DOMAINS = [
  'rainbowacp.com',
  'www.rainbowacp.com',
  'localhost',
];

// Fungsi untuk validasi URL redirect
function isValidRedirectUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();
    
    // Izinkan relative URLs (yang dimulai dengan /)
    if (url.startsWith('/') && !url.startsWith('//')) {
      return true;
    }
    
    // Cek apakah domain ada di daftar yang diizinkan
    return ALLOWED_DOMAINS.some(domain => 
      hostname === domain.toLowerCase() || 
      hostname.endsWith(`.${domain.toLowerCase()}`)
    );
  } catch {
    // Jika parsing gagal, izinkan hanya jika relative URL
    return url.startsWith('/') && !url.startsWith('//');
  }
}

export function middleware(request: NextRequest) {
  const { search } = request.nextUrl;
  const requestHost = request.headers.get('host') || '';
  
  // Validasi host - pastikan request berasal dari domain yang benar
  const allowedHost = ALLOWED_DOMAINS.some(domain => 
    requestHost.toLowerCase() === domain.toLowerCase() ||
    requestHost.toLowerCase().endsWith(`.${domain.toLowerCase()}`)
  );
  
  if (!allowedHost && !requestHost.includes('localhost')) {
    console.warn('Suspicious host detected:', requestHost);
    // Redirect ke domain yang benar
    return NextResponse.redirect(new URL('https://rainbowacp.com', request.url));
  }
  
  // Cek parameter URL yang mencurigakan untuk redirect attack
  const suspiciousParams = ['redirect', 'return', 'url', 'next', 'destination', 'redir', 'goto'];
  const urlParams = new URLSearchParams(search);
  
  for (const param of suspiciousParams) {
    const redirectValue = urlParams.get(param);
    if (redirectValue && !isValidRedirectUrl(redirectValue)) {
      console.warn('Blocked suspicious redirect attempt:', redirectValue);
      // Block redirect berbahaya dan arahkan ke homepage
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  // Clone response
  const response = NextResponse.next();
  
  // Tambahkan security headers tambahan
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  
  // Content Security Policy yang ketat
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https: blob:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com;
    frame-src 'self' https://www.google.com https://maps.google.com;
    frame-ancestors 'self';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  return response;
}

// Konfigurasi matcher - terapkan middleware ke semua routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
