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

    // Total count
    const { count: totalCount } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    // College-wise counts using SQL RPC
    const { data: statsData } = await supabase.rpc('get_waitlist_stats')
    const collegeCounts: Record<string, number> = {}
    statsData?.forEach((row: { college: string; count: number }) => {
      collegeCounts[row.college || 'Unknown'] = Number(row.count || 0)
    })

    // Daily signups (last 30 days) using SQL RPC
    const { data: dailyData } = await supabase.rpc('get_daily_signups_last_30_days')
    const dailySignups: Record<string, number> = {}
    dailyData?.forEach((row: { day: string; count: number }) => {
      if (row.day) {
        dailySignups[row.day] = Number(row.count || 0)
      }
    })

    return NextResponse.json({
      totalCount: totalCount ?? 0,
      collegeCounts,
      dailySignups,
    })
  } catch (error) {
    console.error('Dashboard stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 },
    )
  }
}
