'use client'

import { Reveal } from '@/components/animations/reveal'
import { AdminButton } from '@/components/ui/cta-buttons'
import { Shield, Zap, Award, ArrowRight } from 'lucide-react'
import {
  PageContainer,
  Section,
  Eyebrow,
  GridLines,
} from '@/components/design/primitives'

const benefits = [
  {
    title: 'Founding Admin Badge',
    desc: 'A permanent verified badge on your Naavik profile, visible to everyone across all colleges.',
    icon: Award,
  },
  {
    title: 'Direct Founder Access',
    desc: 'Work directly with the Naavik team. Your feedback shapes what we build next.',
    icon: Shield,
  },
  {
    title: 'First Access to Features',
    desc: 'Beta test every new update and feature before it rolls out to everyone else.',
    icon: Zap,
  },
]

const steps = [
  { step: 1, title: 'Apply', desc: 'Submit your profile for campus admin role.' },
  { step: 2, title: 'Review', desc: 'Our team reviews your application.' },
  { step: 3, title: 'Selected', desc: 'Get approved as a campus representative.' },
  { step: 4, title: 'Onboarding', desc: 'Get onboarded and learn best practices.' },
  { step: 5, title: 'Launch Your Campus', desc: 'Introduce Naavik to your college.' },
  { step: 6, title: 'Upload Resources & Updates', desc: 'Add notes and campus announcements.' },
  { step: 7, title: 'Become a Verified Founding Admin', desc: 'Earn your official founding badge.' },
]

function JourneySteps() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-[var(--purple-600)]/60 via-white/15 to-[var(--purple-600)]/60"
      />
      <ol className="space-y-0">
        {steps.map((s) => (
          <li key={s.step} className="relative flex gap-4 pb-6 last:pb-0">
            <div
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                s.step === 1 || s.step === 7
                  ? 'bg-[var(--purple-600)] text-white shadow-[0_0_16px_rgba(124,58,237,0.45)]'
                  : 'bg-white/10 text-gray-400'
              }`}
            >
              {s.step}
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[14px] font-bold text-white lg:text-[15px]">{s.title}</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function BenefitCards() {
  return (
    <div className="flex flex-col gap-4">
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="rounded-xl border border-[var(--purple-500)]/25 bg-[var(--purple-600)]/10 p-4 backdrop-blur-sm lg:p-5"
        >
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--purple-600)]/25 text-[var(--purple-300)]">
              <benefit.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-bold text-[var(--purple-200)] lg:text-[15px]">{benefit.title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-gray-400">{benefit.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function AdminSection() {
  return (
    <Section id="admin" surface="white">
      <PageContainer size="wide">
        <div className="relative overflow-hidden rounded-[var(--naavik-radius-xl)] bg-[#06060A] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.18),transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[var(--purple-600)]/10 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-[var(--purple-500)]/15 blur-[100px]"
          />
          <GridLines className="opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />

          <div className="relative">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
                <Eyebrow tone="dark" className="mb-5">
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[var(--purple-400)]" />
                  Lead Your Campus
                </Eyebrow>
                <h2 className="text-[2.25rem] font-extrabold leading-[1.05] tracking-tight sm:text-[3rem] lg:text-[3.25rem]">
                  Become a <span className="text-[var(--purple-400)]">Founding Admin.</span>
                </h2>
                <div className="mt-6 space-y-4 text-[17px] font-medium leading-relaxed text-gray-400">
                  <p>We are selecting exactly one student per college to lead their campus on Naavik. This isn&apos;t a form submission; it&apos;s a real leadership role.</p>
                  <p>You&apos;ll upload and organise study resources, verify campus updates, and build your college&apos;s digital hub from the ground up.</p>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <AdminButton id="admin-cta" className="naavik-btn naavik-btn-primary h-14 !rounded-2xl px-8 text-[16px]">
                    Apply for your College <ArrowRight className="h-5 w-5" />
                  </AdminButton>
                  <p className="text-[13px] font-semibold text-gray-500">
                    Takes 5 minutes. <br />Reviewed personally.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="relative mt-14 lg:mt-20">
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  The Selection Process
                </p>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                  <div>
                    <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500 lg:mb-8">
                      Your Journey
                    </p>
                    <JourneySteps />
                  </div>

                  <div>
                    <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.12em] text-gray-500 lg:mb-8">
                      What You Get
                    </p>
                    <BenefitCards />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}
