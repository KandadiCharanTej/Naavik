import { getSupabaseAdmin } from '@/lib/supabase'

export async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = getSupabaseAdmin()
    
    // Fetch exact count from the waitlist table
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching waitlist count:', error)
      return 217 // Fallback if query fails
    }

    return count ?? 217
  } catch (error) {
    console.error('Supabase client error:', error)
    return 217 // Fallback if env vars are missing or other errors occur
  }
}
