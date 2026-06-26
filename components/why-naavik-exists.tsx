import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { MessageCircle, Briefcase, Cloud, Globe, Code, Database, FileText, CheckCircle2, XCircle } from 'lucide-react'

export async function WhyNaavikExists() {
  const contrastItems = [
    { before: '7 apps to check every morning', after: 'One personalised feed' },
    { before: 'Notes buried in Drive folders', after: 'Semester-sorted study vault' },
    { before: 'Opportunities found by luck', after: 'Filtered to your branch & year' },
    { before: 'Teammates only from your class', after: '200+ colleges across TG & AP' },
    { before: 'Campus updates lost in spam', after: 'Verified, in one clean place' },
  ]

  return (
    <section className="bg-[var(--bg-white)] py-[64px] lg:py-[112px] relative overflow-hidden" id="whats-inside">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50/50 via-white to-white opacity-100 pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 relative z-10">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-gray-50 px-3 py-1 text-[12px] font-semibold tracking-wide text-muted-foreground shadow-sm mb-6 uppercase">
              The Problem
            </span>
            <h2 className="text-[36px] md:text-[56px] font-extrabold text-foreground max-w-[900px] mx-auto leading-[1.1] md:leading-[1.05] tracking-tight">
              Engineering life is scattered across <span className="text-[var(--purple-600)]">too many apps.</span>
            </h2>
          </div>
        </Reveal>

        {/* Premium Split Comparison Cards */}
        <div className="mt-16 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          
          {/* Old Way Card */}
          <Reveal delay={100} className="w-full h-full">
            <div className="relative bg-[#FAFAFA] border border-[var(--border)] rounded-[24px] p-8 md:p-10 h-full overflow-hidden shadow-sm flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827]">The Old Way</h3>
              </div>

              <div className="flex flex-col gap-5 flex-grow">
                {contrastItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 opacity-70">
                    <span className="text-[#6B7280] mt-0.5">•</span>
                    <span className="text-[15px] font-medium text-[#6B7280] leading-snug">
                      {item.before}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Abstract visual of scattered apps */}
              <div className="mt-10 flex flex-wrap gap-3 p-4 bg-white border border-[var(--border)] rounded-xl opacity-60 grayscale shadow-inner">
                {[MessageCircle, Briefcase, Cloud, Globe, Code, Database, FileText].map((Icon, idx) => (
                  <div key={idx} className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded shadow-sm border border-gray-100">
                    <Icon className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Naavik Way Card */}
          <Reveal delay={200} className="w-full h-full">
            <div className="relative bg-white border border-[var(--purple-300)] rounded-[24px] p-8 md:p-10 h-full overflow-hidden shadow-[0_20px_40px_rgba(124,58,237,0.06)] flex flex-col ring-1 ring-[var(--purple-100)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--purple-500)] to-[#A855F7]"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--purple-100)] text-[var(--purple-600)] shadow-inner">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] font-bold text-[#111827]">With Naavik</h3>
              </div>

              <div className="flex flex-col gap-5 flex-grow">
                {contrastItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--purple-500)] shrink-0 mt-0.5" />
                    <span className="text-[15px] font-bold text-[#111827] leading-snug">
                      {item.after}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Abstract visual of unified platform */}
              <div className="mt-10 w-full h-[68px] bg-gradient-to-r from-[var(--purple-50)] to-blue-50 border border-[var(--purple-200)] rounded-xl shadow-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
                <span className="relative z-10 font-bold text-[14px] text-[var(--purple-700)] tracking-wide">One unified platform</span>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Three Words */}
        <StaggerContainer delay={400} className="mt-16 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-[40px] text-[28px] md:text-[44px] font-extrabold text-foreground tracking-[-0.02em]">
          <StaggerItem variant="fadeUp" className="text-[#111827]">One account.</StaggerItem>
          <StaggerItem variant="scaleIn" className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></StaggerItem>
          <StaggerItem variant="fadeUp" className="text-[#111827]">One search.</StaggerItem>
          <StaggerItem variant="scaleIn" className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></StaggerItem>
          <StaggerItem variant="fadeUp" className="text-[var(--purple-600)]">One united place.</StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  )
}
