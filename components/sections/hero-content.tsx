'use client'

import { motion } from 'framer-motion'
import { Briefcase, BookOpen, Code, Users, Bell } from 'lucide-react'
import { WaitlistButton } from '../ui/cta-buttons'
import { DashboardMockup } from '../sections/dashboard-mockup'
import { PageContainer } from '@/components/design/primitives'

const FEATURES = [
  { icon: Briefcase, text: 'Find internships & hackathons' },
  { icon: BookOpen, text: 'Access notes, PYQs & lab manuals' },
  { icon: Code, text: 'Showcase your projects' },
  { icon: Users, text: 'Find teammates across Telangana & Andhra Pradesh' },
  { icon: Bell, text: 'Stay updated with campus events' },
] as const

const TRUST = [
  'Built by engineering students',
  'Free forever',
  'Privacy first',
  'Campus-by-campus rollout',
] as const

type Props = {
  waitlistCount: number
  waitlistGoal: number
  progressPercentage: number
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
}

function EarlyAccessBadge() {
  return (
    <motion.span
      {...fadeUp}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--purple-200)] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--purple-700)] shadow-[var(--shadow-soft)] backdrop-blur-sm sm:text-[11px]"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--purple-400)] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--purple-500)]" />
      </span>
      Early Access Now Open
    </motion.span>
  )
}

function Headline({ mobile }: { mobile?: boolean }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className={`mt-5 font-extrabold tracking-[-0.04em] text-foreground ${
        mobile
          ? 'text-[2.125rem] leading-[1.07] sm:text-[2.5rem]'
          : 'text-[3.25rem] leading-[1.02] xl:text-[3.75rem]'
      }`}
    >
      Never miss an <br className={mobile ? 'hidden sm:block' : ''} />
      opportunity <br />
      <span className="bg-gradient-to-r from-[var(--purple-600)] to-[#9333EA] bg-clip-text text-transparent">
        again.
      </span>
    </motion.h1>
  )
}

function FeatureList() {
  return (
    <ul className="mt-6 space-y-2.5 sm:space-y-3">
      {FEATURES.map((f, i) => (
        <motion.li
          key={f.text}
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="group flex items-center gap-3"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[var(--purple-50)] text-[var(--purple-600)] ring-1 ring-[var(--purple-100)] transition-all duration-300 group-hover:bg-[var(--purple-100)] group-hover:ring-[var(--purple-200)]">
            <f.icon className="h-4 w-4" />
          </span>
          <span className="text-[14px] font-medium text-gray-600 sm:text-[15px]">{f.text}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function CtaGroup({ stacked }: { stacked?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`grid gap-3 ${stacked ? 'grid-cols-1' : 'grid-cols-2'}`}
    >
      <WaitlistButton
        id="hero-primary-cta"
        className="naavik-btn naavik-btn-primary h-[52px] w-full !rounded-[var(--naavik-radius)]"
      >
        Reserve My Spot
      </WaitlistButton>
      <a
        href="#whats-inside"
        className="naavik-btn naavik-btn-secondary group h-[52px] w-full !rounded-[var(--naavik-radius)]"
      >
        Explore Features
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </motion.div>
  )
}

function WaitlistProgress({
  waitlistCount,
  waitlistGoal,
  progressPercentage,
}: Pick<Props, 'waitlistCount' | 'waitlistGoal' | 'progressPercentage'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="naavik-card mt-5 p-4"
    >
      <div className="flex items-baseline justify-between text-[13px] font-medium">
        <span>
          <strong className="text-[15px] text-foreground">{waitlistCount}</strong>{' '}
          students joined
        </span>
        <span className="text-gray-500">Goal: {waitlistGoal}</span>
      </div>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </div>
      <p className="mt-2 text-[12px] font-medium text-gray-500 sm:text-[13px]">
        Launching campus by campus across Telangana & Andhra Pradesh.
      </p>
    </motion.div>
  )
}

function TrustBadges({ mobile }: { mobile?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.65, duration: 0.5 }}
      className={`mt-4 flex flex-wrap gap-2 ${mobile ? 'grid grid-cols-2' : ''}`}
    >
      {TRUST.map((t) => (
        <span
          key={t}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#F8F8FA] px-2.5 py-2 text-[11px] font-semibold text-gray-500 ring-1 ring-gray-100 sm:text-[12px]"
        >
          <span className="text-[var(--purple-600)]">✓</span>
          {t}
        </span>
      ))}
    </motion.div>
  )
}

function HeroVisual({ mobile }: { mobile?: boolean }) {
  return (
    <div className={`relative ${mobile ? 'w-full' : 'w-full'}`}>
      {!mobile && (
        <>
          {/* Depth layer — rear glow */}
          <div
            aria-hidden
            className="absolute -right-8 top-6 h-[92%] w-[96%] rounded-[var(--naavik-radius-xl)] bg-gradient-to-br from-[var(--purple-200)]/50 via-[var(--purple-100)]/30 to-transparent"
          />
          {/* Depth layer — mid accent card */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-6 bottom-8 z-0 h-28 w-44 rounded-2xl border border-white/90 bg-white/70 shadow-[var(--shadow-card)] backdrop-blur-xl"
          />
          {/* Depth layer — top-right chip */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-4 top-0 z-20 flex items-center gap-2 rounded-xl border border-[var(--purple-100)] bg-white/90 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-semibold text-gray-600">Live feed</span>
          </motion.div>
          {/* Depth layer — bottom stat */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-4 left-8 z-20 rounded-xl border border-white/80 bg-white/85 px-4 py-2.5 shadow-[var(--shadow-float)] backdrop-blur-xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Today</p>
            <p className="text-[13px] font-bold text-[var(--purple-700)]">12 new opportunities</p>
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 36, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        className="relative z-10 rounded-[var(--naavik-radius-xl)] p-[3px] shadow-[var(--shadow-float)]"
        style={{
          perspective: 1400,
          background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(255,255,255,0.6) 40%, rgba(147,51,234,0.15) 100%)',
        }}
      >
        <div className="overflow-hidden rounded-[calc(var(--naavik-radius-xl)-3px)] bg-white">
          <DashboardMockup variant={mobile ? 'mobile' : 'desktop'} />
        </div>
      </motion.div>
    </div>
  )
}

export function HeroContent(props: Props) {
  return (
    <>
      {/* Desktop — cinematic asymmetric: copy ~40%, dashboard ~60% */}
      <PageContainer size="full" className="hidden pb-20 pt-10 lg:block">
        <div className="grid grid-cols-[minmax(0,38%)_minmax(0,62%)] items-center gap-8 xl:grid-cols-[minmax(0,40%)_minmax(0,60%)] xl:gap-12">
          <div className="relative z-10 max-w-[520px] pr-4">
            <EarlyAccessBadge />
            <Headline />
            <FeatureList />
            <div className="mt-7">
              <CtaGroup />
            </div>
            <WaitlistProgress {...props} />
            <TrustBadges />
          </div>

          <div className="relative -mr-4 xl:-mr-8">
            <HeroVisual />
          </div>
        </div>
      </PageContainer>

      {/* Mobile — stack: copy → CTAs → dashboard → progress → trust */}
      <PageContainer className="pb-12 pt-8 lg:hidden">
        <div>
          <EarlyAccessBadge />
          <Headline mobile />
          <FeatureList />
        </div>

        <div className="mt-7">
          <CtaGroup stacked />
        </div>

        <div className="mt-8">
          <HeroVisual mobile />
        </div>

        <WaitlistProgress {...props} />
        <TrustBadges mobile />
      </PageContainer>
    </>
  )
}
