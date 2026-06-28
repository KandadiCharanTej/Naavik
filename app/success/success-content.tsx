'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useState, useEffect, memo } from 'react'
import {
  CheckCircle2,
  Copy,
  ArrowRight,
  Sparkles,
  Rocket,
  ArrowLeft,
  Megaphone,
  Lock,
  Mail,
} from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'
import { InstagramIcon } from '@/components/icons/instagram-icon'
import { MeshGradient, GridLines } from '@/components/design/primitives'
import { cn } from '@/lib/utils'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://naavik.in'
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/joinnaavik?igsh=MXBueGtoZWF2ajRxdQ=='
const LINKEDIN_URL = 'https://linkedin.com/'
const WAITLIST_GOAL = 500

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

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

const NEXT_STEPS = [
  {
    title: 'Signup confirmed',
    desc: "You'll receive launch updates.",
    icon: CheckCircle2,
    emoji: '✓',
    tone: 'emerald',
  },
  {
    title: 'Campus activation',
    desc: "We'll notify you when your college goes live.",
    icon: Megaphone,
    emoji: '📢',
    tone: 'purple',
  },
  {
    title: 'Early access',
    desc: "You'll enter before everyone else.",
    icon: Rocket,
    emoji: '🚀',
    tone: 'blue',
  },
  {
    title: 'Zero spam',
    desc: 'Only important updates.',
    icon: Lock,
    emoji: '🔒',
    tone: 'gray',
  },
] as const

const toneStyles = {
  emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100/80',
  blue: 'bg-blue-50 text-blue-600 ring-blue-100/80',
  purple: 'bg-[var(--purple-50)] text-[var(--purple-600)] ring-[var(--purple-100)]/80',
  gray: 'bg-gray-50 text-gray-500 ring-gray-200/80',
}

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.max(1, Math.round(eased * target)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function PageBackground() {
  return (
    <>
      <MeshGradient />
      <GridLines className="opacity-[0.32]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(124,58,237,0.14),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.1),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[12%] hidden h-16 w-16 rounded-2xl border border-[var(--purple-100)]/50 bg-white/50 shadow-[var(--shadow-soft)] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[18%] left-[8%] hidden h-12 w-12 rounded-xl border border-emerald-100/60 bg-emerald-50/40 shadow-[var(--shadow-soft)] lg:block"
      />
    </>
  )
}

const SuccessIcon = memo(function SuccessIcon({ size = 'default' }: { size?: 'default' | 'compact' }) {
  const compact = size === 'compact'

  return (
    <div
      className={cn(
        'success-icon-pop relative mx-auto flex shrink-0 items-center justify-center',
        compact ? 'h-10 w-10' : 'h-16 w-16 sm:h-[72px] sm:w-[72px]',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.28),transparent_70%)]',
          compact ? 'blur-md' : 'blur-xl',
        )}
      />
      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[var(--purple-100)] via-white to-[var(--purple-50)] shadow-[0_8px_32px_rgba(124,58,237,0.22)] ring-1 ring-[var(--purple-100)]',
        )}
      >
        <Sparkles className={cn('text-[var(--purple-600)]', compact ? 'h-6 w-6' : 'h-7 w-7 sm:h-8 sm:w-8')} />
      </div>
      <div
        className={cn(
          'absolute flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-2 ring-white',
          compact ? '-bottom-0.5 -right-0.5 h-5 w-5' : '-bottom-1 -right-1 h-6 w-6 sm:h-7 sm:w-7',
        )}
      >
        <CheckCircle2 className={cn(compact ? 'h-3 w-3' : 'h-3.5 w-3.5 sm:h-4 sm:w-4')} />
      </div>
    </div>
  )
})

const PositionHeroCard = memo(function PositionHeroCard({
  position,
  animate = true,
  compact = false,
}: {
  position: string
  animate?: boolean
  compact?: boolean
}) {
  const numericPosition = parseInt(position, 10) || 128
  const pct = Math.min(100, Math.round((numericPosition / WAITLIST_GOAL) * 100))
  const displayNum = useCountUp(numericPosition, animate)
  const [barReady, setBarReady] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setBarReady(true), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div
      className={cn(
        'success-card-rise relative mx-auto w-full',
        compact ? 'max-w-[400px]' : 'max-w-[480px] lg:max-w-[520px]',
      )}
    >
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-3 rounded-[28px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2),transparent_68%)]',
          compact ? 'blur-lg' : 'blur-2xl',
        )}
      />

      <div
        className="relative rounded-[24px] p-px shadow-[0_28px_80px_rgba(124,58,237,0.22)]"
        style={{
          background:
            'linear-gradient(135deg, rgba(124,58,237,0.45) 0%, rgba(167,139,250,0.25) 50%, rgba(255,255,255,0.6) 100%)',
        }}
      >
        <div
          className={cn(
            'relative overflow-hidden rounded-[23px] border border-white/70 bg-white/80 backdrop-blur-xl',
            compact ? 'px-4 py-3.5' : 'px-6 py-5 sm:px-8 sm:py-6',
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)]/70 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--purple-100)]/30"
          />

          <p
            className={cn(
              'relative text-center font-bold uppercase tracking-[0.2em] text-gray-400',
              compact ? 'text-[9px]' : 'text-[10px] sm:text-[11px]',
            )}
          >
            Early Access Position
          </p>

          <div className={cn('relative text-center', compact ? 'mt-0.5' : 'mt-2 sm:mt-3')}>
            <span
              className={cn(
                'block font-black leading-none tracking-tight text-[var(--purple-600)] tabular-nums',
                compact ? 'text-[2.75rem]' : 'text-[3.5rem] sm:text-[4.75rem] lg:text-[5.5rem]',
              )}
            >
              #{displayNum}
            </span>
          </div>

          <div className={cn('relative flex justify-center', compact ? 'mt-2' : 'mt-3 sm:mt-4')}>
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border border-[var(--purple-100)] bg-gradient-to-r from-[var(--purple-50)] to-white font-bold uppercase tracking-wider text-[var(--purple-700)] shadow-sm',
                compact ? 'px-3 py-1 text-[9px]' : 'px-3 py-1.5 text-[9.5px] sm:text-[11px]',
              )}
            >
              <Rocket className={cn(compact ? 'h-3 w-3' : 'h-3.5 w-3.5')} />
              Founding Student
            </span>
          </div>

          <div className={cn('relative', compact ? 'mt-3' : 'mt-4 sm:mt-6')}>
            <div
              className={cn(
                'flex items-baseline justify-between font-semibold text-gray-500',
                compact ? 'text-[11px]' : 'text-[12px] sm:text-[13px]',
              )}
            >
              <span>
                {numericPosition} / {WAITLIST_GOAL}
              </span>
              <span className="font-bold text-[var(--purple-600)]">{pct}%</span>
            </div>
            <div
              className={cn(
                'mt-2 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]',
                compact ? 'h-2' : 'h-2.5',
              )}
            >
              <div
                className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--purple-500)] via-[var(--purple-600)] to-[#9333EA] transition-transform duration-1000 ease-out"
                style={{ transform: barReady ? `scaleX(${pct / 100})` : 'scaleX(0)' }}
              />
            </div>
          </div>

          <p
            className={cn(
              'relative text-center font-medium text-gray-500',
              compact ? 'mt-2.5 text-[10px] leading-snug' : 'mt-3 sm:mt-4 text-[11px] leading-relaxed sm:text-[13px]',
            )}
          >
            You&apos;re among the first students shaping Naavik before launch.
          </p>
        </div>
      </div>
    </div>
  )
})

function WaitlistResultDisplay({
  animate = true,
  compact = false,
}: {
  animate?: boolean
  compact?: boolean
}) {
  const searchParams = useSearchParams()
  const position = searchParams.get('position')

  if (position) {
    return <PositionHeroCard position={position} animate={animate} compact={compact} />
  }

  return (
    <div
      className={cn(
        'mx-auto w-full rounded-[24px] border border-gray-200/70 bg-white/80 text-center shadow-[var(--shadow-card)] backdrop-blur-sm',
        compact ? 'max-w-[400px] p-5' : 'max-w-[520px] p-6 sm:p-8',
      )}
    >
      <Sparkles className="mx-auto h-8 w-8 text-[var(--purple-600)]" />
      <p className="mt-3 text-[14px] font-medium leading-relaxed text-gray-500">
        Thanks for joining Naavik. You&apos;re now one of the first students helping shape our future.
      </p>
    </div>
  )
}

function WaitlistResultFallback({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn('relative mx-auto w-full animate-pulse', compact ? 'max-w-[400px]' : 'max-w-[520px]')}>
      <div className={cn('rounded-[24px] border border-gray-100 bg-white/80', compact ? 'px-5 py-6' : 'px-6 py-8')}>
        <div className="mx-auto h-3 w-32 rounded bg-gray-200" />
        <div className={cn('mx-auto mt-4 rounded bg-gray-200', compact ? 'h-14 w-24' : 'h-20 w-32')} />
        <div className="mx-auto mt-4 h-7 w-36 rounded-full bg-gray-200" />
        <div className="mt-4 h-2.5 rounded-full bg-gray-100" />
      </div>
    </div>
  )
}

const NextStepsGrid = memo(function NextStepsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full">
      <p
        className={cn(
          'mb-3 text-center font-bold uppercase tracking-[0.14em] text-gray-400',
          compact ? 'text-[9px]' : 'text-[10px] sm:text-[11px]',
        )}
      >
        What happens next
      </p>
      <div className={cn('grid grid-cols-2', compact ? 'gap-1.5' : 'gap-2.5 sm:gap-3 lg:gap-4')}>
        {NEXT_STEPS.map((item, i) => (
          <div
            key={item.title}
            className={cn(
              'success-step-card group rounded-2xl border border-gray-100/90 bg-white/90 shadow-[var(--shadow-soft)] ring-1 ring-black/[0.02] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]',
              compact ? 'p-2' : 'p-3 sm:p-3.5 lg:p-4',
            )}
            style={{ animationDelay: `${320 + i * 70}ms` }}
          >
            <div className="flex items-start gap-2">
              <div
                className={cn(
                  'flex shrink-0 items-center justify-center rounded-xl ring-1',
                  compact ? 'h-6 w-6' : 'h-9 w-9',
                  toneStyles[item.tone],
                )}
              >
                <item.icon className={cn(compact ? 'h-3 w-3' : 'h-4 w-4')} />
              </div>
              <div className="min-w-0 flex-1">
                <h4
                  className={cn(
                    'font-bold leading-tight text-foreground',
                    compact ? 'text-[10px]' : 'text-[12px] sm:text-[13px]',
                  )}
                >
                  <span className="mr-1">{item.emoji}</span>
                  {item.title}
                </h4>
                <p
                  className={cn(
                    'mt-0.5 leading-snug text-gray-500',
                    compact ? 'text-[9.5px] line-clamp-2' : 'text-[11px] sm:text-[12px]',
                  )}
                >
                  {item.desc}
                </p>
              </div>
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
  compact = false,
}: {
  copied: boolean
  onCopy: () => void
  compact?: boolean
}) {
  const btn = cn(
    'group flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-2xl border font-bold transition-all duration-200 hover:-translate-y-0.5',
    compact ? 'px-2 text-[11px]' : 'px-3 text-[12px] sm:text-[13px]',
  )

  return (
    <div className="w-full">
      <p className={cn('mb-2 text-center font-medium text-gray-400', compact ? 'text-[11px]' : 'text-[12px] sm:text-[13px]')}>
        Help us bring Naavik to more engineering students.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            btn,
            'border-transparent bg-gradient-to-r from-[var(--purple-600)] to-[#9333EA] text-white shadow-[0_8px_24px_rgba(124,58,237,0.32)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.4)]',
          )}
        >
          <InstagramIcon className="h-4 w-4 shrink-0" />
          <span className="truncate">Instagram</span>
        </a>
        <a
          href="mailto:naavik.team@gmail.com"
          className={cn(
            btn,
            'border-gray-200/90 bg-white text-foreground shadow-[var(--shadow-soft)] hover:border-gray-300 hover:shadow-[var(--shadow-card)]',
          )}
        >
          <Mail className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-gray-800" />
          <span className="truncate">Mail</span>
        </a>
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className={cn(
            btn,
            'border-gray-200/90 bg-white text-foreground shadow-[var(--shadow-soft)] hover:border-[#0A66C2]/30 hover:shadow-[var(--shadow-card)]',
          )}
        >
          <LinkedInIcon className="h-4 w-4 shrink-0 text-[#0A66C2]" />
          <span className="truncate">LinkedIn</span>
        </button>
        <button
          type="button"
          onClick={onCopy}
          className={cn(
            btn,
            'border-gray-200/90 bg-white text-foreground shadow-[var(--shadow-soft)] hover:border-[var(--purple-200)] hover:shadow-[var(--shadow-card)]',
          )}
        >
          <Copy className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-[var(--purple-600)]" />
          <span className="truncate">{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  )
})

const PrimaryActions = memo(function PrimaryActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn('flex w-full flex-col', compact ? 'gap-2' : 'gap-2.5 sm:flex-row sm:gap-3')}>
      <Link
        href="/"
        className={cn(
          'group flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--purple-600)] to-[#9333EA] font-bold text-white shadow-[0_10px_32px_rgba(124,58,237,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(124,58,237,0.45)]',
          compact ? 'min-h-[44px] text-[13.5px]' : 'text-[15px] lg:min-h-[52px]',
        )}
      >
        Continue
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
})

function SuccessHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn('success-header-rise text-center', compact ? 'space-y-1.5' : 'space-y-1 sm:space-y-2')}>
      <SuccessIcon size={compact ? 'compact' : 'default'} />
      <h1
        className={cn(
          'font-extrabold leading-[1.08] tracking-[-0.04em] text-foreground',
          compact ? 'text-[1.25rem]' : 'text-[1.75rem] sm:text-[2.125rem] lg:text-[2.375rem]',
        )}
      >
        🎉 You&apos;re officially on the list!
      </h1>
      <div className={cn('mx-auto max-w-md space-y-1', compact ? 'max-w-[32ch]' : '')}>
        <p className={cn('font-semibold text-foreground', compact ? 'text-[13px]' : 'text-[15px] sm:text-[16px]')}>
          Welcome aboard.
        </p>
        <p className={cn('font-medium leading-relaxed text-gray-500', compact ? 'text-[11px] leading-snug' : 'text-[14px] sm:text-[15px]')}>
          You&apos;re one of the first engineering students helping build Naavik.
        </p>
      </div>
    </div>
  )
}

function ThankYouInner() {
  const [copied, setCopied] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 60)
    return () => clearTimeout(id)
  }, [])

  function copyLink() {
    navigator.clipboard?.writeText(SITE_URL)
    setCopied(true)
    toast.success('Link copied successfully.')
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div
      className={cn(
        'relative min-h-[100dvh] w-full overflow-x-hidden bg-[#FAFAFC] transition-opacity duration-500',
        ready ? 'opacity-100' : 'opacity-0',
      )}
    >
      <PageBackground />

      {/* ── Mobile: dedicated compact full-screen layout ── */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col lg:hidden">
        <header className="flex shrink-0 items-center justify-between px-4 pb-2 pt-[max(12px,env(safe-area-inset-top))]">
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-500 transition-colors active:bg-gray-100"
            aria-label="Back to Naavik"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Logo theme="light" className="pointer-events-none" />
          <div className="w-10" aria-hidden />
        </header>

        <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col justify-center px-5 pb-[max(16px,env(safe-area-inset-bottom))]">
          <div className="flex flex-col gap-2 [@media(max-height:700px)]:gap-1.5">
            <SuccessHeader compact />
            <Suspense fallback={<WaitlistResultFallback compact />}>
              <WaitlistResultDisplay animate={ready} compact />
            </Suspense>
            <NextStepsGrid compact />
            <ShareSection copied={copied} onCopy={copyLink} compact />
            <PrimaryActions compact />
          </div>
        </main>
      </div>

      {/* ── Desktop: premium two-part composition, one screen ── */}
      <div className="relative z-10 hidden min-h-[100dvh] flex-col lg:flex">
        <header className="flex shrink-0 items-center justify-between px-8 py-3 xl:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white/80 px-4 py-2 text-[13px] font-semibold text-gray-500 shadow-[var(--shadow-soft)] transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Naavik
          </Link>
          <Logo theme="light" />
          <div className="w-[120px]" aria-hidden />
        </header>

        <main className="mx-auto flex w-full max-w-[1080px] flex-1 flex-col justify-center px-8 pb-4 xl:max-w-[1140px] xl:px-12 xl:pb-6">
          <div className="grid items-center gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:gap-10">
            <div className="flex flex-col gap-5 xl:gap-6">
              <SuccessHeader />
              <div className="hidden xl:block">
                <NextStepsGrid />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Suspense fallback={<WaitlistResultFallback />}>
                <WaitlistResultDisplay animate={ready} />
              </Suspense>
              <div className="xl:hidden">
                <NextStepsGrid />
              </div>
              <ShareSection copied={copied} onCopy={copyLink} />
              <PrimaryActions />
            </div>
          </div>
        </main>

        <footer className="shrink-0 border-t border-gray-100/80 px-8 py-3 text-center xl:px-12">
          <p className="text-[12px] font-medium text-gray-400">
            Questions?{' '}
            <a href="mailto:naavik.team@gmail.com" className="font-semibold text-gray-600 hover:text-foreground hover:underline">
              naavik.team@gmail.com
            </a>
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes success-icon-pop {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          70% {
            transform: scale(1.06);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes success-header-rise {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes success-card-rise {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes success-step-rise {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .success-icon-pop {
          animation: success-icon-pop 0.65s ${ease} both;
        }
        .success-header-rise {
          animation: success-header-rise 0.6s ${ease} 0.08s both;
        }
        .success-card-rise {
          animation: success-card-rise 0.7s ${ease} 0.16s both;
        }
        .success-step-card {
          animation: success-step-rise 0.55s ${ease} both;
        }
      `}</style>
    </div>
  )
}

export function ThankYouContent() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[100dvh] items-center justify-center bg-[#FAFAFC]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--purple-600)] border-t-transparent" />
        </div>
      }
    >
      <ThankYouInner />
    </Suspense>
  )
}
