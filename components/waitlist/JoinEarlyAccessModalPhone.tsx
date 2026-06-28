'use client'

import { memo } from 'react'
import { ArrowLeft, X, AlertCircle, Loader2 } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { WAITLIST_GOAL, type JoinEarlyAccessModalProps } from './join-early-access-shared'

const FORM_ID = 'join-early-access-phone-form'

function MobileWaitlistProgress({ count }: { count: number }) {
  const pct = Math.min(100, Math.round((count / WAITLIST_GOAL) * 100))

  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[var(--purple-200)] bg-gradient-to-br from-[var(--purple-50)] to-white p-3 shadow-sm mb-5">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold text-gray-500">Students joined</span>
          <span className="text-[15px] font-extrabold text-foreground tracking-tight leading-none mt-0.5">
            {count} <span className="text-[12px] font-semibold text-gray-400">/ {WAITLIST_GOAL}</span>
          </span>
        </div>
        <span className="flex h-5 items-center justify-center rounded-full bg-[var(--purple-100)] px-2 text-[11px] font-bold text-[var(--purple-700)]">
          {pct}%
        </span>
      </div>
      
      <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--purple-100)] shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)] transition-[width] duration-700 ease-out shadow-[0_0_12px_rgba(124,58,237,0.5)]"
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
    <div className="relative w-full">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder=" "
        className="peer block h-[46px] w-full rounded-[14px] border border-gray-200/80 bg-gray-50/50 px-3 pb-1 pt-4 text-[14px] font-medium text-gray-900 outline-none transition-all placeholder:text-transparent focus:border-[var(--purple-300)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] focus:ring-0 disabled:opacity-60"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-[13px] text-[14px] font-medium text-gray-400 transition-all peer-focus:top-[4px] peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[var(--purple-600)] peer-[:not(:placeholder-shown)]:top-[4px] peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label}
      </label>
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
    <div className="flex w-full flex-col bg-white overflow-hidden p-5 sm:p-6">
      
      {/* HEADER */}
      <header className="relative flex w-full items-center justify-between shrink-0 mb-4">
        <button
          type="button"
          onClick={onClose}
          className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors active:bg-gray-100 z-10"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Logo theme="light" className="[&_img]:h-[90px] [&_img]:w-auto" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="-mr-2 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors active:bg-gray-100 z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      {/* BADGE */}
      <div className="mb-3 mt-0 flex shrink-0">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-gray-700 shadow-sm ring-1 ring-gray-900/5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--purple-500)]" />
          Early Access
        </span>
      </div>
      
      {/* TITLE */}
      <h2 className="text-[26px] font-extrabold leading-[1.05] tracking-tight text-[#111827] mb-2 shrink-0">
        Join Early Access
      </h2>
      
      {/* DESCRIPTION */}
      <p className="text-[13px] font-medium leading-[1.4] text-gray-500 mb-5 shrink-0">
        Join the first students shaping Naavik. We&apos;ll notify you when your campus is live.
      </p>

      {/* PROGRESS CARD */}
      <MobileWaitlistProgress count={waitlistCount} />

      {/* FORM */}
      <form id={FORM_ID} onSubmit={onSubmit} className="flex flex-col gap-3.5 shrink-0">
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
            className="flex items-center gap-2 rounded-[10px] border border-red-100 bg-red-50 p-2 text-[13px] font-medium text-red-600 animate-in fade-in-50 duration-200"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="naavik-btn naavik-btn-primary mt-2 flex h-[46px] w-full items-center justify-center !rounded-[14px] text-[14px] font-bold shadow-[0_4px_12px_rgba(124,58,237,0.2)] transition-transform duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Early Access"
          )}
        </button>
      </form>

      {/* FOOTER TEXT */}
      <div className="mt-5 mx-auto w-full text-center text-[11px] font-medium leading-[1.4] text-gray-400 shrink-0">
        <p>No spam. One email when your campus goes live.</p>
        <p>Free forever for engineering students.</p>
      </div>
    </div>
  )
})

