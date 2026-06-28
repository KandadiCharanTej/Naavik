import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/resend'
import { cookies } from 'next/headers'
import { generateSuccessToken } from '@/lib/dashboard-auth'

// ─── In-memory rate limiter ───────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// ─── Validation helpers ───────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str: string): string {
  return str.trim().slice(0, 200)
}

// ─── POST /api/waitlist ───────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const body = await request.json()
    const { name, email, college, website } = body as {
      name?: string
      email?: string
      college?: string
      website?: string // honeypot
    }

    // Honeypot check — bots fill this hidden field
    if (website) {
      // Silently accept to avoid revealing the trap
      return NextResponse.json({ success: true, position: 0 })
    }

    // Validate required fields
    if (!name || !email || !college) {
      return NextResponse.json(
        { error: 'Please fill in all fields.' },
        { status: 400 },
      )
    }

    const cleanName = sanitize(name)
    const cleanEmail = email.trim().toLowerCase()
    const cleanCollege = sanitize(college)

    if (cleanName.length < 2) {
      return NextResponse.json(
        { error: 'Please enter your full name.' },
        { status: 400 },
      )
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    if (cleanCollege.length < 3) {
      return NextResponse.json(
        { error: 'Please enter your college name.' },
        { status: 400 },
      )
    }

    const supabase = getSupabaseAdmin()

    // Check for duplicate email
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', cleanEmail)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 409 },
      )
    }

    // Get current count for position
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    const position = (count ?? 0) + 1

    // Insert into waitlist
    const { error: insertError } = await supabase.from('waitlist').insert({
      full_name: cleanName,
      email: cleanEmail,
      college: cleanCollege,
      created_at: new Date().toISOString(),
    })

    if (insertError) {
      // Handle unique constraint violation (race condition)
      if (insertError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist!' },
          { status: 409 },
        )
      }
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 },
      )
    }

    // Send welcome email after successful database insert
    try {
      await sendWelcomeEmail(cleanEmail, cleanName)
    } catch (err) {
      console.error('Failed to send welcome email:', err)
    }

    const token = await generateSuccessToken()
    const cookieStore = await cookies()
    cookieStore.set('naavik_success_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 5, // 5 minutes
      path: '/',
    })

    return NextResponse.json({ success: true, position })
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
