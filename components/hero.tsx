import { getSupabaseAdmin } from '@/lib/supabase'
import { headers } from 'next/headers'
import { HeroContent } from '@/components/hero-content'

async function getWaitlistCount() {
  try {
    const supabase = getSupabaseAdmin()
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
    return count ?? 0
  } catch (e) {
    return 128
  }
}

export async function Hero() {
  // Opt into dynamic rendering to ensure live waitlist data
  headers()
  
  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(100, Math.round((waitlistCount / waitlistGoal) * 100))

  return (
    <section className="relative flex flex-col items-center justify-center pt-[120px] pb-[120px] sm:pt-[160px] bg-[var(--bg-white)] px-5 overflow-hidden">
      {/* Subtle background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70"></div>
      
      <HeroContent 
        waitlistCount={waitlistCount}
        waitlistGoal={waitlistGoal}
        progressPercentage={progressPercentage}
      />
    </section>
  )
}
