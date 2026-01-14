import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Domain yang boleh dipakai untuk redirect param
const ALLOWED_DOMAINS = [
  'rainbowacp.com',
  'www.rainbowacp.com',
  'localhost',
]

// Validasi redirect URL (anti open redirect)
function isValidRedirectUrl(url: string): boolean {
  try {
    // relative path aman
    if (url.startsWith('/') && !url.startsWith('//')) return true

    const parsed = new URL(url)
    const hostname = parsed.hostname.toLowerCase()

    return ALLOWED_DOMAINS.some(domain =>
      hostname === domain || hostname.endsWith(`.${domain}`)
    )
  } catch {
    return false
  }
}

export function middleware(request: NextRequest) {
  const { search } = request.nextUrl
  const params = new URLSearchParams(search)

  // 🔒 Block open redirect attack
  const suspiciousParams = [
    'redirect',
    'return',
    'url',
    'next',
    'destination',
    'redir',
    'goto',
  ]

  for (const key of suspiciousParams) {
    const value = params.get(key)
    if (value && !isValidRedirectUrl(value)) {
      console.warn('[middleware] blocked redirect:', value)
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  const response = NextResponse.next()

  // 🛡️ Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  // Content Security Policy
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com;
    frame-ancestors 'self';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico).*)',
  ],
};