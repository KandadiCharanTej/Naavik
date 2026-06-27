'use client'

import { memo } from 'react'
import { ArrowLeft, X, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { Eyebrow } from '@/components/design/primitives'
import { WAITLIST_GOAL, type JoinEarlyAccessModalProps } from './join-early-access-shared'

const FORM_ID = 'join-early-access-phone-form'

function MobileWaitlistProgress({ count }: { count: number }) {
  const pct = Math.min(100, Math.round((count / WAITLIST_GOAL) * 100))

  return (
    <div className="mt-6 rounded-2xl bg-[var(--purple-50)] p-4 ring-1 ring-[var(--purple-100)]">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[14px] font-semibold text-gray-600">
          <span className="text-[17px] font-bold text-foreground">{count}</span>
          {' / '}
          {WAITLIST_GOAL} students joined
        </p>
        <span className="text-[14px] font-bold tabular-nums text-[var(--purple-600)]">{pct}%</span>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white ring-1 ring-[var(--purple-100)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function MobileField({
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
        className="peer block h-14 w-full min-w-0 rounded-2xl border border-gray-200/80 bg-white px-4 pb-2 pt-6 text-[15px] text-gray-900 outline-none transition-[border-color,box-shadow] placeholder:text-transparent focus:border-[var(--purple-300)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] disabled:opacity-60"
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

export const JoinEarlyAccessModalPhone = memo(function JoinEarlyAccessModalPhone({
  waitlistCount,
  error,
  submitting,
  onSubmit,
  onClose,
}: JoinEarlyAccessModalProps) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-white">
      <header className="shrink-0 px-6 pt-[max(2rem,env(safe-area-inset-top))]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <button
            type="button"
            onClick={onClose}
            className="-ml-1 flex items-center gap-1.5 rounded-xl py-2 pr-2 text-gray-600 transition-colors active:text-gray-900"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 shrink-0" />
            <span className="text-[15px] font-semibold">Back</span>
          </button>

          <Logo theme="light" className="pointer-events-none [&_img]:!h-7 [&_img]:!w-auto" />

          <button
            type="button"
            onClick={onClose}
            className="-mr-1 justify-self-end flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-colors active:bg-gray-100 active:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 text-left">
          <Eyebrow tone="purple">🟣 Early Access</Eyebrow>

          <h2 className="mt-4 text-[1.875rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground">
            Join Early Access
          </h2>

          <p className="mt-3 text-[15px] font-medium leading-relaxed text-gray-500">
            Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
          </p>

          <MobileWaitlistProgress count={waitlistCount} />
        </div>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <form id={FORM_ID} onSubmit={onSubmit} className="w-full min-w-0 space-y-4">
          <MobileField
            id="phone-name"
            name="name"
            type="text"
            label="Name"
            placeholder="Your full name"
            required
            disabled={submitting}
          />
          <MobileField
            id="phone-email"
            name="email"
            type="email"
            label="Email"
            placeholder="you@college.edu.in"
            required
            disabled={submitting}
          />
          <MobileField
            id="phone-college"
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

          <button
            type="submit"
            disabled={submitting}
            className="naavik-btn naavik-btn-primary group flex h-14 w-full items-center justify-center gap-2 whitespace-nowrap !rounded-2xl text-[16px] font-bold disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Early Access
                <ArrowRight className="h-4 w-4 shrink-0" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-[12px] font-medium leading-relaxed text-gray-400">
          <p>No spam. One email when your campus goes live.</p>
          <p className="mt-1">Free forever for engineering students.</p>
        </div>
      </div>
    </div>
  )
})
