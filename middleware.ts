import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { validateSessionToken, validateSuccessToken } from '@/lib/dashboard-auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Protect Success Page
  if (pathname === '/success') {
    const successToken = request.cookies.get('naavik_success_token')?.value
    if (!successToken) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    
    // Validate the token (checks signature and 5m expiration)
    const isValid = await validateSuccessToken(successToken)
    if (!isValid) {
      // Clear invalid cookie and redirect
      const response = NextResponse.redirect(new URL('/', request.url))
      response.cookies.delete('naavik_success_token')
      return response
    }
    
    return NextResponse.next()
  }

  // 2. Protect Dashboard Routes (except login)
  if (pathname.startsWith('/dashboard')) {
    if (pathname === '/dashboard/login') {
      // Allow access to login, but if already logged in, redirect to dashboard
      const token = request.cookies.get('naavik_dashboard_token')?.value
      if (token && await validateSessionToken(token)) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
      return NextResponse.next()
    }

    // Require auth for /dashboard and any subpages
    const dashboardToken = request.cookies.get('naavik_dashboard_token')?.value
    if (!dashboardToken) {
      return NextResponse.redirect(new URL('/dashboard/login', request.url))
    }

    const isValid = await validateSessionToken(dashboardToken)
    if (!isValid) {
      const response = NextResponse.redirect(new URL('/dashboard/login', request.url))
      response.cookies.delete('naavik_dashboard_token')
      return response
    }

    return NextResponse.next()
  }

  // 3. Protect API Routes (Dashboard APIs)
  if (pathname.startsWith('/api/dashboard') && !pathname.startsWith('/api/dashboard/auth')) {
    const dashboardToken = request.cookies.get('naavik_dashboard_token')?.value
    if (!dashboardToken || !(await validateSessionToken(dashboardToken))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.next()
  }

  // 4. Explicitly block /admin, /api/users, /api/export, and /api
  const blockedPaths = ['/admin', '/api/users', '/api/export']
  if (blockedPaths.some(p => pathname.startsWith(p)) || pathname === '/api') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/success',
    '/dashboard/:path*',
    '/api/dashboard/:path*',
    // Future protected routes can be added here
    '/admin/:path*',
    '/api/users/:path*',
    '/api/export/:path*',
    '/api',
    '/export/:path*',
    '/settings/:path*',
  ],
}
