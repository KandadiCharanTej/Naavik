'use client'

import { ShieldCheck, Check } from 'lucide-react'
import { AdminButton } from '@/components/cta-buttons'
import { Reveal } from '@/components/reveal'

const benefits = [
  'Verified Founding Admin badge on your profile',
  'Direct line to Naviko founders — your feedback shapes the product',
  'First access to every new feature before anyone else',
  'Real leadership experience: you\'ll be running your campus\'s tech hub',
]

export function AdminSection() {
  return (
    <section id="become-admin" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        
        {/* Pitch info */}
        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
          FOUNDING TEAM
        </span>
        
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] leading-[1.15] max-w-3xl">
          Your campus doesn't have Naviko yet.<br />
          You could be the reason it does.
        </h2>
        
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We activate campuses one at a time — and only when a student steps up to run it. If that's you, here's what you get.
        </p>

        {/* Dynamic Join block */}
        <div className="mt-12 w-full max-w-3xl bg-[#FAFAFC] border border-border rounded-3xl p-8 sm:p-10 shadow-xs text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <ShieldCheck className="h-4.5 w-4.5" /> FOUNDING ADMIN PROGRAM
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                You will shape how engineering students at your college find opportunities and share knowledge.
              </p>
              
              <AdminButton variant="default" size="lg" id="admin-section-keynote-btn">
                Apply to Be a Campus Admin →
              </AdminButton>

              <div className="text-[11px] text-muted-foreground mt-4 leading-normal italic">
                <p>Admin spots are limited per college.</p>
                <p>We review every application personally.</p>
              </div>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

