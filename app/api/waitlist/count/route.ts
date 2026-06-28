export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Waitlist count API error:', error)
      return NextResponse.json({ count: 128 }, { status: 500 })
    }

    return NextResponse.json({ count: count || 128 })
  } catch (error) {
    console.error('Waitlist count API error:', error)
    return NextResponse.json({ count: 128 }, { status: 500 })
  }
}
