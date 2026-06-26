'use client'

import { Reveal, StaggerContainer, StaggerItem, premiumEasing } from '@/components/reveal'
import { AdminButton } from '@/components/cta-buttons'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export function AdminSection() {
  const steps = [
    { num: '1', title: 'Apply', body: 'Submit in 5 minutes.' },
    { num: '2', title: 'Review', body: 'We read every application. No automated rejections.' },
    { num: '3', title: 'Selected', body: 'You\'ll hear from us personally within 7 days.' },
    { num: '4', title: 'Onboarding', body: 'We walk you through the platform together.' },
    { num: '5', title: 'Launch Your Campus', body: 'Your college workspace goes live. You run it.' },
    { num: '6', title: 'Upload & Moderate', body: 'Add resources, post updates, build community.' },
    { num: '✓', title: 'Verified Founding Admin', body: 'Your badge. Permanent.' }
  ]

  const benefits = [
    { text: 'Verified Founding Admin badge on your Naavik profile' },
    { text: 'Direct communication with Naavik founders — your feedback shapes what we build next' },
    { text: 'First access to every new feature before anyone else on the platform' },
    { text: 'Real leadership experience — you\'re building your campus\'s tech hub from scratch' }
  ]

  const timelineRef = useRef(null)

  return (
    <section className="bg-[var(--bg-white)] py-[72px] lg:py-[120px]" id="admin">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="mb-16">
            <span className="eyebrow-label">FOUNDING TEAM</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight mb-6">
              Lead Your College. Become a Campus Admin.
            </h2>
            <div className="text-[16px] text-[#374151] max-w-[700px] leading-[1.7] space-y-4">
              <p>
                Campus Admins organise study resources, campus updates, and community activity for their college on Naavik. It's a real leadership role — not a form submission. You'll work directly with the Naavik team to build your campus from the ground up.
              </p>
              <p>
                Admin spots are limited to one per college. We review every application personally and look for students who genuinely want to improve their campus experience.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: The Journey */}
          <Reveal delay={100} className="flex-1 w-full">
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[var(--purple-600)] mb-8">
              The Journey
            </h3>
            
            <div className="relative ml-[13px] pl-8 pb-8" ref={timelineRef}>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: premiumEasing }}
                className="absolute left-0 top-0 w-px border-l border-dashed border-[#D1D5DB] h-full"
              />
              <StaggerContainer delay={200} className="space-y-10">
                {steps.map((step, i) => (
                  <StaggerItem key={i} className="relative">
                    {/* Step Number Circle */}
                    <div className="absolute -left-[45px] top-0 w-[26px] h-[26px] rounded-full bg-[var(--purple-600)] text-white flex items-center justify-center text-[13px] font-bold">
                      {step.num}
                    </div>
                    
                    <h4 className="text-[15px] font-semibold text-[#111827] leading-none mb-1.5">{step.title}</h4>
                    <p className="text-[13px] text-[#6B7280]">{step.body}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="mt-8">
              <AdminButton 
                className="btn-primary"
                id="admin-cta"
              >
                Become a Campus Admin &rarr;
              </AdminButton>
              <p className="text-[13px] text-[#6B7280] mt-3 leading-snug max-w-[250px]">
                Less than 5 minutes to apply.<br />
                We review every application personally.
              </p>
            </div>
          </Reveal>

          {/* RIGHT: What You Get */}
          <Reveal delay={200} className="flex-1 w-full lg:max-w-[480px]">
            <h3 className="text-[13px] font-semibold uppercase tracking-widest text-[var(--purple-600)] mb-8">
              What you get
            </h3>
            
            <StaggerContainer delay={300} className="flex flex-col gap-[20px]">
              {benefits.map((benefit, i) => (
                <StaggerItem key={i} className="flex items-start gap-4">
                  <div className="w-[24px] h-[24px] shrink-0 rounded-full bg-[var(--purple-600)] text-white flex items-center justify-center text-[14px] font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-[15px] font-semibold text-[#111827] leading-[1.6]">
                    {benefit.text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Reveal>

        </div>

      </div>
    </section>
  )
}
