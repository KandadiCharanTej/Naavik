'use client'

import { memo, useEffect, useState } from 'react'
import {
  JoinEarlyAccessForm,
  FormPrivacyText,
  WaitlistProgress,
  type JoinEarlyAccessModalProps,
} from './join-early-access-shared'
import { JoinEarlyAccessModalPhone } from './JoinEarlyAccessModalPhone'
import { Eyebrow } from '@/components/design/primitives'

const FORM_ID = 'join-early-access-tablet-form'

function useIsPhone() {
  const [isPhone, setIsPhone] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsPhone(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isPhone
}

/** Tablet layout: 768px–1023px — unchanged scrollable modal */
const JoinEarlyAccessModalTablet = memo(function JoinEarlyAccessModalTablet({
  waitlistCount,
  error,
  submitting,
  onSubmit,
}: JoinEarlyAccessModalProps) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col overflow-y-auto overscroll-contain bg-white p-6 sm:p-8">
      <Eyebrow tone="purple">🟣 Early Access</Eyebrow>

      <h2 className="mt-4 text-[1.75rem] font-extrabold tracking-[-0.035em] text-foreground sm:text-[2rem]">
        Join Early Access
      </h2>

      <p className="mt-2 text-[14px] font-medium leading-relaxed text-gray-500">
        Join the first students helping shape Naavik. We&apos;ll notify you as soon as your campus goes live.
      </p>

      <WaitlistProgress count={waitlistCount} className="mt-6" />

      <div className="mt-6">
        <JoinEarlyAccessForm
          formId={FORM_ID}
          fieldPrefix="tablet"
          error={error}
          submitting={submitting}
          onSubmit={onSubmit}
        />
      </div>

      <FormPrivacyText className="mt-6 text-center" />
    </div>
  )
})

export const JoinEarlyAccessModalMobile = memo(function JoinEarlyAccessModalMobile(
  props: JoinEarlyAccessModalProps,
) {
  const isPhone = useIsPhone()

  if (isPhone === null) {
    return <div className="h-full min-h-0 w-full bg-white" aria-hidden />
  }

  return isPhone ? (
    <JoinEarlyAccessModalPhone {...props} />
  ) : (
    <JoinEarlyAccessModalTablet {...props} />
  )
})
