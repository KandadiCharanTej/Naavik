import { HeroContent } from '../sections/hero-content'
import { getSupabaseAdmin } from '@/lib/supabase'
import { GridLines, MeshGradient } from '@/components/design/primitives'

async function getWaitlistCount() {
  try {
    const supabase = getSupabaseAdmin()
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
    return count ?? 0
  } catch {
    return 128
  }
}

export const revalidate = 300

export async function Hero() {
  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(
    100,
    Math.round((waitlistCount / waitlistGoal) * 100),
  )

  return (
    <section className="relative overflow-hidden bg-white pt-14 sm:pt-16">
      <MeshGradient />
      <GridLines />

      {/* Ambient depth orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[12%] top-[8%] h-[55%] w-[48%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[8%] bottom-[12%] h-[38%] w-[32%] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.05)_0%,transparent_70%)] blur-2xl"
      />

      <div className="relative lg:min-h-[calc(100svh-4rem)] lg:flex lg:items-center">
        <HeroContent
          waitlistCount={waitlistCount}
          waitlistGoal={waitlistGoal}
          progressPercentage={progressPercentage}
        />
      </div>
    </section>
  )
}
