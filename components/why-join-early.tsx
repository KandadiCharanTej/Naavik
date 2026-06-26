import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'
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

export async function WhyJoinEarly() {
  const waitlistCount = await getWaitlistCount()

  const cards = [
    {
      title: 'First access 🚀',
      body: 'Be among the very first students at your campus when your college goes live on Naavik.\nYou won\'t be waiting — you\'ll be first.'
    },
    {
      title: 'Shape Naavik 🗳',
      body: 'Early members vote on which features get built next.\nYour feedback goes directly to the founders — not into a form no one reads.'
    },
    {
      title: 'Campus alerts 🔔',
      body: 'The moment your college goes live, you\'ll be the first to know. No waiting, no checking — one notification, straight to you.'
    },
    {
      title: 'Free forever 🎓',
      body: 'No credit card. No trial that expires.\nNaavik is free for engineering students. Forever. No exceptions.'
    },
    {
      title: 'No spam 🔕',
      body: 'We send one email when something real happens — like your campus going live. Nothing else.\nYou can unsubscribe anytime.'
    }
  ]

  return (
    <section className="bg-[var(--bg-gray)] py-[72px] lg:py-[120px]" id="early-access">
      <div className="mx-auto max-w-[1200px] px-5 flex flex-col items-center">
        
        {/* Header */}
        <Reveal className="w-full text-center">
          <div className="mb-16">
            <span className="eyebrow-label mx-auto">EARLY ACCESS</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight">
              Why join now?
            </h2>
          </div>
        </Reveal>

        {/* 5 Reason Cards */}
        <StaggerContainer delay={100} className="w-full flex flex-col gap-6">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px] mx-auto">
            {cards.slice(0, 2).map((card, i) => (
              <StaggerItem key={i} className="flex">
                <div 
                  className="ui-preview-card !p-6 flex flex-col items-start text-left w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <h3 className="text-[18px] font-bold text-[#111827] mb-3">{card.title}</h3>
                  <p className="text-[14px] text-[#374151] leading-[1.6] whitespace-pre-wrap">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
          
          {/* Bottom Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cards.slice(2, 5).map((card, i) => (
              <StaggerItem key={i + 2} className="flex">
                <div 
                  className="ui-preview-card !p-6 flex flex-col items-start text-left w-full h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <h3 className="text-[18px] font-bold text-[#111827] mb-3">{card.title}</h3>
                  <p className="text-[14px] text-[#374151] leading-[1.6] whitespace-pre-wrap">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA & Counter */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <WaitlistButton 
              className="btn-primary"
              id="why-join-cta"
            >
              Get Early Access
            </WaitlistButton>
            <p className="mt-4 text-[14px] text-[#6B7280]">
              {waitlistCount} students have already joined.
            </p>
          </div>
        </Reveal>

        {/* Founder Trust Note */}
        <Reveal delay={300}>
          <div className="mt-24 pt-10 border-t border-border w-full max-w-[560px] mx-auto text-center">
            <h3 className="text-[15px] font-bold text-[#111827] mb-4">Built by engineering students.</h3>
            <p className="text-[15px] text-[#374151] leading-relaxed mb-6">
              We started building Naavik because we faced the same problems every engineering student faces — missed deadlines, buried notes, no teammates, no real network. We're building the app we needed and never had.
            </p>
            <p className="text-[15px] text-[#374151]">
              Questions? <a href="mailto:hello@naavik.in" className="text-[var(--purple-600)] font-medium hover:underline">hello@naavik.in</a>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
