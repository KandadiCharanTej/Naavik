import { NextRequest, NextResponse } from 'next/server'
import { validatePassword, generateSessionToken } from '@/lib/dashboard-auth'
import { cookies } from 'next/headers'

// ─── Login Rate Limiter ──────────────────────────────────
const loginRateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 10 // Max 10 attempts per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

function isLoginRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = loginRateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    loginRateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (isLoginRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again in an hour.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { password } = body as { password?: string }

    if (!password || !validatePassword(password)) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 },
      )
    }

    // Generate JWT token upon successful auth
    const token = await generateSessionToken()

    // Set HttpOnly cookie
    const cookieStore = await cookies()
    cookieStore.set('naavik_dashboard_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 },
    )
  }
}
