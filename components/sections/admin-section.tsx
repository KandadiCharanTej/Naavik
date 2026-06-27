'use client'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/reveal'
import { AdminButton } from '@/components/ui/cta-buttons'
import { CheckCircle2, Shield, Zap, Award, ArrowRight } from 'lucide-react'

export function AdminSection() {
  const benefits = [
    { 
      title: 'Founding Admin Badge',
      desc: 'A permanent verified badge on your Naavik profile, visible to everyone across all colleges.',
      icon: Award
    },
    { 
      title: 'Direct Founder Access',
      desc: 'Work directly with the Naavik team. Your feedback shapes the product roadmap.',
      icon: Shield
    },
    { 
      title: 'First Access to Features',
      desc: 'Beta test every new update and feature before it rolls out to the rest of the platform.',
      icon: Zap
    }
  ]

  return (
    <section className="bg-white py-[64px] lg:py-[112px] relative border-t border-[var(--border)]" id="admin">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Column: Typography & Story */}
          <div className="flex-1 w-full text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--purple-200)] bg-[var(--purple-50)] px-4 py-2 text-[13px] font-bold tracking-wide text-[var(--purple-700)] shadow-sm mb-6 uppercase">
                <span className="flex h-2 w-2 rounded-full bg-[var(--purple-600)]"></span>
                Lead Your Campus
              </div>
              <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-[-0.03em] leading-[1.05] sm:leading-[1] text-foreground mb-6">
                Become a <br className="hidden sm:block" />
                <span className="text-[var(--purple-600)]">Founding Admin.</span>
              </h2>
              <div className="text-[18px] sm:text-[20px] text-muted-foreground leading-relaxed max-w-[600px] mx-auto lg:mx-0 font-medium">
                <p className="mb-4">
                  We are selecting exactly one student per college to lead their campus on Naavik. This isn't a form submission; it's a real leadership role.
                </p>
                <p>
                  You'll curate study resources, verify campus updates, and build your college's digital hub from the ground up.
                </p>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <AdminButton 
                  className="btn-primary h-[60px] w-full sm:w-auto px-6 sm:px-10 text-[16px] sm:text-[17px] rounded-full shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  id="admin-cta"
                >
                  Apply for your College
                  <ArrowRight className="w-5 h-5" />
                </AdminButton>
                <p className="text-[13px] font-semibold text-gray-400 max-w-[200px] text-center sm:text-left">
                  Takes 5 minutes. <br /> Reviewed personally.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Benefits Bento */}
          <div className="flex-1 w-full max-w-[600px] mx-auto">
            <StaggerContainer delay={200} className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border border-[var(--border)] rounded-[20px] p-6 md:p-8 flex items-start gap-5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-[var(--purple-200)] transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--purple-50)] text-[var(--purple-600)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--purple-600)] group-hover:text-white transition-all duration-300">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-foreground mb-2 group-hover:text-[var(--purple-600)] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
              
              {/* Process Bar (Minimalist Timeline Replacement) */}
              <StaggerItem>
                <div className="bg-gray-50 border border-gray-200 rounded-[20px] p-6 md:p-8 mt-2">
                  <h4 className="text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-6 text-center">The Selection Process</h4>
                  <div className="flex flex-col gap-6">
                    {[
                      { step: 1, title: 'Apply', desc: 'Submit your profile for campus admin role.' },
                      { step: 2, title: 'Review', desc: 'Our team reviews your application.' },
                      { step: 3, title: 'Selected', desc: 'Get approved as a campus representative.' },
                      { step: 4, title: 'Onboarding', desc: 'Learn the platform and best practices.' },
                      { step: 5, title: 'Launch Your Campus', desc: 'Introduce Naavik to your college.' },
                      { step: 6, title: 'Upload Resources & Updates', desc: 'Add notes and campus announcements.' },
                      { step: 7, title: 'Become a Verified Founding Admin', desc: 'Earn your official founding badge.' },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[14px] ${s.step === 1 ? 'bg-[var(--purple-100)] text-[var(--purple-600)]' : 'bg-gray-200 text-gray-600'}`}>
                          {s.step}
                        </div>
                        <div className="flex flex-col pt-1">
                          <span className="text-[13px] font-semibold text-gray-900">{s.title}</span>
                          <span className="text-[12px] text-muted-foreground mt-0.5">{s.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>

            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  )
}
