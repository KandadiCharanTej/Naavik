'use client'

import { useWaitlist } from '@/components/providers/waitlist-provider'

export function LiveFinalCtaProgress({
  initialWaitlistCount,
  waitlistGoal,
}: {
  initialWaitlistCount: number
  waitlistGoal: number
}) {
  const { count } = useWaitlist()
  const displayCount = Math.max(initialWaitlistCount, count)
  const progressPercentage = Math.min(100, Math.round((displayCount / waitlistGoal) * 100))

  return (
    <div className="relative mx-auto mt-10 max-w-sm">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[13px] font-medium text-gray-500 sm:text-[14px]">
          {displayCount} / {waitlistGoal} students have joined early access.
        </p>
        <span className="text-[13px] font-bold tabular-nums text-[var(--purple-600)]">
          {progressPercentage}%
        </span>
      </div>
      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)] transition-all duration-1000"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}
