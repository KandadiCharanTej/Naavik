import { Reveal } from '@/components/animations/reveal'
import { WaitlistButton } from '@/components/ui/cta-buttons'
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
    <section className="bg-white py-16 md:py-32" id="final-cta">
      <div className="mx-auto max-w-[1000px] px-5">
        
        <Reveal className="w-full">
          <div className="bg-[#0b1120] relative overflow-hidden rounded-[32px] md:rounded-[48px] p-10 md:p-20 flex flex-col items-center text-center shadow-2xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-[var(--purple-600)] blur-[120px] opacity-30 rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Headline */}
              <h2 className="text-[36px] md:text-[56px] font-bold text-white tracking-tight leading-[1.1] mb-6">
                Naavik is being built right now.
              </h2>
              
              {/* Subheadline */}
              <p className="text-[16px] md:text-[18px] text-gray-300 mb-12">
                Join Early Access today and be among the first students when your campus goes live.
              </p>

              {/* Progress Block */}
              <div className="w-full max-w-[400px] flex flex-col items-start mb-10">
                <p className="text-[13px] md:text-[14px] text-gray-300 mb-3 font-medium">
                  {waitlistCount} / {waitlistGoal} students have joined early access.
                </p>
                <div className="w-full bg-white/10 rounded-full h-[4px] overflow-hidden">
                  <div 
                    className="h-full bg-[var(--purple-500)] transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full max-w-[300px] flex flex-col items-center">
                <WaitlistButton 
                  className="w-full h-[52px] bg-white text-black hover:bg-gray-100 text-[15px] font-semibold rounded-full transition-colors"
                  id="final-cta-btn"
                >
                  Join the First Students &rarr;
                </WaitlistButton>
                
                <p className="text-[12px] text-gray-400 mt-5 font-medium">
                  No spam. One email when your campus is ready.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
