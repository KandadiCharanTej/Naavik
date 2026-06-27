'use client'

import { memo } from 'react'
import { AlertCircle, ArrowRight, Check, Loader2, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

export const WAITLIST_GOAL = 500

export const BENEFITS = [
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
] as const

export type JoinEarlyAccessModalProps = {
  waitlistCount: number
  error: string
  submitting: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onClose?: () => void
}

export const WaitlistProgress = memo(function WaitlistProgress({
  count,
  className,
}: {
  count: number
  className?: string
}) {
  const pct = Math.min(100, Math.round((count / WAITLIST_GOAL) * 100))

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[13px] font-semibold text-gray-600">
          <span className="text-[15px] font-bold text-foreground">{count}</span>
          {' / '}
          {WAITLIST_GOAL} students joined
        </p>
        <span className="text-[12px] font-bold tabular-nums text-[var(--purple-600)]">{pct}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
})

export const AvatarStack = memo(function AvatarStack() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {(['S', 'A', 'R', 'K'] as const).map((letter, i) => (
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
})

export const LeftPanelContent = memo(function LeftPanelContent({
  waitlistCount,
}: {
  waitlistCount: number
}) {
  return (
    <>
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--purple-50)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--purple-700)] ring-1 ring-[var(--purple-100)]">
        🟣 Early Access
      </span>

      <h2 className="mt-2 text-[1.75rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-foreground xl:text-[2.125rem]">
        Join Early Access
      </h2>

      <p className="mt-1.5 max-w-sm text-[14px] font-medium leading-relaxed text-gray-500 xl:text-[15px]">
        Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
      </p>

      <ul className="mt-2.5 space-y-1">
        {BENEFITS.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2.5 text-[13px] font-semibold text-gray-700 xl:text-[14px]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--purple-50)] text-[var(--purple-600)] ring-1 ring-[var(--purple-100)]">
              <Check className="h-3 w-3" />
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-3 space-y-2.5">
        <WaitlistProgress count={waitlistCount} />
        <AvatarStack />
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--purple-100)] bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--purple-700)] shadow-sm">
          <MapPin className="h-3 w-3 shrink-0" />
          Campus-by-campus rollout
        </span>
      </div>
    </>
  )
})

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
    <div className="relative w-full min-w-0">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder=" "
        className="peer block h-[52px] w-full min-w-0 rounded-2xl border border-gray-200/80 bg-white px-4 pb-1.5 pt-5 text-[14px] text-gray-900 shadow-[var(--shadow-soft)] outline-none transition-[border-color,box-shadow] placeholder:text-transparent focus:border-[var(--purple-300)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] disabled:opacity-60"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 text-[13px] font-semibold text-gray-500 transition-all peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-[var(--purple-600)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      <span className="sr-only">{placeholder}</span>
    </div>
  )
}

export const SubmitButton = memo(function SubmitButton({
  submitting,
  formId,
  className,
}: {
  submitting: boolean
  formId?: string
  className?: string
}) {
  return (
    <button
      type="submit"
      form={formId}
      disabled={submitting}
      className={cn(
        'naavik-btn naavik-btn-primary group flex h-[52px] w-full min-w-0 shrink-0 items-center justify-center whitespace-nowrap !rounded-2xl text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-70',
        className,
      )}
    >
      {submitting ? (
        <>
          <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
          Joining...
        </>
      ) : (
        <>
          Join Early Access
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  )
})

export const JoinEarlyAccessForm = memo(function JoinEarlyAccessForm({
  formId,
  error,
  submitting,
  onSubmit,
  showSubmitButton = true,
  fieldPrefix,
}: {
  formId: string
  error: string
  submitting: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  showSubmitButton?: boolean
  fieldPrefix: string
}) {
  return (
    <form id={formId} onSubmit={onSubmit} className="w-full min-w-0 space-y-3">
      <FloatingField
        id={`${fieldPrefix}-name`}
        name="name"
        type="text"
        label="Name"
        placeholder="Your full name"
        required
        disabled={submitting}
      />
      <FloatingField
        id={`${fieldPrefix}-email`}
        name="email"
        type="email"
        label="Email"
        placeholder="you@college.edu.in"
        required
        disabled={submitting}
      />
      <FloatingField
        id={`${fieldPrefix}-college`}
        name="college"
        type="text"
        label="College"
        placeholder="Your college name"
        required
        disabled={submitting}
      />
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {error ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-2xl border border-red-100 bg-red-50 p-3.5 text-[13px] font-medium text-red-600"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      {showSubmitButton ? <SubmitButton submitting={submitting} /> : null}
    </form>
  )
})

export const FormPrivacyText = memo(function FormPrivacyText({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn('text-[12px] font-medium leading-relaxed text-gray-400', className)}>
      <p>No spam. One email when your campus goes live.</p>
      <p className="mt-1">Free forever for engineering students.</p>
    </div>
  )
})
