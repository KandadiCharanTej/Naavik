import { Reveal } from '@/components/animations/reveal'
import {
  MessageCircle,
  Briefcase,
  Cloud,
  Globe,
  Code,
  Database,
  FileText,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import {
  PageContainer,
  Section,
  SectionHeader,
  Eyebrow,
  Card,
  GridLines,
} from '@/components/design/primitives'

const contrastItems = [
  { before: '7 apps to check every morning', after: 'One personalised feed' },
  { before: 'Notes buried in Drive folders', after: 'Semester-sorted study vault' },
  { before: 'Opportunities found by luck', after: 'Filtered to your branch & year' },
  {
    before: 'Teammates only from your class',
    after: 'Engineering students across Telangana & Andhra Pradesh',
  },
  { before: 'Campus updates lost in spam', after: 'Verified, in one clean place' },
]

const appLogos = [
  { name: 'WhatsApp', rotate: -6, x: '4%', y: '0%' },
  { name: 'LinkedIn', rotate: 4, x: '22%', y: '-8%' },
  { name: 'Google Drive', rotate: -3, x: '42%', y: '2%' },
  { name: 'Unstop', rotate: 7, x: '62%', y: '-4%' },
  { name: 'GitHub', rotate: -5, x: '78%', y: '4%' },
  { name: 'ERP Portal', rotate: 3, x: '14%', y: '52%' },
  { name: 'Google Forms', rotate: -4, x: '88%', y: '48%' },
]

const scatteredIcons = [MessageCircle, Briefcase, Cloud, Globe, Code, Database, FileText]

export async function WhyNaavikExists() {
  return (
    <Section id="whats-inside" surface="subtle">
      <GridLines className="opacity-20" />

      <PageContainer className="relative">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow={<Eyebrow>The Problem</Eyebrow>}
            title={
              <>
                Engineering life is scattered across{' '}
                <span className="text-[var(--purple-600)]">too many apps.</span>
              </>
            }
            lead="Students lose hours every day switching between disconnected platforms just to stay updated. Naavik brings your entire daily ecosystem into a single workspace."
          />
        </Reveal>

        {/* Floating app logo chips */}
        <Reveal delay={80}>
          <div className="relative mx-auto mt-10 h-[88px] max-w-4xl sm:mt-12 sm:h-[72px]">
            {appLogos.map((logo) => (
              <span
                key={logo.name}
                style={{
                  left: logo.x,
                  top: logo.y,
                  transform: `rotate(${logo.rotate}deg)`,
                }}
                className="absolute inline-flex items-center rounded-xl border border-gray-200/80 bg-white px-3 py-2 text-[12px] font-semibold text-gray-500 shadow-[var(--shadow-soft)] ring-1 ring-gray-100/80 sm:text-[13px]"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Overlapping before/after panels */}
        <div className="relative mt-14 lg:mt-20">
          {/* Chaos panel — Old Way */}
          <Reveal delay={100}>
            <div className="relative z-10 lg:mr-[18%]">
              <Card
                className="relative overflow-hidden border-red-100/80 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(239,68,68,0.12)] sm:p-8 lg:min-h-[480px] lg:max-w-[72%]"
                hover
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-400 to-red-500" />

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <XCircle className="h-5 w-5" />
                  </span>
                  <h3 className="text-[20px] font-bold">The Old Way</h3>
                </div>

                {/* Scattered chaos icons */}
                <div className="pointer-events-none absolute right-4 top-16 hidden opacity-40 sm:block lg:right-8 lg:top-20">
                  <div className="relative h-32 w-40">
                    {scatteredIcons.map((Icon, idx) => (
                      <div
                        key={idx}
                        style={{
                          left: `${(idx * 17) % 80}%`,
                          top: `${(idx * 23) % 70}%`,
                          transform: `rotate(${(idx % 3 - 1) * 12}deg)`,
                        }}
                        className="absolute flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-100"
                      >
                        <Icon className="h-4 w-4 text-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="relative mt-6 space-y-3 sm:space-y-4">
                  {contrastItems.map((item) => (
                    <li
                      key={item.before}
                      className="flex items-start gap-3 border-b border-gray-50 pb-3 text-[14px] font-medium text-gray-500 last:border-0 last:pb-0 sm:text-[15px]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300" />
                      {item.before}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-gray-50/80 p-4 ring-1 ring-gray-100 sm:mt-8">
                  <div className="flex flex-wrap gap-2 opacity-70 grayscale">
                    {scatteredIcons.map((Icon, idx) => (
                      <div
                        key={idx}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-100"
                      >
                        <Icon className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>

          {/* Clarity panel — With Naavik, overlapping */}
          <Reveal delay={180}>
            <div className="relative z-20 -mt-8 ml-0 sm:-mt-12 lg:absolute lg:right-0 lg:top-12 lg:mt-0 lg:w-[58%]">
              <Card
                className="relative overflow-hidden border-[var(--purple-200)] bg-gradient-to-br from-white via-white to-[var(--purple-50)]/40 p-6 shadow-[var(--shadow-float)] sm:p-8 lg:min-h-[480px]"
                hover
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--purple-500)] to-[#A855F7]" />

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--purple-100)] text-[var(--purple-600)]">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-[20px] font-bold">With Naavik</h3>
                </div>

                {/* Row comparison on desktop */}
                <div className="mt-6 space-y-0">
                  {contrastItems.map((item, idx) => (
                    <div
                      key={item.after}
                      className={`grid items-center gap-3 border-b border-[var(--purple-50)] py-3.5 last:border-0 sm:grid-cols-[1fr_auto_1fr] sm:gap-4 ${
                        idx % 2 === 0 ? 'bg-transparent' : 'bg-[var(--purple-50)]/20 sm:rounded-lg sm:px-3'
                      }`}
                    >
                      <span className="hidden text-[12px] font-medium text-gray-400 line-through sm:block sm:text-[13px]">
                        {item.before}
                      </span>
                      <span className="hidden text-gray-300 sm:block">→</span>
                      <span className="flex items-start gap-2.5 sm:col-start-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--purple-500)] sm:h-5 sm:w-5" />
                        <span className="text-[14px] font-bold text-foreground sm:text-[15px]">
                          {item.after}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex h-[72px] items-center justify-center rounded-xl border border-[var(--purple-100)] bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:mt-8">
                  <span className="text-[15px] font-extrabold tracking-wide text-[var(--purple-700)]">
                    One place.
                  </span>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>

        {/* Spacer for overlapping panel on desktop */}
        <div className="hidden lg:block lg:h-24" />

        <Reveal delay={240}>
          <div className="mt-14 flex flex-col items-center gap-3 text-center sm:mt-20 sm:flex-row sm:justify-center sm:gap-8">
            <span className="text-[1.625rem] font-extrabold tracking-tight sm:text-[2.25rem]">
              One account.
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span className="text-[1.625rem] font-extrabold tracking-tight sm:text-[2.25rem]">
              One search.
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span className="text-[1.625rem] font-extrabold tracking-tight text-[var(--purple-600)] sm:text-[2.25rem]">
              One place.
            </span>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  )
}
