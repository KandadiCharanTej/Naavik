'use client'

import { ArrowRight, AlertCircle, Check, MapPin, Loader2 } from 'lucide-react'
import { memo } from 'react'
import { cn } from '@/lib/utils'

const WAITLIST_GOAL = 500

const BENEFITS = [
  'Free forever',
  'First access',
  'Founding member',
  'Zero spam',
] as const

const AVATAR_COLORS = [
  'from-[var(--purple-400)] to-[var(--purple-600)]',
  'from-violet-400 to-indigo-500',
  'from-fuchsia-400 to-purple-500',
  'from-blue-400 to-violet-500',
]

const WaitlistProgress = memo(function WaitlistProgress({
  count,
  className,
}: {
  count: number
  className?: string
}) {
  const pct = Math.min(100, Math.round((count / WAITLIST_GOAL) * 100))
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <p className="text-[13px] font-semibold text-gray-600">
          <span className="text-[15px] font-bold text-foreground">{count}</span>
          {' / '}
          {WAITLIST_GOAL} students joined
        </p>
        <span className="text-[12px] font-bold tabular-nums text-[var(--purple-600)]">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
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
              'flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br text-[11px] font-bold text-white shadow-sm',
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
  disabled,
}: {
  id: string
  name: string
  type: string
  label: string
  placeholder: string
  required?: boolean
  disabled?: boolean
}) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder=" "
        className="peer h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pb-2 pt-6 text-[15px] text-gray-900 shadow-[var(--shadow-soft)] outline-none transition-all placeholder:text-transparent focus:border-[var(--purple-300)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] disabled:opacity-50 disabled:bg-gray-50/50"
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
    <>
      {/* Mobile & Tablet Layout (<1024px) - KEPT EXACTLY THE SAME */}
      <div className="flex flex-col w-full max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8 lg:hidden">
        {/* Badge */}
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--purple-50)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--purple-700)] ring-1 ring-[var(--purple-100)]">
            🟣 Early Access
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="mt-4 text-[1.75rem] font-extrabold tracking-[-0.035em] text-foreground sm:text-[2rem]">
          Join Early Access
        </h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">
          Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
        </p>

        {/* Progress bar */}
        <WaitlistProgress count={waitlistCount} className="mt-6" />

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <FloatingField id="mobile-name" name="name" type="text" label="Name" placeholder="Your full name" required disabled={submitting} />
          <FloatingField id="mobile-email" name="email" type="email" label="Email" placeholder="you@college.edu.in" required disabled={submitting} />
          <FloatingField id="mobile-college" name="college" type="text" label="College" placeholder="Your college name" required disabled={submitting} />
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          {error && (
            <div className="flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50 p-3.5 text-[13px] font-medium text-red-600 animate-in fade-in-50 duration-200">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* CTA - Exactly one submit button, in-flow */}
          <button
            type="submit"
            disabled={submitting}
            className="naavik-btn naavik-btn-primary group flex h-14 w-full items-center justify-center !rounded-2xl text-[16px] font-bold disabled:cursor-not-allowed disabled:opacity-70 transition-transform duration-200 active:scale-[0.98]"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>

        {/* Footer text */}
        <div className="mt-6 text-center text-[12px] font-medium leading-relaxed text-gray-400">
          <p>No spam. One email when your campus goes live.</p>
          <p className="mt-1">Free forever for engineering students.</p>
        </div>
      </div>

      {/* Desktop Layout (>= 1024px) - Single continuous background, floating card */}
      <div className="hidden lg:grid lg:grid-cols-[45%_55%] w-full lg:h-[640px] overflow-hidden select-none bg-gradient-to-br from-white via-[#FAFAFF] to-[#F4F2FF]">
        {/* Left Information Panel */}
        <div className="relative flex flex-col justify-center px-10 xl:px-14 shrink-0 h-full overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06),transparent_70%)]"
          />
          
          <div className="relative flex flex-col gap-6 w-full max-w-[400px]">
            {/* Early Access Badge */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-gray-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--purple-500)]" />
                Early Access
              </span>
            </div>

            {/* Title & Desc */}
            <div className="space-y-3">
              <h2 className="text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#111827]">
                Join Early Access
              </h2>
              <p className="text-[14px] font-medium leading-[1.6] text-gray-500">
                Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3.5">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-[13px] font-bold text-gray-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--purple-50)] text-[var(--purple-600)]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Progress */}
            <div className="pt-2">
              <WaitlistProgress count={waitlistCount} />
            </div>

            {/* Avatars */}
            <div className="pt-1">
              <AvatarStack />
            </div>

            {/* Rollout Badge */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-600 shadow-sm">
                <MapPin className="h-3.5 w-3.5" />
                Campus-by-campus rollout
              </span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="relative flex flex-col justify-center px-10 shrink-0 h-full overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06),transparent_70%)]"
          />

          {/* Floating White Card */}
          <div className="relative w-full max-w-[460px] mx-auto bg-white rounded-[24px] p-8 xl:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05),0_0_40px_rgba(124,58,237,0.04)] border border-gray-100/50 space-y-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <FloatingField id="desktop-name" name="name" type="text" label="Name" placeholder="Your full name" required disabled={submitting} />
              <FloatingField id="desktop-email" name="email" type="email" label="Email" placeholder="you@college.edu.in" required disabled={submitting} />
              <FloatingField id="desktop-college" name="college" type="text" label="College" placeholder="Your college name" required disabled={submitting} />
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              {error && (
                <div className="flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50 p-3 text-[12px] font-medium text-red-600 animate-in fade-in-50 duration-200">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="naavik-btn naavik-btn-primary group flex h-14 w-full items-center justify-center !rounded-2xl text-[16px] font-bold disabled:cursor-not-allowed disabled:opacity-70 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(124,58,237,0.3)] active:scale-[0.98] mt-2"
              >
                {submitting ? (
                  <span className="flex items-center justify-center whitespace-nowrap">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin shrink-0" />
                    Joining...
                  </span>
                ) : (
                  <span className="flex items-center justify-center whitespace-nowrap">
                    Join Early Access
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
                  </span>
                )}
              </button>
            </form>

            <div className="text-[11px] font-medium leading-[1.6] text-gray-400">
              <p>No spam. One email when your campus goes live.</p>
              <p>Free forever for engineering students.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
})
