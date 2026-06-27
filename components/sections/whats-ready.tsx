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
import {
  PageContainer,
  Section,
  SectionHeader,
  Eyebrow,
  Card,
} from '@/components/design/primitives'

const iconMap: Record<string, LucideIcon> = {
  Opportunities: Briefcase,
  'Study Vault': BookOpen,
  Projects: Rocket,
  'Connect & Team Finder': Users,
  'College Hub': Building2,
  'Campus Updates': MessageSquare,
  Leaderboards: Trophy,
  'AI Study Assistant': Sparkles,
  'Recruiter Hub': UserCheck,
  'Placement Reviews': BookOpen,
  'Clubs & Alumni': Users,
}

type FeatureCell = {
  name: string
  desc: string
  span: string
  featured?: boolean
}

type FeatureGroup = {
  title: string
  accent: string
  iconRing: string
  headerSpan: string
  items: FeatureCell[]
}

const groups: FeatureGroup[] = [
  {
    title: '✅ Available on Day One',
    accent: 'from-emerald-50/90 via-white to-white border-emerald-100/80',
    iconRing: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
    headerSpan: 'lg:col-span-12',
    items: [
      {
        name: 'Opportunities',
        desc: 'Find internships, hackathons and scholarships filtered for your branch and year.',
        span: 'sm:col-span-2 lg:col-span-6 lg:row-span-2',
        featured: true,
      },
      {
        name: 'Study Vault',
        desc: 'Notes, PYQs, and semester study materials uploaded and verified by student admins.',
        span: 'lg:col-span-3',
      },
      {
        name: 'Projects',
        desc: 'Showcase your builds to peers, founders, and recruiters looking for student developers.',
        span: 'lg:col-span-3',
      },
      {
        name: 'Connect & Team Finder',
        desc: 'Find and chat with teammates for hackathons from colleges across TG & AP.',
        span: 'sm:col-span-2 lg:col-span-6',
      },
    ],
  },
  {
    title: '⏳ Coming Next',
    accent: 'from-amber-50/70 via-white to-white border-amber-100/80',
    iconRing: 'bg-amber-50 text-amber-600 ring-amber-100',
    headerSpan: 'lg:col-span-12',
    items: [
      {
        name: 'College Hub',
        desc: 'Your private campus hub for notes, announcements, and community.',
        span: 'lg:col-span-4 lg:row-span-2',
        featured: true,
      },
      {
        name: 'Campus Updates',
        desc: "Verified fests and official notices from your college — before they're buried.",
        span: 'lg:col-span-8',
      },
      {
        name: 'Leaderboards',
        desc: 'Recognition for students who contribute the most to their campus community.',
        span: 'lg:col-span-8',
      },
    ],
  },
  {
    title: '🚀 Future Vision',
    accent: 'from-[var(--purple-50)] via-white to-white border-[var(--purple-100)]',
    iconRing: 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]',
    headerSpan: 'lg:col-span-12',
    items: [
      {
        name: 'AI Study Assistant',
        desc: 'Semantic search across notes and study vaults — find anything in seconds.',
        span: 'lg:col-span-5 lg:row-span-2',
        featured: true,
      },
      {
        name: 'Recruiter Hub',
        desc: 'Get found by companies based on your verified projects and skills.',
        span: 'lg:col-span-4',
      },
      {
        name: 'Placement Reviews',
        desc: 'Verified interview experiences from your seniors at top companies.',
        span: 'lg:col-span-3',
      },
      {
        name: 'Clubs & Alumni',
        desc: 'Connect with active student chapters and graduates from your college.',
        span: 'lg:col-span-7 lg:col-start-6',
      },
    ],
  },
]

function CategoryHeader({ title, accent, className }: { title: string; accent: string; className?: string }) {
  return (
    <div className={cn('flex items-center', className)}>
      <Card className={cn('w-full bg-gradient-to-r px-5 py-3.5', accent)}>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-700 sm:text-[12px] sm:tracking-[0.12em]">
          {title}
        </h3>
      </Card>
    </div>
  )
}

function FeatureBentoCell({
  item,
  iconRing,
  accent,
  delay,
}: {
  item: FeatureCell
  iconRing: string
  accent: string
  delay: number
}) {
  const Icon = iconMap[item.name] ?? Briefcase

  return (
    <Reveal delay={delay} className={cn('min-h-[140px]', item.span)}>
      <Card
        hover
        variant={item.featured ? 'elevated' : 'default'}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden bg-gradient-to-br p-5 sm:p-6',
          accent,
          item.featured && 'lg:p-7',
        )}
      >
        {item.featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/60 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
          />
        )}
        <div className="relative flex flex-1 flex-col">
          <span
            className={cn(
              'mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-transform duration-500 group-hover:scale-105',
              iconRing,
              item.featured && 'h-11 w-11',
            )}
          >
            <Icon className={cn('h-4 w-4', item.featured && 'h-5 w-5')} />
          </span>
          <h4 className={cn('font-bold text-foreground', item.featured ? 'text-[18px] sm:text-[20px]' : 'text-[16px]')}>
            {item.name}
          </h4>
          <p
            className={cn(
              'mt-2 flex-1 leading-relaxed text-gray-500',
              item.featured ? 'text-[14px] sm:text-[15px]' : 'text-[14px]',
            )}
          >
            {item.desc}
          </p>
        </div>
      </Card>
    </Reveal>
  )
}

export function WhatsReady() {
  let cellIndex = 0

  return (
    <Section surface="purple">
      <PageContainer size="wide">
        <Reveal>
          <SectionHeader
            eyebrow={<Eyebrow tone="purple">WHAT YOU GET</Eyebrow>}
            title={
              <>
                Available at <span className="text-[var(--purple-600)]">launch.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-4">
          {groups.map((group, gi) => (
            <div key={group.title} className="contents">
              <Reveal delay={40 + gi * 30} className={group.headerSpan}>
                <CategoryHeader title={group.title} accent={group.accent} />
              </Reveal>
              {group.items.map((item) => {
                const delay = 80 + cellIndex * 35
                cellIndex += 1
                return (
                  <FeatureBentoCell
                    key={item.name}
                    item={item}
                    iconRing={group.iconRing}
                    accent={group.accent}
                    delay={delay}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </PageContainer>
    </Section>
  )
}
