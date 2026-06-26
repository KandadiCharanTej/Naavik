import { Reveal } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'
import { getSupabaseAdmin } from '@/lib/supabase'
import { headers } from 'next/headers'

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

export async function FinalCta() {
  headers() // Opt into dynamic rendering

  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(100, Math.round((waitlistCount / waitlistGoal) * 100))

  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-24" id="final-cta">
      <div className="mx-auto max-w-[1200px] px-5 flex flex-col items-center">
        
        <Reveal className="w-full text-center flex flex-col items-center">
          
          {/* Headline */}
          <h2 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1] mb-4">
            Naavik is being built right now.<br />
            Join the first <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-600)] to-[var(--purple-400)]">students.</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-[18px] text-[#9CA3AF] mb-12">
            Be first when your campus goes live.
          </p>

          {/* Progress Block */}
          <div className="w-full max-w-[480px] flex flex-col items-center mb-10">
            <p className="text-[15px] text-[#6B7280] mb-3 font-medium">
              {waitlistCount} / {waitlistGoal} students have joined early access.
            </p>
            <div className="w-full bg-[#1F2937] rounded-full h-[8px] overflow-hidden">
              <div 
                className="h-full bg-[var(--purple-600)] transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-[360px] flex flex-col items-center">
            <WaitlistButton 
              className="btn-primary w-full h-auto"
              id="final-cta-btn"
            >
              Join the First Students &rarr;
            </WaitlistButton>
            
            <p className="text-[13px] text-[#6B7280] mt-4 font-medium">
              No spam. One email when your campus is ready.
            </p>
          </div>

        </Reveal>

      </div>
    </section>
  )
}
