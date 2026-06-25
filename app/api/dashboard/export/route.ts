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
    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('waitlist')
      .select('position, name, email, college, created_at')
      .order('position', { ascending: true })

    if (error) {
      console.error('Dashboard export error:', error)
      return NextResponse.json(
        { error: 'Failed to export' },
        { status: 500 },
      )
    }

    // Build CSV
    const headers = ['Position', 'Name', 'Email', 'College', 'Joined']
    const rows = (data ?? []).map((row) => [
      row.position,
      `"${(row.name || '').replace(/"/g, '""')}"`,
      row.email,
      `"${(row.college || '').replace(/"/g, '""')}"`,
      new Date(row.created_at).toISOString().split('T')[0],
    ])

    const csv = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="naviko-waitlist-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error('Dashboard export error:', error)
    return NextResponse.json(
      { error: 'Failed to export' },
      { status: 500 },
    )
  }
}
