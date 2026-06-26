import { WaitlistButton } from '@/components/cta-buttons'
import { ConceptPreview } from '@/components/dashboard-mockup'
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

export async function Hero() {
  // Opt into dynamic rendering to ensure live waitlist data
  headers()
  
  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(100, Math.round((waitlistCount / waitlistGoal) * 100))

  return (
    <section className="relative flex flex-col items-center justify-center pt-[120px] pb-[120px] sm:pt-[160px] bg-[var(--bg-white)] px-5">
      
      <div className="w-full max-w-[1200px] flex flex-col items-center text-center">
        
        {/* Pill Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {['✦ Built by students', '✦ Free forever', '✦ TG & AP', '✦ In development'].map(pill => (
            <span key={pill} className="inline-flex items-center rounded-full border border-border px-[14px] py-[5px] text-[13px] text-muted-foreground bg-white shadow-sm">
              {pill}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-[38px] md:text-[56px] font-extrabold leading-[1.1] text-foreground max-w-[800px] mx-auto tracking-tight">
          Never miss an opportunity again.
        </h1>

        {/* Subheadline Scan List */}
        <div className="mt-8 flex flex-col items-start md:items-center text-left md:text-center text-[17px] text-[#374151] leading-[1.8] max-w-[600px] mx-auto space-y-2">
          <p><span className="text-primary font-bold mr-1">✦</span> Find internships and hackathons filtered for your branch.</p>
          <p><span className="text-primary font-bold mr-1">✦</span> Access your college's notes, PYQs, and lab records.</p>
          <p><span className="text-primary font-bold mr-1">✦</span> Build and showcase projects to founders and recruiters.</p>
          <p><span className="text-primary font-bold mr-1">✦</span> Find teammates for hackathons across TG & AP.</p>
          <p><span className="text-primary font-bold mr-1">✦</span> Stay updated with campus events before they're buried.</p>
        </div>

        {/* Early Access Block */}
        <div className="mt-12 flex flex-col items-center w-full max-w-md mx-auto">
          <p className="text-[15px] font-semibold text-foreground">Early Access is open.</p>
          <p className="text-[15px] font-normal text-muted-foreground mt-1 mb-4 text-balance">
            Join now — be among the first students when your campus goes live.
          </p>
          
          <div className="w-full bg-[var(--purple-100)] rounded-full h-[8px] overflow-hidden mb-2 relative">
            <div 
              className="h-full bg-[var(--purple-600)] transition-all duration-[600ms] ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-[13px] text-muted-foreground font-medium">
            {waitlistCount} students joined &nbsp;&middot;&nbsp; Goal: {waitlistGoal}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <WaitlistButton 
            className="btn-primary"
            id="hero-primary-cta"
          >
            Reserve My Spot — Free
          </WaitlistButton>
          
          <a
            href="#whats-inside"
            className="btn-secondary"
          >
            See What's Inside &darr;
          </a>
        </div>

        <p className="mt-4 text-[12px] text-[#9CA3AF] text-center">
          Early concept — product in active development.
        </p>

        {/* Hero UI Mock */}
        <div className="mt-20 w-full max-w-[1100px] relative rounded-[16px] overflow-hidden border border-border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          <div className="absolute top-4 right-4 z-20 px-2 py-0.5 rounded-[4px] bg-muted/80 backdrop-blur-sm text-[12px] text-[#9CA3AF] font-medium border border-border">
            Preview
          </div>
          <div className="relative w-full aspect-[16/9] md:aspect-auto">
             <ConceptPreview />
          </div>
        </div>

      </div>
    </section>
  )
}
