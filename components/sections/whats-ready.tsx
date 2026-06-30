import { Reveal } from '@/components/animations/reveal'
import {
  Briefcase,
  BookOpen,
  Users,
  Rocket,
  Building2,
  Trophy,
  Sparkles,
  UserCheck,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageContainer, Section, Eyebrow } from '@/components/design/primitives'

const iconMap: Record<string, LucideIcon> = {
  Opportunities: Briefcase,
  'Study Vault': BookOpen,
  'Project Hub': Rocket,
  Connect: Users,
  'College Hub': Building2,
  'Campus Updates': MessageSquare,
  Leaderboards: Trophy,
  'AI Study Assistant': Sparkles,
  'Recruiter Hub': UserCheck,
  'Placement Reviews': BookOpen,
  'Clubs & Alumni': Users,
}

type FeatureItem = {
  name: string
  desc: string
}

const dayOne: FeatureItem[] = [
  {
    name: 'Opportunities',
    desc: 'Find internships, hackathons and scholarships filtered for your branch and year.',
  },
  {
    name: 'Study Vault',
    desc: 'Notes, PYQs, and semester study materials uploaded and verified by student admins.',
  },
  {
    name: 'Project Hub',
    desc: 'Showcase your builds to peers, founders, and recruiters looking for student developers.',
  },
  {
    name: 'Connect',
    desc: 'Find and chat with teammates for hackathons from colleges across TG & AP.',
  },
]

const comingSoon: FeatureItem[] = [
  {
    name: 'College Hub',
    desc: 'Your private campus hub for notes, announcements, and community.',
  },
  {
    name: 'Campus Updates',
    desc: "Verified fests and official notices from your college — before they're buried.",
  },
  {
    name: 'Leaderboards',
    desc: 'Recognition for students who contribute the most to their campus community.',
  },
]

const future: FeatureItem[] = [
  {
    name: 'AI Study Assistant',
    desc: 'Semantic search across notes and study vaults — find anything in seconds.',
  },
  {
    name: 'Recruiter Hub',
    desc: 'Get found by companies based on your verified projects and skills.',
  },
  {
    name: 'Placement Reviews',
    desc: 'Verified interview experiences from your seniors at top companies.',
  },
  {
    name: 'Clubs & Alumni',
    desc: 'Connect with active student chapters and graduates from your college.',
  },
]

function GroupLabel({
  title,
  variant,
}: {
  title: string
  variant: 'dayOne' | 'coming' | 'future'
}) {
  const styles = {
    dayOne: 'border-emerald-250/80 bg-gradient-to-r from-emerald-50/90 to-white text-emerald-800 shadow-sm',
    coming: 'border-amber-250/80 bg-gradient-to-r from-amber-50/80 to-white text-amber-900 shadow-sm',
    future: 'border-[var(--purple-200)] bg-gradient-to-r from-[var(--purple-50)]/80 to-white text-[var(--purple-800)] shadow-sm',
  }

  return (
    <div className={cn('inline-flex items-center rounded-full border px-4 py-1.5', styles[variant])}>
      <span className="text-[10px] font-bold uppercase tracking-[0.14em] sm:text-[11px]">{title}</span>
    </div>
  )
}

function DayOneCard({ item, delay }: { item: FeatureItem; delay: number }) {
  const Icon = iconMap[item.name] ?? Briefcase

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-emerald-100/80 bg-white p-4 shadow-[0_8px_32px_rgba(16,185,129,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_48px_rgba(16,185,129,0.1)] sm:p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-100/50 blur-2xl transition-opacity group-hover:opacity-85"
        />
        <span className="relative mb-3.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="relative text-[15px] font-extrabold tracking-[-0.02em] text-gray-900 sm:text-[16px]">{item.name}</h4>
        <p className="relative mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-gray-500 font-medium sm:text-[13px]">{item.desc}</p>
      </article>
    </Reveal>
  )
}

function CompactCard({
  item,
  delay,
  variant,
}: {
  item: FeatureItem
  delay: number
  variant: 'coming' | 'future'
}) {
  const Icon = iconMap[item.name] ?? Briefcase
  const isFuture = variant === 'future'

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          'group flex h-full items-start gap-3 rounded-[24px] border p-3.5 transition-all duration-300 sm:p-4',
          isFuture
            ? 'border-gray-200/70 bg-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[var(--purple-200)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.06)]'
            : 'border-amber-100/70 bg-white shadow-[0_4px_20px_rgba(245,158,11,0.04)] hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_12px_32px_rgba(245,158,11,0.08)]',
        )}
      >
        <span
          className={cn(
            'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ring-1 sm:h-9 sm:w-9 transition-transform duration-300 group-hover:scale-105',
            isFuture
              ? 'bg-gray-50 text-gray-500 ring-gray-100 group-hover:bg-[var(--purple-50)] group-hover:text-[var(--purple-600)] group-hover:ring-[var(--purple-100)]'
              : 'bg-amber-50 text-amber-600 ring-amber-100',
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <h4 className={cn('font-extrabold tracking-[-0.02em] text-gray-900', isFuture ? 'text-[13px] sm:text-[14px]' : 'text-[14px]')}>
            {item.name}
          </h4>
          <p className={cn('mt-1 line-clamp-2 leading-relaxed font-medium text-gray-500', isFuture ? 'text-[11px] sm:text-[12px]' : 'text-[12.5px]')}>
            {item.desc}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export function WhatsReady() {
  return (
    <Section surface="purple" pad="compact">
      <PageContainer size="wide">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="purple">WHAT YOU GET</Eyebrow>
              <h2 className="mt-2 text-[1.875rem] font-extrabold tracking-[-0.035em] sm:text-[2.25rem] lg:text-[2.5rem]">
                Available on <span className="text-[var(--purple-600)]">Day One.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-7">
          {/* Available Day One */}
          <div>
            <GroupLabel title="✅ Available on Day One" variant="dayOne" />
            <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-3 lg:grid-cols-4 lg:gap-4">
              {dayOne.map((item, i) => (
                <DayOneCard key={item.name} item={item} delay={40 + i * 30} />
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div>
            <GroupLabel title="⏳ Coming Soon" variant="coming" />
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-3 lg:gap-4">
              {comingSoon.map((item, i) => (
                <CompactCard key={item.name} item={item} delay={160 + i * 25} variant="coming" />
              ))}
            </div>
          </div>

          {/* Long-Term Vision */}
          <div>
            <GroupLabel title="🚀 Long-Term Vision" variant="future" />
            <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-3 lg:grid-cols-4 lg:gap-4">
              {future.map((item, i) => (
                <CompactCard key={item.name} item={item} delay={240 + i * 20} variant="future" />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}
