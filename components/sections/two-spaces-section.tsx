'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  Trophy,
  Users,
  Rocket,
  BookOpen,
  FileText,
  Globe,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { PageContainer, Section, Eyebrow } from '@/components/design/primitives'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

type TabId = 'growth' | 'college'

type Feature = {
  title: string
  desc: string
  icon: any
  tag: string
  tagColor: string
  previewContent: React.ReactNode
}

const growthFeatures: Feature[] = [
  {
    title: 'Opportunities',
    desc: 'Find internships, full-time jobs, and scholarships filtered for your branch and year.',
    icon: Briefcase,
    tag: 'Featured',
    tagColor: 'text-orange-600 border-orange-100 bg-orange-50',
    previewContent: (
      <div className="flex flex-col gap-2.5 text-left">
        <div className="flex items-start justify-between">
          <div>
            <h5 className="text-[13.5px] font-extrabold text-gray-900 sm:text-[14.5px]">Software Engineering Intern</h5>
            <p className="text-[11px] font-bold text-gray-400">Google</p>
          </div>
          <span className="shrink-0 rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 sm:text-[11px]">₹35k/mo</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-gray-500 font-semibold">
          <span>Bengaluru (Hybrid)</span>
          <span>•</span>
          <span className="text-orange-600">Ends July 15</span>
          <span>•</span>
          <span className="inline-flex items-center gap-0.5 text-emerald-700 font-extrabold bg-emerald-50/50 px-1 py-0.2 rounded">
            ✓ Verified
          </span>
        </div>
        <div className="flex gap-1.5 mt-0.5">
          <span className="rounded bg-gray-150 px-2 py-0.5 text-[9.5px] text-gray-600 font-extrabold">React</span>
          <span className="rounded bg-gray-150 px-2 py-0.5 text-[9.5px] text-gray-600 font-extrabold">Next.js</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Hackathons',
    desc: 'Team up and compete in regional and national hackathons.',
    icon: Trophy,
    tag: 'Live Now',
    tagColor: 'text-purple-600 border-purple-100 bg-purple-50',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-start justify-between">
          <span className="text-[13px] font-extrabold text-gray-900">Smart India Hackathon 2026</span>
          <span className="shrink-0 text-[11px] font-bold text-[var(--purple-600)]">₹2L Prize</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] text-gray-500 font-semibold">
          <span>Team: 2-4 members</span><span>•</span><span className="text-orange-600">Reg Ends: July 25</span>
        </div>
        <div className="flex gap-1.5 mt-0.5">
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600 font-extrabold">AI/ML</span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600 font-extrabold">Web3</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Connect',
    desc: 'Find and chat with classmates or teammate co-founders across campuses.',
    icon: Users,
    tag: 'Community',
    tagColor: 'text-blue-600 border-blue-100 bg-blue-50',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-start justify-between">
          <div>
            <h5 className="text-[13px] font-extrabold text-gray-900">Sai Teja</h5>
            <p className="text-[10.5px] font-bold text-gray-400">VNR VJIET · CSE 3rd Year</p>
          </div>
          <button className="shrink-0 rounded-full bg-[var(--purple-600)] px-3 py-1 text-[10px] font-extrabold text-white hover:bg-[var(--purple-750)] transition-all duration-200 cursor-pointer">
            Connect
          </button>
        </div>
        <div className="space-y-0.5 text-[11px] text-gray-600 font-medium">
          <div><span className="text-gray-400 font-bold">Project:</span> Peer-to-peer delivery app</div>
          <div><span className="text-gray-400 font-bold">Skills:</span> Flutter, Firebase, Node.js</div>
          <div><span className="text-gray-400 font-bold">Looking For:</span> Backend Dev (PostgreSQL)</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Project Hub',
    desc: 'Showcase your builds, get feedback, and build a public portfolio.',
    icon: Rocket,
    tag: 'Builds',
    tagColor: 'text-emerald-600 border-emerald-100 bg-emerald-50',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-start justify-between">
          <span className="text-[13px] font-extrabold text-gray-900">Naavik Dev Dashboard</span>
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-extrabold">
            <span>⭐ 14</span>
            <span>🍴 3</span>
          </div>
        </div>
        <div className="flex gap-2.5 text-[11.5px] font-bold">
          <span className="text-blue-600 hover:underline cursor-pointer">GitHub</span>
          <span className="text-gray-300">|</span>
          <span className="text-emerald-600 hover:underline cursor-pointer">Live Demo</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-0.5">
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600 font-extrabold">Next.js</span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600 font-extrabold">Supabase</span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-600 font-extrabold">Tailwind</span>
        </div>
      </div>
    ),
  },
]

const collegeFeatures: Feature[] = [
  {
    title: 'Study Vault',
    desc: 'Semester-wise study materials, notes, lab manuals, and previous year papers.',
    icon: BookOpen,
    tag: '📁 Resources',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    previewContent: (
      <div className="flex flex-col gap-3 text-left">
        <div className="flex items-start justify-between">
          <div>
            <h5 className="text-[13.5px] font-extrabold text-gray-900 sm:text-[14.5px]">DBMS Prev. Year Paper 2025</h5>
            <p className="text-[11px] font-bold text-gray-400">CSE · Semester 4</p>
          </div>
          <span className="shrink-0 rounded bg-emerald-50 px-2 py-0.5 text-[9.5px] font-extrabold text-emerald-600 uppercase tracking-wider">
            Verified PDF
          </span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-gray-400 font-semibold">
          <span>Uploader: E. Sai (Senior Admin)</span>
          <span>Downloads: 142</span>
        </div>
        <button className="w-full rounded-xl bg-gray-900 py-2.5 text-[12.5px] font-bold text-white hover:bg-gray-800 transition-all duration-200 cursor-pointer">
          Download PDF
        </button>
      </div>
    ),
  },
  {
    title: 'College Updates',
    desc: 'Official announcements, circulars, department events, and holiday notices.',
    icon: FileText,
    tag: '📢 Updates',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-start justify-between">
          <span className="text-[13px] font-extrabold text-gray-900">Convergence Tech Fest 2026</span>
          <span className="text-[10.5px] font-bold text-blue-600 uppercase">Dept: CSE</span>
        </div>
        <p className="text-[11px] leading-relaxed text-gray-500 font-semibold line-clamp-1">
          IEEE Student Branch · Prize Pool: ₹30,000 · March 15-18
        </p>
        <button className="w-full rounded-lg border border-gray-200 bg-white py-1.5 text-[11px] font-bold text-gray-700 hover:bg-gray-50 cursor-pointer">
          View Details
        </button>
      </div>
    ),
  },
  {
    title: 'Events & Clubs',
    desc: 'Stay updated with campus technical clubs and upcoming workshops.',
    icon: Globe,
    tag: '🎉 Clubs',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[13px] font-extrabold text-gray-900">Intro to Web3 Workshop</span>
            <p className="text-[10px] font-bold text-gray-400">GDSC CBIT Branch</p>
          </div>
          <span className="shrink-0 text-[10.5px] font-bold text-emerald-600 uppercase">Reg Open</span>
        </div>
        <button className="w-full rounded-lg bg-[var(--purple-600)] py-1.5 text-[11px] font-bold text-white hover:bg-[var(--purple-750)] cursor-pointer">
          Register Now
        </button>
      </div>
    ),
  },
  {
    title: 'College Feed',
    desc: 'Anonymous questions, campus chat rooms, and peer-to-peer discussions.',
    icon: MessageSquare,
    tag: '💬 Feed',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    previewContent: (
      <div className="flex flex-col gap-2 text-left">
        <p className="text-[12px] font-bold text-gray-800 leading-snug">
          &quot;Is the DBMS mid-term syllabus strictly from unit-3 or unit-4 as well?&quot;
        </p>
        <div className="flex items-center justify-between text-[11px] text-gray-400 font-bold">
          <span>💬 12 replies</span>
          <span>❤️ 24 likes</span>
          <span>Active 2m ago</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Leaderboards',
    desc: 'Earn points and get recognized by contributing resources to your campus.',
    icon: Trophy,
    tag: '🏆 Leaders',
    tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
    previewContent: (
      <div className="flex flex-col gap-1.5 text-left">
        <div className="flex items-center justify-between border-b border-gray-100 py-1 text-[13px] font-bold text-gray-700">
          <span>E. Sai (CBIT)</span>
          <div className="flex items-center gap-1.5"><span className="font-extrabold text-gray-900">490 pts</span> 🥇</div>
        </div>
        <div className="flex items-center justify-between py-1 text-[13px] font-bold text-gray-700">
          <span>V. Keerthi (VNR VJIET)</span>
          <div className="flex items-center gap-1.5"><span className="font-extrabold text-gray-900">430 pts</span> 🥈</div>
        </div>
      </div>
    ),
  },
]

const growthHighlights = [
  { label: '💼 Opportunities' },
  { label: '🤝 Connect' },
  { label: '🚀 Project Hub' },
  { label: '📢 Growth Feed' },
]

const collegeHighlights = [
  { label: '📢 Updates' },
  { label: '💬 College Feed' },
  { label: '📚 Study Vault' },
  { label: '🎉 Events' },
]

const growthSatellites = [
  'Internships',
  'Jobs',
  'Hackathons',
  'Projects',
  'Startups',
  'Open Source',
  'AI',
  'Workshops',
]

const collegeSatellites = [
  'Announcements',
  'Events',
  'Clubs',
  'Resources',
  'Seniors',
  'Discussions',
  'Verify',
]

function HighlightChips({ accent }: { accent: TabId }) {
  const items = accent === 'growth' ? growthHighlights : collegeHighlights
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <span
          key={item.label}
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold shadow-[0_2px_12px_rgba(0,0,0,0.03)] ring-1 transition-transform duration-200 hover:scale-[1.02]',
            accent === 'growth'
              ? 'bg-white text-[var(--purple-700)] ring-[var(--purple-100)]'
              : 'bg-white text-emerald-800 ring-emerald-100',
          )}
        >
          {item.label}
        </span>
      ))}
    </div>
  )
}

function HeroCard({ feature, accent }: { feature: Feature; accent: TabId }) {
  return (
    <article className="transform-gpu relative overflow-hidden rounded-[24px] border border-gray-200/80 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8">
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-40 blur-3xl',
          accent === 'growth' ? 'bg-[var(--purple-150)]' : 'bg-emerald-100',
        )}
      />
      <div className="relative flex flex-col gap-5 sm:gap-6">
        <div
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 hover:scale-105',
            accent === 'growth'
              ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
              : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
          )}
        >
          <feature.icon className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-[19px] font-extrabold tracking-[-0.025em] text-gray-900 lg:text-[21px]">{feature.title}</h4>
            <span className={cn('shrink-0 rounded-full border border-gray-150 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider', feature.tagColor)}>
              {feature.tag}
            </span>
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-gray-500 font-semibold">{feature.desc}</p>
          <div className="mt-5 rounded-2xl bg-[#F8F8FA] p-5 ring-1 ring-gray-100/60 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">{feature.previewContent}</div>
        </div>
      </div>
    </article>
  )
}

function SupportingCard({ feature, accent }: { feature: Feature; accent: TabId }) {
  const Icon = feature.icon ?? Briefcase

  return (
    <article
      className="group transform-gpu relative overflow-hidden rounded-[24px] border border-gray-200/60 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
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
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105',
              accent === 'growth'
                ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
                : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
            )}
          >
            <Icon className="h-4.5 w-4.5" />
          </div>
          <span className={cn('shrink-0 rounded-full border border-gray-150 bg-white px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider', feature.tagColor)}>
            {feature.tag}
          </span>
        </div>
        <div className="min-w-0">
          <h4 className="text-[14.5px] font-extrabold text-gray-900 tracking-[-0.015em] sm:text-[15px]">{feature.title}</h4>
          <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500 font-semibold">{feature.desc}</p>
          <div className="mt-4 rounded-xl bg-[#F8F8FA] p-3.5 ring-1 ring-gray-100/60 shadow-sm">{feature.previewContent}</div>
        </div>
      </div>
    </article>
  )
}

function EcosystemCanvas({ activeTab }: { activeTab: TabId }) {
  const isGrowth = activeTab === 'growth'
  const features = isGrowth ? growthFeatures : collegeFeatures
  const [heroCard, ...supportingCards] = features
  const satellites = isGrowth ? growthSatellites : collegeSatellites

  return (
    <div className="relative">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-10 rounded-[50px] opacity-40 blur-3xl transition-colors duration-500',
          isGrowth
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_65%)]'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_65%)]',
        )}
      />

      {/* Spacious asymmetric layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        {/* Left Side: Hero Card */}
        <div className="col-span-1 lg:col-span-6">
          <div className="lg:sticky lg:top-36">
            <HeroCard feature={heroCard} accent={activeTab} />
          </div>
        </div>

        {/* Right Side: Staggered supporting cards to let whitespace act as design element */}
        <div className="col-span-1 lg:col-span-6">
          <div className="flex flex-col gap-8">
            {supportingCards.map((feature, idx) => {
              const alignRight = idx % 2 === 1
              return (
                <div 
                  key={feature.title} 
                  className={cn(
                    "w-full grid grid-cols-1 md:grid-cols-12 gap-6",
                    alignRight ? "justify-end" : "justify-start"
                  )}
                >
                  {/* Empty Spacer Column for Asymmetric grid spacing on desktop */}
                  {alignRight && <div className="hidden md:block md:col-span-3 lg:col-span-4" aria-hidden />}
                  
                  <div className="md:col-span-9 lg:col-span-8">
                    <SupportingCard feature={feature} accent={activeTab} />
                  </div>
                  
                  {!alignRight && <div className="hidden md:block md:col-span-3 lg:col-span-4" aria-hidden />}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Quick Tags bottom section with generous spacing */}
      <div className="mt-12 border-t border-gray-150 pt-8 relative z-20">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-[11.5px] font-extrabold uppercase tracking-widest text-gray-400 shrink-0">
            Quick Tags
          </span>
          <div className="flex flex-wrap gap-2">
            {satellites.map((label, i) => (
              <span
                key={label}
                className={cn(
                  'inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default',
                  isGrowth
                    ? 'border-purple-100 bg-white text-[var(--purple-700)] hover:border-[var(--purple-300)] hover:text-[var(--purple-800)]'
                    : 'border-emerald-100 bg-white text-emerald-800 hover:border-emerald-300 hover:text-emerald-900',
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Workspaces Only callout with clean top spacing */}
      {activeTab === 'college' && (
        <div className="trust-callout relative z-20 mt-8">
          <div className="flex items-start gap-3">
            <span className="text-[20px]">🛡️</span>
            <div>
              <h4 className="mb-1.5 text-[14px] font-bold text-[#92400E]">Verified Workspaces Only</h4>
              <p className="text-[13px] font-semibold leading-relaxed text-[#B45309]">
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

function TabToggle({
  activeTab,
  setActiveTab,
  layoutIdPrefix = 'desktop',
}: {
  activeTab: TabId
  setActiveTab: (t: TabId) => void
  layoutIdPrefix?: string
}) {
  return (
    <div className="inline-flex w-full max-w-[280px] rounded-2xl bg-[#F0F0F4] p-1 ring-1 ring-gray-200/80 sm:max-w-none">
      {[
        { id: 'growth' as const, label: 'Growth', icon: Globe },
        { id: 'college' as const, label: 'College', icon: BookOpen },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            'relative flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-[14px] font-bold transition-colors sm:px-6 cursor-pointer',
            activeTab === tab.id ? 'text-gray-900' : 'text-gray-500',
          )}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId={`${layoutIdPrefix}-two-spaces-tab`}
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
            <p className="mt-2 max-w-sm text-[14px] font-semibold leading-relaxed text-gray-500">
              Discover opportunities, build projects, connect with engineering students and grow beyond your own campus.
            </p>
          </>
        ) : (
          <>
            <h3 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.035em] xl:text-[1.75rem]">
              Everything inside your college.
            </h3>
            <p className="mt-2 max-w-sm text-[14px] font-semibold leading-relaxed text-gray-500">
              Verified announcements, student discussions, clubs, events and organized study resources.
            </p>
          </>
        )}

        <div className="mt-6">
          <HighlightChips accent={activeTab} />
        </div>

        <div className="mt-8 hidden lg:block">
          <p className="mb-2 text-[14px] font-bold text-[#374151]">Don&apos;t see your college?</p>
          <a
            href={ADMIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="naavik-btn naavik-btn-secondary inline-flex !rounded-2xl px-5 py-3 text-[14px] font-bold text-[var(--purple-600)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply to bring Naavik to your campus →
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export function TwoSpacesSection() {
  const [activeTab, setActiveTab] = useState<TabId>('growth')

  return (
    <Section id="inside-naavik" surface="white" pad="compact">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(124,58,237,0.04),transparent_60%)]"
      />

      <PageContainer size="full" className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,32%)_minmax(0,68%)] lg:items-start lg:gap-14">
          {/* Left Column Sticky Section */}
          <div className="sticky top-28 space-y-5 bg-white z-10">
            <Eyebrow tone="purple">INSIDE NAAVIK</Eyebrow>
            <h2 className="text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.04em] xl:text-[2.75rem]">
              Two spaces. Everything you{' '}
              <span className="text-[var(--purple-600)]">need.</span>
            </h2>
            <p className="max-w-sm text-[14.5px] font-semibold leading-relaxed text-gray-500">
              One for your growth, one for your college — together in one app.
            </p>

            <TabToggle activeTab={activeTab} setActiveTab={setActiveTab} />
            <LeftColumn activeTab={activeTab} />
          </div>

          {/* Right Column Layout Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="w-full"
            >
              <EcosystemCanvas activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Campus Apply Button */}
        <div className="mt-8 text-center lg:hidden">
          <p className="mb-3 text-[15px] font-semibold text-[#374151]">Don&apos;t see your college?</p>
          <a
            href={ADMIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="naavik-btn naavik-btn-secondary inline-flex w-full !rounded-2xl px-6 py-3 font-bold text-[var(--purple-600)] sm:w-auto"
          >
            Apply to bring Naavik to your campus →
          </a>
        </div>
      </PageContainer>
    </Section>
  )
}
