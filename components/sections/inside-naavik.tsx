'use client'

import { useState, useRef } from 'react'
import { Reveal, premiumEasing } from '@/components/animations/reveal'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, BookOpen, Users, Trophy, Globe, Rocket, FileText, type LucideIcon } from 'lucide-react'
import { PageContainer, Section, Eyebrow } from '@/components/design/primitives'
import { cn } from '@/lib/utils'

type TabId = 'growth' | 'college'

type Feature = {
  title: string
  desc: string
  icon: LucideIcon
  tag: string
  tagColor: string
  previewContent: React.ReactNode
}

const growthFeatures: Feature[] = [
  {
    title: 'Internships & Jobs',
    desc: 'Verified opportunities from top startups and tech companies.',
    icon: Briefcase,
    tag: '2 days left',
    tagColor: 'text-orange-500',
    previewContent: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <span className="text-[14px] font-bold text-gray-900 sm:text-[15px]">Frontend Developer Intern</span>
          <span className="ml-2 shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-600 sm:text-[12px]">₹30k/mo</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] text-gray-500">
          <span className="font-medium text-gray-700">Razorpay</span><span>•</span><span>Remote</span><span>•</span><span className="text-orange-600">Ends Mar 12</span>
        </div>
        <div className="mt-1 flex gap-1.5">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">React</span>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">TypeScript</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Hackathons',
    desc: 'Compete, build, and win prizes across TG & AP.',
    icon: Trophy,
    tag: 'Open now',
    tagColor: 'text-emerald-500',
    previewContent: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <span className="text-[14px] font-bold text-gray-900 sm:text-[15px]">T-Hub Innovation Hackathon</span>
          <span className="ml-2 shrink-0 rounded bg-[var(--purple-50)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--purple-600)] sm:text-[12px]">₹1L Prize</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] text-gray-500">
          <span className="font-medium text-gray-700">T-Hub Hyderabad</span><span>•</span><span>Team of 2-4</span>
        </div>
        <div className="mt-1 flex gap-1.5">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">AI/ML</span>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">FinTech</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Team Finder',
    desc: 'Find the perfect co-founders or teammates.',
    icon: Users,
    tag: 'Trending',
    tagColor: 'text-blue-500',
    previewContent: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between">
          <span className="text-[14px] font-bold text-gray-900 sm:text-[15px]">Rahul K.</span>
          <span className="ml-2 shrink-0 rounded border border-blue-100 bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">Looking for Dev</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] text-gray-500">
          <span className="font-medium text-gray-700">CBIT, Hyderabad</span><span>•</span><span>3rd Year CSE</span>
        </div>
        <div className="mt-0.5 line-clamp-1 text-[11px] text-gray-600">
          Building an AI study planner for Smart India Hackathon. Need someone strong in Node.js and Postgres.
        </div>
      </div>
    ),
  },
]

const collegeFeatures: Feature[] = [
  {
    title: 'DBMS Previous Year Paper 2024',
    desc: 'Notes, PYQs, and lab manuals sorted by semester.',
    icon: BookOpen,
    tag: '📁 STUDY RESOURCE',
    tagColor: 'text-[#065F46] bg-[#D1FAE5] border-[#6EE7B7]',
    previewContent: (
      <div className="flex flex-col gap-2">
        <div className="text-[13px] font-medium text-gray-500">CSE · Semester 4<br />Uploaded by Senior Admin</div>
        <button className="mt-1 w-full rounded-lg bg-gray-900 py-2 text-[13px] font-medium text-white hover:bg-gray-800">Download PDF</button>
      </div>
    ),
  },
  {
    title: 'Convergence Tech Fest 2026',
    desc: 'No more spam. Only verified announcements.',
    icon: Trophy,
    tag: '📢 CAMPUS UPDATE',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    previewContent: (
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between text-[13px] font-medium text-gray-500">
          <div>IEEE Student Branch<br />Prize Pool: ₹30,000</div>
          <div className="text-right font-semibold text-gray-900">March 15–18</div>
        </div>
        <button className="mt-1 w-full rounded-lg bg-gray-900 py-2 text-[13px] font-medium text-white hover:bg-gray-800">View Details</button>
      </div>
    ),
  },
  {
    title: 'Leaderboards',
    desc: 'Earn points by contributing resources.',
    icon: Trophy,
    tag: '🏆 TOP CONTRIBUTORS — This Month',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    previewContent: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-gray-100 py-1 text-[14px] font-medium text-gray-700">
          <span>E. Sai</span><div className="flex items-center gap-2"><span className="font-bold text-gray-900">490 pts</span> 🥇</div>
        </div>
        <div className="mb-1 flex items-center justify-between py-1 text-[14px] font-medium text-gray-700">
          <span>V. Keerthi</span><div className="flex items-center gap-2"><span className="font-bold text-gray-900">430 pts</span> 🥈</div>
        </div>
        <button className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100">See Full Board</button>
      </div>
    ),
  },
]

const growthHighlights = [
  { label: '100+ Opportunities', icon: Briefcase },
  { label: 'Project Showcase', icon: Rocket },
  { label: 'Team Finder', icon: Users },
] as const

const collegeHighlights = [
  { label: '📁 Notes', icon: BookOpen },
  { label: '📄 PYQs', icon: FileText },
  { label: '📚 Resources', icon: BookOpen },
] as const

const growthSatellites = ['Project Showcase', 'Hackathons', 'Internships', 'Workshops', 'Student Communities', 'Startup Opportunities']
const collegeSatellites = ['📢 Announcements', '📅 Events', '🎪 Clubs', '📚 Resources', '🎓 Seniors']

function HighlightChips({ accent }: { accent: TabId }) {
  const items = accent === 'growth' ? growthHighlights : collegeHighlights
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.label}
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-bold shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1',
            accent === 'growth'
              ? 'bg-white text-[var(--purple-700)] ring-[var(--purple-100)]'
              : 'bg-white text-emerald-800 ring-emerald-100',
          )}
        >
          <item.icon className="h-3.5 w-3.5 shrink-0 opacity-80" />
          {item.label}
        </span>
      ))}
    </div>
  )
}

function FloatingStatCard({ accent }: { accent: TabId }) {
  const stat =
    accent === 'growth'
      ? { value: '100+', label: 'Monthly Opportunities' }
      : { value: '📚', label: 'Campus Resources' }

  return (
    <div className="pointer-events-none absolute bottom-2 right-0 z-[5] hidden lg:block">
      <div
        className={cn(
          'rounded-2xl border bg-white px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.06)]',
          accent === 'growth'
            ? 'border-[var(--purple-100)]/80'
            : 'border-emerald-100/80',
        )}
      >
        <p
          className={cn(
            'text-[1.375rem] font-black leading-none tracking-tight',
            accent === 'growth' ? 'text-[var(--purple-600)]' : 'text-emerald-700',
          )}
        >
          {stat.value}
        </p>
        <p className="mt-1 text-[11px] font-semibold text-gray-500">{stat.label}</p>
      </div>
    </div>
  )
}

function ConnectorLines({ accent }: { accent: TabId }) {
  const stroke = accent === 'growth' ? 'rgba(124,58,237,0.18)' : 'rgba(16,185,129,0.2)'
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
      viewBox="0 0 800 520"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M 120 80 C 200 120, 280 60, 380 140" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 380 140 C 420 200, 500 180, 560 280" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 200 360 C 300 320, 400 380, 520 340" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
      <path d="M 560 280 C 620 340, 680 400, 720 460" stroke={stroke} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.9" />
    </svg>
  )
}

function HeroCard({ feature, accent }: { feature: Feature; accent: TabId }) {
  return (
    <article className="transform-gpu relative z-20 overflow-hidden rounded-[24px] border border-gray-200/70 bg-white p-5 shadow-[0_8px_24px_rgba(124,58,237,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:p-6">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40',
          accent === 'growth' ? 'bg-[var(--purple-100)]' : 'bg-emerald-100',
        )}
      />
      <div className="relative flex gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1',
            accent === 'growth'
              ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
              : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
          )}
        >
          <feature.icon className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h4 className="text-[18px] font-bold tracking-[-0.02em] lg:text-[20px]">{feature.title}</h4>
            <span className={cn('shrink-0 rounded-full border border-gray-100 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider', feature.tagColor)}>
              {feature.tag}
            </span>
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{feature.desc}</p>
          <div className="mt-4 rounded-2xl bg-[#F8F8FA] p-3 ring-1 ring-gray-100/80">{feature.previewContent}</div>
        </div>
      </div>
    </article>
  )
}

function SatelliteCard({
  label,
  feature,
  accent,
  className,
  delay = 0,
  compact,
}: {
  label?: string
  feature?: Feature
  accent: TabId
  className?: string
  delay?: number
  compact?: boolean
}) {
  const title = feature?.title ?? label ?? ''
  const Icon = feature?.icon ?? Briefcase

  return (
    <article
      className={cn(
        'group transform-gpu relative z-10 overflow-hidden rounded-[24px] border border-gray-200/60 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-0.5',
        compact ? 'p-3.5' : 'p-4',
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          accent === 'growth'
            ? 'bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.06),transparent_70%)]'
            : 'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_70%)]',
        )}
      />
      <div className="relative flex items-start gap-3">
        <div
          className={cn(
            'flex shrink-0 items-center justify-center rounded-xl ring-1',
            compact ? 'h-8 w-8' : 'h-9 w-9',
            accent === 'growth'
              ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
              : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
          )}
        >
          <Icon className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
        </div>
        <div className="min-w-0">
          <h4 className={cn('font-bold tracking-[-0.02em]', compact ? 'text-[13px]' : 'text-[15px]')}>{title}</h4>
          {feature && !compact && (
            <>
              <p className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-gray-500">{feature.desc}</p>
              <div className="mt-2.5 rounded-xl bg-[#F8F8FA] p-2.5 ring-1 ring-gray-100/80">{feature.previewContent}</div>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

function EcosystemCanvas({ activeTab }: { activeTab: TabId }) {
  const features = activeTab === 'growth' ? growthFeatures : collegeFeatures
  const satellites = activeTab === 'growth' ? growthSatellites : collegeSatellites
  const [hero, second, third] = features

  return (
    <div className="relative min-h-[420px] lg:min-h-[460px]">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-8 rounded-[40px] opacity-60',
          activeTab === 'growth'
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_65%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_65%)]',
        )}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -bottom-6 -right-4 h-48 w-56 rounded-full opacity-70 lg:h-56 lg:w-64',
          activeTab === 'growth'
            ? 'bg-[radial-gradient(circle,rgba(124,58,237,0.1),transparent_70%)]'
            : 'bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_70%)]',
        )}
      />
      <ConnectorLines accent={activeTab} />
      <FloatingStatCard accent={activeTab} />

      <div className="relative z-10 grid h-full grid-cols-12 gap-3 lg:gap-4">
        <div className="col-span-12 lg:col-span-7 lg:row-span-2">
          <HeroCard feature={hero} accent={activeTab} />
        </div>

        <div className="col-span-6 lg:col-span-5 lg:-mt-6 lg:translate-x-2">
          <SatelliteCard feature={second} accent={activeTab} delay={0.12} className="lg:rotate-[1.5deg]" />
        </div>

        <div className="col-span-6 lg:col-span-5 lg:col-start-8 lg:-mt-4">
          <SatelliteCard feature={third} accent={activeTab} delay={0.2} className="lg:-rotate-[1deg]" />
        </div>

        {satellites.slice(0, activeTab === 'growth' ? 4 : 3).map((label, i) => (
          <div
            key={label}
            className={cn(
              'col-span-4 lg:col-span-3',
              i === 0 && 'lg:col-start-2 lg:-mt-2',
              i === 1 && 'lg:col-start-5 lg:mt-1',
              i === 2 && 'lg:col-start-8 lg:-mt-3',
              i === 3 && 'lg:col-start-10 lg:mt-2',
            )}
          >
            <SatelliteCard label={label} accent={activeTab} compact delay={0.28 + i * 0.06} />
          </div>
        ))}
      </div>

      {activeTab === 'college' && (
        <div className="trust-callout relative z-20 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-[20px]">🛡️</span>
            <div>
              <h4 className="mb-1.5 text-[14px] font-bold text-[#92400E]">Verified Workspaces Only</h4>
              <p className="text-[13px] font-medium leading-relaxed text-[#B45309]">
                Each campus workspace goes live only after a verified student admin activates and manages it.<br />
                We don&apos;t create empty campuses.<br />
                Quality over scale — always.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileFeatureCarousel({ features, accent }: { features: Feature[]; accent: TabId }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative -mx-5 sm:-mx-6">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide sm:px-6"
      >
        {features.map((feature) => (
          <article
            key={feature.title}
            className="w-[min(88vw,320px)] shrink-0 snap-center overflow-hidden rounded-[24px] border border-gray-200/70 bg-white p-5 shadow-[0_16px_48px_rgba(124,58,237,0.08)]"
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1',
                  accent === 'growth'
                    ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
                    : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-[16px] font-bold">{feature.title}</h4>
                  <span className={cn('shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase', feature.tagColor)}>
                    {feature.tag}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-gray-500">{feature.desc}</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-[#F8F8FA] p-3 ring-1 ring-gray-100/80">{feature.previewContent}</div>
          </article>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {features.map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-gray-200" />
        ))}
      </div>
    </div>
  )
}

function TabToggle({ 
  activeTab, 
  setActiveTab,
  layoutIdPrefix = 'desktop'
}: { 
  activeTab: TabId; 
  setActiveTab: (t: TabId) => void;
  layoutIdPrefix?: string;
}) {
  return (
    <div className="inline-flex w-full max-w-[280px] rounded-2xl bg-[#F0F0F4] p-1 ring-1 ring-gray-200/80 sm:max-w-none">
      {([
        { id: 'growth' as const, label: 'Growth', icon: Globe },
        { id: 'college' as const, label: 'College', icon: BookOpen },
      ]).map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'relative flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-bold transition-colors sm:px-6',
            activeTab === tab.id ? 'text-foreground' : 'text-gray-500',
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId={`${layoutIdPrefix}-inside-ecosystem-tab`}
              className="absolute inset-0 rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
            />
          )}
          <tab.icon className="relative z-10 h-4 w-4" />
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

function LeftColumn({ activeTab }: { activeTab: TabId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col"
      >
        {activeTab === 'growth' ? (
          <>
            <h3 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.035em] xl:text-[1.75rem]">
              Everything beyond your college.
            </h3>
            <p className="mt-2 max-w-sm text-[14px] font-medium leading-snug text-gray-500">
              Find opportunities, build teams, and connect with peers from engineering campuses across Telangana & Andhra Pradesh.
            </p>
          </>
        ) : (
          <>
            <div className="mb-1.5 flex items-center gap-2">
              <span className="text-[18px]">🏫</span>
              <span className="eyebrow-label !mb-0">COLLEGE</span>
            </div>
            <h3 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.035em] xl:text-[1.75rem]">
              Everything inside your college.
            </h3>
            <p className="mt-2 max-w-sm text-[14px] font-medium leading-snug text-gray-500">
              Notes, events, and resources — verified and organised.
            </p>
            <div className="mt-2.5">
              <span className="inline-flex rounded-full border border-[#6EE7B7] bg-[#D1FAE5] px-3 py-1 text-[11px] font-semibold text-[#065F46]">
                Activated by a verified student admin
              </span>
            </div>
          </>
        )}

        <div className="mt-4">
          <HighlightChips accent={activeTab} />
        </div>

        <div className="mt-5 hidden lg:block">
          <p className="mb-2 text-[14px] font-medium text-[#374151]">Don&apos;t see your college?</p>
          <a
            href={ADMIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="naavik-btn naavik-btn-secondary inline-flex !rounded-2xl px-5 py-3 text-[14px] font-bold text-[var(--purple-600)]"
          >
            Apply to bring Naavik to your campus →
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function InsideNaavik() {
  const [activeTab, setActiveTab] = useState<TabId>('growth')
  const activeFeatures = activeTab === 'growth' ? growthFeatures : collegeFeatures

  return (
    <Section id="inside-naavik" surface="white" pad="compact">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(124,58,237,0.04),transparent_60%)]"
      />

      <PageContainer size="full" className="relative">
        {/* Desktop — premium split */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,35%)_minmax(0,65%)] lg:items-start lg:gap-10 xl:gap-14">
          <div className="sticky top-28 space-y-4 bg-white">
            <Eyebrow tone="purple">Inside Naavik</Eyebrow>
            <h2 className="text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.04em] xl:text-[2.75rem]">
              Two spaces. Everything you{' '}
              <span className="text-[var(--purple-600)]">need.</span>
            </h2>
            <p className="max-w-sm text-[14px] font-medium leading-snug text-gray-500">
              One for your growth, one for your college — together in one app.
            </p>

            <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />
            <LeftColumn activeTab={activeTab} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: premiumEasing }}
            >
              <EcosystemCanvas activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile — dedicated layout */}
        <div className="lg:hidden">
          <Reveal>
            <Eyebrow tone="purple">Inside Naavik</Eyebrow>
            <h2 className="mt-3 text-[1.875rem] font-extrabold leading-[1.08] tracking-[-0.035em]">
              Two spaces. Everything you{' '}
              <span className="text-[var(--purple-600)]">need.</span>
            </h2>
            <p className="mt-3 text-[14px] font-medium leading-snug text-gray-500">
              One for your growth, one for your college — together in one app.
            </p>
          </Reveal>

          <div className="mt-5">
            <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} layoutIdPrefix="mobile" />
          </div>

          <div className="mt-4">
            <LeftColumn activeTab={activeTab} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <MobileFeatureCarousel features={activeFeatures} accent={activeTab} />
              {activeTab === 'college' && (
                <div className="trust-callout mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[20px]">🛡️</span>
                    <div>
                      <h4 className="mb-1.5 text-[14px] font-bold text-[#92400E]">Verified Workspaces Only</h4>
                      <p className="text-[13px] font-medium leading-relaxed text-[#B45309]">
                        Each campus workspace goes live only after a verified student admin activates and manages it.<br />
                        We don&apos;t create empty campuses.<br />
                        Quality over scale — always.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <Reveal delay={120}>
            <div className="mt-8 text-center">
              <p className="mb-3 text-[16px] font-medium text-[#374151]">Don&apos;t see your college?</p>
              <a
                href={ADMIN_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="naavik-btn naavik-btn-secondary inline-flex w-full !rounded-2xl px-6 font-bold text-[var(--purple-600)] sm:w-auto"
              >
                Apply to bring Naavik to your campus →
              </a>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </Section>
  )
}
