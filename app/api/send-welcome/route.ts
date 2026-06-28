import { NextRequest, NextResponse } from 'next/server'
import { sendWelcomeEmail } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    if (!email || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Await the email here to guarantee Vercel doesn't kill the TCP socket early
    await sendWelcomeEmail(email, name)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send welcome email API:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
