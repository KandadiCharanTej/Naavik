import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'
import { getSupabaseAdmin } from '@/lib/supabase'
import { Rocket, ShieldCheck, HeartHandshake, BellRing, Vote } from 'lucide-react'

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

  return (
    <section className="bg-white py-[64px] lg:py-[112px] border-t border-[var(--border)]" id="early-access">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        
        {/* Header */}
        <Reveal className="w-full text-center">
          <div className="mb-16">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[12px] font-semibold tracking-wide text-orange-600 shadow-sm mb-6 uppercase">
              Early Access
            </span>
            <h2 className="text-[36px] md:text-[56px] font-extrabold tracking-tight leading-[1.1] md:leading-[1.05] text-foreground">
              Why join <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">now?</span>
            </h2>
            <p className="mt-5 text-[18px] text-muted-foreground max-w-[600px] mx-auto font-medium">
              We're letting students in campus by campus. Reserving your spot means you get priority access the moment we launch at your college.
            </p>
          </div>
        </Reveal>

        {/* Premium Bento Grid */}
        <StaggerContainer delay={100} className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Card 1: Free Forever (Large Feature) */}
          <StaggerItem className="md:col-span-8 flex">
            <div className="bg-gradient-to-br from-[var(--purple-50)] to-white border border-[var(--purple-200)] rounded-[24px] p-6 md:p-10 w-full h-full flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--purple-600)] opacity-[0.03] rounded-full blur-[60px] pointer-events-none"></div>
              
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--purple-100)] text-[var(--purple-600)] mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-[28px] font-extrabold text-[#111827] mb-3 leading-tight">Free forever. <br />No exceptions.</h3>
                <p className="text-[16px] text-[#4B5563] leading-relaxed max-w-[340px]">
                  No credit card required. No trial period that expires. Naavik is completely free for engineering students. We won't charge you to access your own college's resources.
                </p>
              </div>
              <div className="w-full sm:w-[240px] h-[200px] rounded-[16px] bg-white border border-[var(--purple-100)] shadow-sm flex flex-col items-center justify-center p-6 shrink-0 relative overflow-hidden group">
                <div className="text-[48px] font-black text-[var(--purple-600)] mb-1 group-hover:scale-110 transition-transform duration-500">₹0</div>
                <div className="text-[14px] font-bold text-gray-400 uppercase tracking-wide">For Students</div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: First Access */}
          <StaggerItem className="md:col-span-4 flex">
            <div className="bg-white border border-[var(--border)] rounded-[24px] p-6 md:p-8 w-full h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-5">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-2">First Access</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed flex-1">
                Be among the very first students at your campus to get the invite. Don't wait in line when we launch.
              </p>
            </div>
          </StaggerItem>

          {/* Card 3: Shape Naavik */}
          <StaggerItem className="md:col-span-4 flex">
            <div className="bg-white border border-[var(--border)] rounded-[24px] p-6 md:p-8 w-full h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-5">
                <Vote className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-2">Shape the Product</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed flex-1">
                Early members vote on which features get built next. Your feedback goes directly to the founders.
              </p>
            </div>
          </StaggerItem>

          {/* Card 4: No Spam */}
          <StaggerItem className="md:col-span-4 flex">
            <div className="bg-white border border-[var(--border)] rounded-[24px] p-6 md:p-8 w-full h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-[#111827] mb-2">Zero Spam</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed flex-1">
                We only email you when something real happens—like your campus going live. That's it.
              </p>
            </div>
          </StaggerItem>

          {/* Card 5: Instant Alerts */}
          <StaggerItem className="md:col-span-4 flex">
            <div className="bg-[#111827] border border-gray-800 rounded-[24px] p-6 md:p-8 w-full h-full flex flex-col shadow-lg relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-[120px] h-[120px] bg-yellow-400 opacity-20 blur-[40px] rounded-full pointer-events-none"></div>
               <div className="w-10 h-10 rounded-xl bg-white/10 text-yellow-400 flex items-center justify-center mb-5 border border-white/5">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-white mb-2">Instant Alerts</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed flex-1">
                The exact moment your college is activated, you get the notification. Straight to your inbox.
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* CTA & Counter */}
        <Reveal delay={200}>
          <div className="mt-16 md:mt-20 flex flex-col items-center justify-center text-center w-full">
            <WaitlistButton 
              className="btn-primary h-[60px] w-full sm:w-auto px-6 sm:px-10 text-[16px] sm:text-[17px] rounded-full shadow-[0_8px_30px_rgba(124,58,237,0.25)] hover:scale-[1.02] transition-transform"
              id="why-join-cta"
            >
              Get Early Access Now
            </WaitlistButton>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500 overflow-hidden`}>
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}&backgroundColor=f3f4f6`} alt="avatar" />
                  </div>
                ))}
              </div>
              <p className="text-[14px] font-semibold text-[#6B7280]">
                Join <span className="text-[#111827]">{waitlistCount}</span> students already on board.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Founder Trust Note */}
        <Reveal delay={300}>
          <div className="mt-24 pt-12 border-t border-[var(--border)] w-full max-w-[640px] mx-auto text-center">
            <h3 className="text-[18px] font-bold text-[#111827] mb-4">Built by students, for students.</h3>
            <p className="text-[16px] text-muted-foreground leading-relaxed mb-6 font-medium">
              We started Naavik because we faced the exact same problems you do — missed deadlines, scattered notes, zero network. We're building the platform we wished we had.
            </p>
            <a href="mailto:hello@naavik.in" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--purple-600)] hover:text-[var(--purple-700)] transition-colors">
              hello@naavik.in &rarr;
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
