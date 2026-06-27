import { Reveal } from '@/components/animations/reveal'
import { WaitlistButton } from '@/components/ui/cta-buttons'
import { getSupabaseAdmin } from '@/lib/supabase'
import { Rocket, ShieldCheck, HeartHandshake, BellRing, Vote, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  PageContainer,
  Section,
  SectionHeader,
  Eyebrow,
  Card,
  MeshGradient,
} from '@/components/design/primitives'

async function getWaitlistCount() {
  try {
    const supabase = getSupabaseAdmin()
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
    return count ?? 0
  } catch {
    return 128
  }
}

type Benefit = {
  icon: LucideIcon
  title: string
  desc: string
  color: string
  span: string
  dark?: boolean
}

export async function WhyJoinEarly() {
  await getWaitlistCount()

  const benefits: Benefit[] = [
    {
      icon: Rocket,
      title: 'First Access',
      desc: "Be among the very first students at your campus to get the invite. Don't wait in line when we launch.",
      color: 'text-orange-500 bg-orange-50',
      span: 'lg:col-span-5',
    },
    {
      icon: Vote,
      title: 'Help Shape Naavik',
      desc: 'Early members vote on which features get built next. Your feedback goes directly to the founders.',
      color: 'text-blue-500 bg-blue-50',
      span: 'lg:col-span-5',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Spam',
      desc: "We only email you when something real happensâ€”like your campus going live. That's it.",
      color: 'text-emerald-500 bg-emerald-50',
      span: 'lg:col-span-6',
    },
    {
      icon: BellRing,
      title: 'Campus Alerts',
      desc: 'The exact moment your college is activated, you get the notification. Straight to your inbox.',
      color: 'text-yellow-500 bg-yellow-50',
      span: 'lg:col-span-6',
      dark: true,
    },
  ]

  return (
    <Section id="early-access" surface="subtle" className="relative">
      <MeshGradient />
      <PageContainer className="relative">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow={<Eyebrow tone="orange">Early Access</Eyebrow>}
            title={<>Why join <span className="text-orange-500">now?</span></>}
            lead="We're letting students in campus by campus. Reserving your spot means you get priority access the moment we launch at your college."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-4">
          <Reveal delay={60} className="lg:col-span-7 lg:row-span-2">
            <Card
              hover
              variant="elevated"
              className="group relative h-full overflow-hidden border-[var(--purple-100)] bg-gradient-to-br from-[var(--purple-50)] via-white to-white p-6 sm:p-8 lg:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14)_0%,transparent_70%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-100/50 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex h-full flex-col lg:flex-row lg:items-center lg:gap-10">
                <div className="flex-1">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--purple-100)] text-[var(--purple-600)] transition-transform duration-500 group-hover:scale-105">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="text-[1.75rem] font-extrabold leading-tight sm:text-[2rem]">
                    Free forever. <br />No exceptions.
                  </h3>
                  <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-gray-600">
                    No credit card required. No trial period that expires. Naavik is completely free for engineering students. We won&apos;t charge you to access your own college&apos;s resources.
                  </p>
                </div>
                <div className="mt-6 flex h-44 w-full shrink-0 items-center justify-center rounded-2xl bg-white shadow-[var(--shadow-card)] ring-1 ring-[var(--purple-100)] transition-transform duration-500 group-hover:scale-[1.02] sm:h-48 lg:mt-0 lg:h-52 lg:w-56">
                  <div className="text-center">
                    <div className="text-[3.5rem] font-black leading-none text-[var(--purple-600)]">₹0</div>
                    <div className="mt-1 text-[13px] font-bold uppercase tracking-wide text-gray-400">For Students</div>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={100 + i * 40} className={b.span}>
              <Card
                hover
                variant={b.dark ? 'dark' : 'default'}
                className={cn(
                  'group relative flex h-full flex-col p-6',
                  b.dark && 'overflow-hidden',
                )}
              >
                {b.dark && (
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-yellow-400/20 blur-2xl" />
                )}
                <div
                  className={cn(
                    'mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-105',
                    b.color,
                    b.dark && 'border border-white/10 bg-white/10 !text-yellow-400',
                  )}
                >
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className={cn('text-[18px] font-bold', b.dark && 'text-white')}>{b.title}</h3>
                <p className={cn('mt-2 flex-1 text-[15px] leading-relaxed', b.dark ? 'text-gray-400' : 'text-gray-600')}>
                  {b.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-12 flex flex-col items-center text-center lg:mt-16">
            <WaitlistButton id="why-join-cta" className="naavik-btn naavik-btn-primary h-14 !min-w-[280px] !rounded-2xl text-[16px]">
              Get Early Access Now
            </WaitlistButton>
            <p className="mt-5 text-[14px] font-semibold text-gray-500">
              Join the first students building Naavik.<br />
              <span className="text-foreground">Early Access is open now.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mx-auto mt-14 max-w-lg border-t border-gray-200 pt-10 text-center lg:mt-20">
            <h3 className="text-[18px] font-bold">Built by students, for students.</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
              We started Naavik because we faced the exact same problems you do — missed deadlines, scattered notes, zero network. We&apos;re building the app we wished we had.
            </p>
            <a href="mailto:naavik.team@gmail.com" className="mt-5 inline-flex text-[15px] font-semibold text-[var(--purple-600)]">
              naavik.team@gmail.com →
            </a>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  )
}
