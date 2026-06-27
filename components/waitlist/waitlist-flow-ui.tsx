'use client'

import { ArrowRight, AlertCircle, Check, MapPin, Loader2 } from 'lucide-react'
import { memo } from 'react'
import { cn } from '@/lib/utils'
import { Eyebrow } from '@/components/design/primitives'

const WAITLIST_GOAL = 500
const AVATAR_COLORS = [
  'from-[var(--purple-400)] to-[var(--purple-600)]',
  'from-violet-400 to-indigo-500',
  'from-fuchsia-400 to-purple-500',
  'from-blue-400 to-violet-500',
]

const BENEFITS = [
  'Free forever',
  'First access',
  'Founding member',
  'Zero spam',
] as const

const WaitlistProgress = memo(function WaitlistProgress({
  count,
  className,
}: {
  count: number
  className?: string
}) {
  const pct = Math.min(100, Math.round((count / WAITLIST_GOAL) * 100))
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[13px] font-semibold text-gray-600">
          <span className="text-[15px] font-bold text-foreground">{count}</span>
          {' / '}
          {WAITLIST_GOAL} students joined
        </p>
        <span className="text-[12px] font-bold tabular-nums text-[var(--purple-600)]">{pct}%</span>
      </div>
      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)] transition-[width] duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
})

function AvatarStack() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {['S', 'A', 'R', 'K'].map((letter, i) => (
          <div
            key={letter}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm bg-gradient-to-br',
              AVATAR_COLORS[i],
            )}
          >
            {letter}
          </div>
        ))}
      </div>
      <span className="text-[12px] font-medium text-gray-500">Students already waiting</span>
    </div>
  )
}

function FloatingField({
  id,
  name,
  type,
  label,
  placeholder,
  required,
}: {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder=" "
        className="peer h-14 w-full rounded-2xl border border-gray-200/80 bg-white px-4 pb-2 pt-6 text-[15px] text-gray-900 shadow-[var(--shadow-soft)] outline-none transition-[border-color,box-shadow] placeholder:text-transparent focus:border-[var(--purple-300)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)]"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-[13px] font-semibold text-gray-500 transition-all peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[var(--purple-600)] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      <span className="sr-only">{placeholder}</span>
    </div>
  )
}

export const WaitlistFormPanel = memo(function WaitlistFormPanel({
  waitlistCount,
  error,
  submitting,
  onSubmit,
}: {
  waitlistCount: number
  error: string
  submitting: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
      {/* Desktop left panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#FAFAFF] via-white to-[#F5F3FF] p-8 lg:flex lg:w-[40%] lg:p-10 xl:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_70%)]"
        />
        <div className="relative">
          <Eyebrow tone="purple">🟣 Early Access</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-foreground xl:text-[2.375rem]">
            Join Early Access
          </h2>
          <p className="mt-4 max-w-sm text-[15px] font-medium leading-relaxed text-gray-500">
            Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
          </p>

          <ul className="mt-8 space-y-3">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-[14px] font-semibold text-gray-700"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--purple-50)] text-[var(--purple-600)] ring-1 ring-[var(--purple-100)]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-8 space-y-5">
          <WaitlistProgress count={waitlistCount} />
          <AvatarStack />
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--purple-100)] bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--purple-700)] shadow-sm">
            <MapPin className="h-3.5 w-3.5" />
            Campus-by-campus rollout
          </span>
        </div>
      </div>

      {/* Form panel */}
      <div className="relative flex min-h-0 flex-1 flex-col lg:w-[60%]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-0 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_70%)] lg:block"
        />

        {/* Mobile header */}
        <div className="shrink-0 border-b border-gray-100 bg-gradient-to-b from-[#FAFAFF] to-white p-5 sm:p-6 lg:hidden">
          <Eyebrow tone="purple">🟣 Early Access</Eyebrow>
          <h2 className="mt-3 text-[1.75rem] font-extrabold tracking-[-0.035em]">Join Early Access</h2>
          <p className="mt-2 text-[14px] font-medium leading-relaxed text-gray-500">
            Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
          </p>
          <div className="mt-5">
            <WaitlistProgress count={waitlistCount} />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="flex flex-col p-5 sm:p-8 lg:justify-center lg:p-10 xl:p-12">
            <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-white p-5 shadow-[0_24px_80px_rgba(124,58,237,0.12),var(--shadow-card)] sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)]/60 to-transparent"
              />

              <form id="waitlist-form" onSubmit={onSubmit} className="relative space-y-4">
                <FloatingField id="name" name="name" type="text" label="Name" placeholder="Your full name" required />
                <FloatingField id="email" name="email" type="email" label="Email" placeholder="you@college.edu.in" required />
                <FloatingField id="college" name="college" type="text" label="College" placeholder="Your college name" required />

                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                {error && (
                  <div className="flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50 p-3.5 text-[13px] font-medium text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="naavik-btn naavik-btn-primary group mt-2 hidden h-14 w-full !rounded-2xl text-[16px] disabled:cursor-not-allowed disabled:opacity-70 lg:flex"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Early Access
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-5 text-center text-[12px] font-medium leading-relaxed text-gray-400 lg:text-left">
                No spam. One email when your campus goes live.
              </p>
              <p className="mt-1 hidden text-[12px] font-medium text-gray-400 lg:block">
                Free forever for engineering students.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile sticky CTA — inside modal, not fixed to viewport */}
        <div className="shrink-0 border-t border-gray-100 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
          <button
            type="submit"
            form="waitlist-form"
            disabled={submitting}
            className="naavik-btn naavik-btn-primary group h-14 w-full !rounded-2xl text-[16px] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
})

export { WAITLIST_GOAL }
