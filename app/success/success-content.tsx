'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect, memo } from 'react'
import {
  CheckCircle2,
  Copy,
  BellRing,
  Mail,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Rocket,
} from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { MeshGradient, GridLines } from '@/components/design/primitives'
import { cn } from '@/lib/utils'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naavik.in'
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/'
const LINKEDIN_URL = 'https://linkedin.com/'
const WAITLIST_GOAL = 500

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const TIMELINE = [
  {
    title: 'Signup confirmed',
    desc: "You're officially on the list.",
    icon: CheckCircle2,
    tone: 'emerald',
  },
  {
    title: 'Launch updates',
    desc: "We'll email you when Early Access opens.",
    icon: Mail,
    tone: 'blue',
  },
  {
    title: 'Campus notification',
    desc: "You'll know exactly when your college is live.",
    icon: BellRing,
    tone: 'purple',
  },
  {
    title: 'No spam',
    desc: 'Only important updates. Unsubscribe anytime.',
    icon: ShieldCheck,
    tone: 'gray',
  },
] as const

const toneStyles = {
  emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  blue: 'bg-blue-50 text-blue-600 ring-blue-100',
  purple: 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]',
  gray: 'bg-gray-50 text-gray-500 ring-gray-200',
}

const FloatingShapes = memo(function FloatingShapes() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-40 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-20 w-20 rounded-3xl border border-[var(--purple-100)]/60 bg-white/60 shadow-[var(--shadow-soft)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[22%] left-[6%] hidden h-16 w-16 rounded-2xl border border-emerald-100/80 bg-emerald-50/40 shadow-[var(--shadow-soft)] lg:block"
      />
    </>
  )
})

const SuccessIcon = memo(function SuccessIcon() {
  return (
    <div className="relative mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center sm:mb-5 sm:h-20 sm:w-20">
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-100)] via-white to-[var(--purple-50)] shadow-[0_8px_32px_rgba(124,58,237,0.2)] ring-1 ring-[var(--purple-100)]">
        <Sparkles className="h-8 w-8 text-[var(--purple-600)] sm:h-9 sm:w-9" />
      </div>
      <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-2 ring-white">
        <CheckCircle2 className="h-4 w-4" />
      </div>
    </div>
  )
})

const PositionHeroCard = memo(function PositionHeroCard({ position }: { position: string }) {
  const numericPosition = parseInt(position, 10) || 128
  const pct = Math.min(100, Math.round((numericPosition / WAITLIST_GOAL) * 100))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.14),transparent_70%)]"
      />

      <div
        className="relative rounded-[24px] p-[1px] shadow-[0_32px_80px_rgba(124,58,237,0.18)] bg-gradient-to-br from-[var(--purple-300)]/40 via-[var(--purple-200)]/20 to-white/40"
      >
        <div className="relative overflow-hidden rounded-[23px] bg-white px-6 py-8 sm:px-8 sm:py-9">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)]/60 to-transparent"
          />

          <p className="relative text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-[11px]">
            Early Access Position
          </p>

          <div className="relative mt-3 text-center">
            <span className="block text-[4.75rem] font-black leading-none tracking-tight text-[var(--purple-600)] sm:text-[5.75rem] lg:text-[6.25rem]">
              #{numericPosition}
            </span>
          </div>

          <div className="relative mt-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--purple-100)] bg-gradient-to-r from-[var(--purple-50)] to-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--purple-700)] shadow-sm">
              <Rocket className="h-3.5 w-3.5" />
              Founding Student
            </span>
          </div>

          <div className="relative mt-6">
            <div className="flex items-baseline justify-between text-[12px] font-semibold text-gray-500 sm:text-[13px]">
              <span>
                {numericPosition} / {WAITLIST_GOAL}
              </span>
              <span className="font-bold text-[var(--purple-600)]">{pct}%</span>
            </div>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] via-[var(--purple-600)] to-[#9333EA] transition-all duration-1000 ease-out"
                style={{ width: mounted ? `${pct}%` : '0%' }}
              />
            </div>
          </div>

          <p className="relative mt-5 text-center text-[13px] font-medium leading-relaxed text-gray-500 sm:text-[14px]">
            You&apos;re among the first students helping build Naavik.
          </p>
        </div>
      </div>
    </div>
  )
})

function WaitlistResultDisplay() {
  const searchParams = useSearchParams()
  const position = searchParams.get('position')

  if (position) {
    return <PositionHeroCard position={position} />
  }

  return (
    <div className="mx-auto w-full max-w-[560px] rounded-[24px] border border-gray-200/70 bg-white p-8 text-center shadow-[var(--shadow-card)]">
      <Sparkles className="mx-auto h-8 w-8 text-[var(--purple-600)]" />
      <p className="mt-4 text-[15px] font-medium text-gray-500">
        Thanks for joining Naavik. You&apos;re now one of the first students helping shape our future.
      </p>
    </div>
  )
}

function WaitlistResultFallback() {
  // Skeleton to reserve layout space and completely eliminate CLS
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="relative rounded-[24px] border border-gray-100 bg-white px-6 py-8 sm:px-8 sm:py-9 shadow-[var(--shadow-soft)] animate-pulse">
        {/* Placeholder text for Title */}
        <div className="h-4 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
        {/* Placeholder for position count */}
        <div className="h-24 w-40 bg-gray-200 rounded mx-auto mt-6 animate-pulse" />
        {/* Placeholder for badge */}
        <div className="h-8 w-36 bg-gray-200 rounded-full mx-auto mt-6 animate-pulse" />
        {/* Placeholder for progress line */}
        <div className="h-6 bg-gray-100 rounded mt-8 animate-pulse" />
        {/* Placeholder for helper text */}
        <div className="h-4 bg-gray-100 rounded mt-6 animate-pulse" />
      </div>
    </div>
  )
}

const NextStepsGrid = memo(function NextStepsGrid() {
  return (
    <div className="w-full">
      <h3 className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 sm:mb-4">
        What happens next
      </h3>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
        {TIMELINE.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 rounded-[20px] border border-gray-100/90 bg-white p-3.5 shadow-[var(--shadow-soft)] sm:p-4"
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ring-1 sm:h-9 sm:w-9",
                toneStyles[item.tone]
              )}
            >
              <item.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[13px] font-bold text-foreground sm:text-[14px]">{item.title}</h4>
              <p className="mt-0.5 text-[12px] leading-snug text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

const ShareSection = memo(function ShareSection({
  copied,
  onCopy,
}: {
  copied: boolean
  onCopy: () => void
}) {
  return (
    <div className="w-full">
      <p className="mb-3 text-center text-[12px] font-medium text-gray-400 sm:text-[13px]">
        Help us bring Naavik to more engineering students.
      </p>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            window.open(INSTAGRAM_URL, '_blank')
          }}
          className="flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-[var(--purple-600)] to-[#9333EA] px-2 text-[11px] font-bold text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-all hover:shadow-[0_12px_32px_rgba(124,58,237,0.38)] sm:h-12 sm:gap-2.5 sm:text-[13px]"
        >
          <InstagramIcon className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
          <span className="truncate">Instagram</span>
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-gray-200 bg-white px-2 text-[11px] font-bold text-foreground shadow-[var(--shadow-soft)] transition-colors hover:border-[#0A66C2]/30 sm:h-12 sm:gap-2.5 sm:text-[13px]"
        >
          <LinkedInIcon className="h-4 w-4 shrink-0 text-[#0A66C2] sm:h-[18px] sm:w-[18px]" />
          <span className="truncate">LinkedIn</span>
        </a>
        <button
          type="button"
          onClick={onCopy}
          className="flex h-11 items-center justify-center gap-1.5 rounded-2xl border border-gray-200 bg-white px-2 text-[11px] font-bold text-foreground shadow-[var(--shadow-soft)] transition-colors hover:border-[var(--purple-200)] sm:h-12 sm:gap-2.5 sm:text-[13px]"
        >
          <Copy className="h-4 w-4 shrink-0 text-gray-400" />
          <span className="truncate">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
})

const PrimaryActions = memo(function PrimaryActions() {
  return (
    <div className="flex w-full flex-col items-center gap-2.5">
      <Link
        href="/"
        className="group flex h-14 w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--purple-600)] to-[#9333EA] text-[15px] font-bold text-white shadow-[0_10px_32px_rgba(124,58,237,0.38)] transition-all hover:shadow-[0_14px_40px_rgba(124,58,237,0.45)]"
      >
        Continue
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <Link
        href="/"
        className="flex h-10 w-full max-w-md items-center justify-center rounded-xl border border-gray-200 bg-white text-[13px] font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-800"
      >
        Back to Home
      </Link>
    </div>
  )
})

export function ThankYouContent() {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(id)
  }, [])

  function copyLink() {
    navigator.clipboard?.writeText(SITE_URL)
    setCopied(true)
    toast.success('Link copied successfully.')
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-[#FAFAFC]">
      <MeshGradient />
      <GridLines className="opacity-[0.35]" />
      <FloatingShapes />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[55vh] bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(124,58,237,0.12),transparent)]"
      />

      <header className="relative z-20 flex shrink-0 items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white px-3 py-2 text-[12px] font-semibold text-gray-500 shadow-[var(--shadow-soft)] transition-colors hover:text-foreground sm:text-[13px]"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to Naavik
        </Link>
        <Logo theme="light" />
        <div className="w-[88px] sm:w-24" aria-hidden />
      </header>

      <main
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-[720px] flex-1 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 lg:max-w-[900px] lg:pb-6 transition-all duration-500 ease-out will-change-[transform,opacity]",
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <div className="flex flex-1 flex-col justify-center gap-5 py-2 sm:gap-6 lg:gap-5 lg:py-4">
          <div className="text-center">
            <SuccessIcon />
            <h1 className="text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[2.25rem] lg:text-[2.375rem]">
              ðŸŽ‰ You&apos;re officially on the list!
            </h1>
            <p className="mx-auto mt-2.5 max-w-lg text-[14px] font-medium leading-relaxed text-gray-500 sm:mt-3 sm:text-[15px]">
              Thanks for joining Naavik. You&apos;re now one of the first students helping shape our future. We&apos;ll email you as soon as Early Access opens.
            </p>
          </div>

          <Suspense fallback={<WaitlistResultFallback />}>
            <WaitlistResultDisplay />
          </Suspense>

          <NextStepsGrid />

          <div className="space-y-4">
            <ShareSection copied={copied} onCopy={copyLink} />
            <PrimaryActions />
          </div>
        </div>

        <footer className="relative z-10 mt-4 flex shrink-0 flex-col items-center gap-2 border-t border-gray-100/80 pt-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[11px] font-medium text-gray-500 sm:text-[12px]">
            Questions?{' '}
            <a href="mailto:naavik.team@gmail.com" className="font-bold text-foreground hover:underline">
              naavik.team@gmail.com
            </a>
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-gray-500 sm:text-[12px]">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <span className="text-gray-400">Made in Hyderabad</span>
          </nav>
        </footer>
      </main>
    </div>
  )
}
