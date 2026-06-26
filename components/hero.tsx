import { HeroContent } from './hero-content'
import { getSupabaseAdmin } from '@/lib/supabase'

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

export const revalidate = 300

export async function Hero() {
  // Allow caching but revalidate every 5 minutes
  
  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(100, Math.round((waitlistCount / waitlistGoal) * 100))

  return (
    <section className="relative flex flex-col items-center justify-center pt-[110px] pb-16 md:pt-[140px] md:pb-32 bg-[var(--bg-white)] px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh]">
      {/* Refined subtle background mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-50/60 via-white to-blue-50/30 opacity-80 pointer-events-none"></div>
      
      {/* Decorative refined grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
      
      <HeroContent 
        waitlistCount={waitlistCount}
        waitlistGoal={waitlistGoal}
        progressPercentage={progressPercentage}
      />
    </section>
  )
}
