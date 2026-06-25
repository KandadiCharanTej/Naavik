import { NextRequest, NextResponse } from 'next/server'
import { validateSessionToken } from '@/lib/dashboard-auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  // Auth check
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token || !validateSessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const url = new URL(request.url)
    const search = url.searchParams.get('search') || ''
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const limit = Math.min(
      parseInt(url.searchParams.get('limit') || '50', 10),
      100,
    )
    const offset = (page - 1) * limit

    const supabase = getSupabaseAdmin()

    let query = supabase
      .from('waitlist')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    // Search across name, email, and college
    if (search) {
      query = query.or(
        `name.ilike.%${search}%,email.ilike.%${search}%,college.ilike.%${search}%`,
      )
    }

    const { data, count, error } = await query

    if (error) {
      console.error('Dashboard users error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch users' },
        { status: 500 },
      )
    }

    return NextResponse.json({
      users: data ?? [],
      total: count ?? 0,
      page,
      limit,
    })
  } catch (error) {
    console.error('Dashboard users error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 },
    )
  }
}
