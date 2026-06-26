import { Reveal } from '@/components/reveal'
import { MessageCircle, Briefcase, Cloud, Globe, Code, Database, FileText } from 'lucide-react'
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

export async function WhyNaavikExists() {
  const waitlistCount = await getWaitlistCount()

  const apps = [
    { name: 'WhatsApp', icon: MessageCircle },
    { name: 'LinkedIn', icon: Briefcase },
    { name: 'Google Drive', icon: Cloud },
    { name: 'Unstop', icon: Globe },
    { name: 'GitHub', icon: Code },
    { name: 'ERP', icon: Database },
    { name: 'Google Forms', icon: FileText },
  ]

  const contrastItems = [
    { before: '7 apps to check every morning', after: 'One personalised feed' },
    { before: 'Notes buried in Drive folders', after: 'Semester-sorted study vault' },
    { before: 'Opportunities found by luck', after: 'Filtered to your branch & year' },
    { before: 'Teammates only from your class', after: '200+ colleges across TG & AP' },
    { before: 'Campus updates lost in spam', after: 'Verified, in one clean place' },
  ]

  return (
    <>
      {/* SECTION 3 - NUMBERS STRIP */}
      <section className="bg-[var(--bg-gray)] py-[72px] lg:py-[120px] border-y border-border">
        <div className="mx-auto max-w-[1200px] px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
              
              <div className="flex flex-col items-center w-full md:w-1/3 pt-8 md:pt-0 first:pt-0 text-center px-4">
                <span className="text-[40px] font-extrabold text-foreground tracking-tight leading-none mb-2">
                  {waitlistCount}+
                </span>
                <span className="text-[14px] text-muted-foreground max-w-[180px]">
                  Students on early access
                </span>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/3 pt-8 md:pt-0 text-center px-4">
                <span className="text-[40px] font-extrabold text-foreground tracking-tight leading-none mb-2">
                  20+
                </span>
                <span className="text-[14px] text-muted-foreground max-w-[180px]">
                  Colleges planned for TG & AP
                </span>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/3 pt-8 md:pt-0 text-center px-4">
                <span className="text-[40px] font-extrabold text-foreground tracking-tight leading-none mb-2">
                  100%
                </span>
                <span className="text-[14px] text-muted-foreground max-w-[180px]">
                  Free for engineering students
                </span>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 - WHY NAAVIK EXISTS */}
      <section className="bg-[var(--bg-white)] py-[72px] lg:py-[120px]" id="whats-inside">
        <div className="mx-auto max-w-[1200px] px-5">
          
          <Reveal>
            <h2 className="text-[30px] md:text-[40px] font-extrabold text-foreground max-w-[800px] leading-tight md:text-left text-center md:mx-0 mx-auto">
              Engineering students today manage college life across 7 different apps.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-[17px] text-[#374151] text-center max-w-[600px] mx-auto leading-relaxed">
              Students switch between WhatsApp, LinkedIn, Google Drive, Unstop, GitHub and more every day. Naavik brings everything into one place.
            </p>
          </Reveal>

          {/* App Logos Row */}
          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-[32px] grayscale opacity-60">
              {apps.map(app => (
                <div key={app.name} className="flex flex-col items-center gap-2" title={app.name}>
                  <app.icon className="h-[44px] w-[44px]" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contrast Table */}
          <Reveal delay={200}>
            <div className="mt-20 max-w-[680px] mx-auto w-full">
              <div className="flex justify-between items-center mb-6 px-4">
                <span className="text-[15px] font-semibold text-muted-foreground uppercase tracking-wider">Before Naavik</span>
                <span className="text-[15px] font-semibold text-primary uppercase tracking-wider">With Naavik</span>
              </div>
              <div className="flex flex-col space-y-6">
                {contrastItems.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <span className="text-[15px] text-[#6B7280] line-through decoration-muted-foreground/30 flex-1 px-4">
                      {item.before}
                    </span>
                    <span className="text-primary font-bold px-2 shrink-0">&rarr;</span>
                    <span className="text-[15px] text-[#111827] font-medium flex-1 text-right px-4">
                      {item.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Three Words */}
          <Reveal delay={250}>
            <div className="mt-24 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[48px] text-[32px] font-extrabold text-foreground tracking-tight">
              <span>One account.</span>
              <span className="hidden md:block w-px h-8 bg-border"></span>
              <span>One search.</span>
              <span className="hidden md:block w-px h-8 bg-border"></span>
              <span>One place.</span>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  )
}
