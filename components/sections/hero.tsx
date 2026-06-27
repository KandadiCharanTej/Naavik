import { HeroContent } from '../sections/hero-content'
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
    <section className="relative flex flex-col items-center justify-center pt-[48px] md:pt-[80px] pb-16 md:pb-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[100vh] lg:min-h-[90vh]">
      {/* Refined subtle background mesh gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--purple-400)]/10 mix-blend-multiply filter blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--purple-200)]/20 mix-blend-multiply filter blur-[100px] pointer-events-none"></div>
      
      <HeroContent 
        waitlistCount={waitlistCount}
        waitlistGoal={waitlistGoal}
        progressPercentage={progressPercentage}
      />
    </section>
  )
}
