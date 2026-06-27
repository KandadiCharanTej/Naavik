'use client'

import { useState } from 'react'
import { Reveal, premiumEasing } from '@/components/animations/reveal'
import { ADMIN_FORM_URL } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, BookOpen, Users, Trophy, Globe, type LucideIcon } from 'lucide-react'
import {
  PageContainer,
  Section,
  SectionHeader,
  Eyebrow,
  Divider,
} from '@/components/design/primitives'
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

const growthChips = [
  '100+ Opportunities Monthly',
  'Project Showcase',
  'Team Finder',
  'Public Student Feed',
  'Student Communities',
  'Hackathons',
  'Internships',
  'Workshops',
  'Startup Opportunities',
]

const collegeChips = [
  '📁 Notes',
  '📄 PYQs',
  '🧪 Lab Manuals',
  '📢 Announcements',
  '🎪 Clubs',
  '📅 Events',
  '🎓 Seniors',
  '🏆 Leaderboard',
  '📚 Resources',
]

function BentoFeature({
  feature,
  index,
  accent,
}: {
  feature: Feature
  index: number
  accent: 'growth' | 'college'
}) {
  const isHero = index === 0
  const isAlt = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: premiumEasing }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]',
        isHero && 'md:col-span-2',
        isAlt && 'bg-[#FAFAFC]',
      )}
    >
      <div
        className={cn(
          'absolute inset-y-0 left-0 w-1',
          accent === 'growth'
            ? 'bg-gradient-to-b from-[var(--purple-400)] to-[var(--purple-600)]'
            : 'bg-gradient-to-b from-emerald-400 to-emerald-600',
        )}
      />
      <div className={cn('p-5 sm:p-6', isHero && 'lg:p-7')}>
        <div className={cn('flex gap-4', isHero && 'lg:gap-6 lg:items-start')}>
          <div
            className={cn(
              'flex shrink-0 items-center justify-center rounded-xl ring-1',
              isHero ? 'h-12 w-12 lg:h-14 lg:w-14' : 'h-10 w-10',
              accent === 'growth'
                ? 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]'
                : 'bg-emerald-50 text-emerald-700 ring-emerald-100',
            )}
          >
            <feature.icon className={cn(isHero ? 'h-6 w-6' : 'h-5 w-5')} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h4 className={cn('font-bold tracking-[-0.02em]', isHero ? 'text-[18px] lg:text-[20px]' : 'text-[16px]')}>
                {feature.title}
              </h4>
              <span
                className={cn(
                  'shrink-0 rounded-full border border-gray-100 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                  feature.tagColor,
                )}
              >
                {feature.tag}
              </span>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{feature.desc}</p>
            <div
              className={cn(
                'mt-4 rounded-xl bg-[#F8F8FA] p-3 ring-1 ring-gray-100/80',
                isHero && 'lg:p-4',
              )}
            >
              {feature.previewContent}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function InsideNaavik() {
  const [activeTab, setActiveTab] = useState<TabId>('growth')
  const activeFeatures = activeTab === 'growth' ? growthFeatures : collegeFeatures

  return (
    <Section id="inside-naavik" surface="white">
      <PageContainer size="wide">
        <Reveal>
          <SectionHeader
            eyebrow={<Eyebrow tone="purple">Inside Naavik</Eyebrow>}
            title={
              <>
                Two spaces. Everything you{' '}
                <span className="text-[var(--purple-600)]">need.</span>
              </>
            }
            lead="Two connected spaces — one for your growth, one for your college. Everything outside your classroom and everything inside your campus, together in one app."
          />
        </Reveal>

        {/* Segmented tab control — connected spaces bridge */}
        <div className="mt-10 lg:mt-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
              <span className={cn('transition-colors', activeTab === 'growth' && 'text-[var(--purple-600)]')}>Growth</span>
              <span aria-hidden className="text-gray-300">↔</span>
              <span className={cn('transition-colors', activeTab === 'college' && 'text-emerald-700')}>College</span>
            </div>
            <div className="inline-flex rounded-2xl bg-[#F3F3F6] p-1 ring-1 ring-gray-200/80">
              {([
                { id: 'growth' as const, label: 'Growth', icon: Globe },
                { id: 'college' as const, label: 'College', icon: BookOpen },
              ]).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-bold transition-all sm:px-8',
                    activeTab === tab.id ? 'text-foreground' : 'text-gray-500',
                  )}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="inside-tab"
                      className="absolute inset-0 rounded-xl bg-white shadow-[var(--shadow-card)]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <tab.icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: premiumEasing }}
            className="mt-10 lg:mt-14"
          >
            {/* Magazine layout: editorial column + asymmetric bento */}
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                {activeTab === 'growth' ? (
                  <div>
                    <h3 className="text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2rem]">
                      Everything beyond your college.
                    </h3>
                    <p className="mt-4 text-[16px] font-medium leading-relaxed text-gray-500">
                      Find opportunities, build teams, and connect with peers from engineering campuses across Telangana & Andhra Pradesh.
                    </p>
                    <Divider className="my-6" />
                    <div className="flex flex-wrap gap-2">
                      {growthChips.map((f, i) => (
                        <span key={i} className="chip-growth">{f}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[20px]">🏫</span>
                      <span className="eyebrow-label !mb-0">COLLEGE</span>
                    </div>
                    <h3 className="text-[1.625rem] font-extrabold leading-tight tracking-[-0.03em] sm:text-[2rem]">
                      Everything inside your college.
                    </h3>
                    <p className="mt-4 text-[16px] font-medium leading-relaxed text-gray-500">
                      Notes, events, and resources — verified and organised.
                    </p>
                    <div className="mt-4">
                      <span className="inline-flex rounded-full border border-[#6EE7B7] bg-[#D1FAE5] px-3 py-1 text-[12px] font-semibold text-[#065F46]">
                        Activated by a verified student admin
                      </span>
                    </div>
                    <Divider className="my-6" />
                    <div className="flex flex-wrap gap-2">
                      {collegeChips.map((f, i) => (
                        <span key={i} className="chip-college">{f}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <div
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute -inset-4 rounded-3xl opacity-60 blur-2xl',
                    activeTab === 'growth'
                      ? 'bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_70%)]'
                      : 'bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_70%)]',
                  )}
                />
                <div className="relative grid gap-4 md:grid-cols-2 md:gap-5">
                  {activeFeatures.map((feature, idx) => (
                    <BentoFeature
                      key={feature.title}
                      feature={feature}
                      index={idx}
                      accent={activeTab}
                    />
                  ))}
                </div>

                {activeTab === 'college' && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25, ease: premiumEasing }}
                    className="trust-callout mt-5"
                  >
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
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={200}>
          <div className="mt-14 text-center lg:mt-20">
            <p className="mb-3 text-[16px] font-medium text-[#374151]">Don&apos;t see your college?</p>
            <a
              href={ADMIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="naavik-btn naavik-btn-secondary inline-flex !rounded-2xl px-6 font-bold text-[var(--purple-600)]"
            >
              Apply to bring Naavik to your campus →
            </a>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  )
}
