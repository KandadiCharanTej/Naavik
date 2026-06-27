'use client'

import { memo } from 'react'
import {
  JoinEarlyAccessForm,
  FormPrivacyText,
  LeftPanelContent,
  type JoinEarlyAccessModalProps,
} from './join-early-access-shared'

const FORM_ID = 'join-early-access-desktop-form'

export const JoinEarlyAccessModalDesktop = memo(function JoinEarlyAccessModalDesktop({
  waitlistCount,
  error,
  submitting,
  onSubmit,
}: JoinEarlyAccessModalProps) {
  return (
    <div
      className="grid h-full min-h-0 w-full overflow-hidden"
      style={{ gridTemplateColumns: '40% 60%' }}
    >
      <aside className="relative flex min-h-0 items-center overflow-hidden bg-gradient-to-br from-[#FAFAFF] via-white to-[#F5F3FF] px-10 xl:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_70%)]"
        />
        <div className="relative w-full min-w-0 max-w-[360px]">
          <LeftPanelContent waitlistCount={waitlistCount} />
        </div>
      </aside>

      <section className="relative flex min-h-0 items-center justify-center overflow-hidden bg-white px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.1),transparent_70%)]"
        />

        <div
          className="relative w-[440px] max-w-full shrink-0 rounded-[24px] border border-gray-100/80 bg-white p-8 shadow-[0_24px_64px_rgba(124,58,237,0.1),0_8px_24px_rgba(0,0,0,0.06)]"
          style={{ width: 440 }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)]/50 to-transparent"
          />

          <JoinEarlyAccessForm
            formId={FORM_ID}
            fieldPrefix="desktop"
            error={error}
            submitting={submitting}
            onSubmit={onSubmit}
          />

          <FormPrivacyText className="mt-5" />
        </div>
      </section>
    </div>
  )
})
