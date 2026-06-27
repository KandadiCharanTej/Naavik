'use client'

import { memo, useEffect, useState } from 'react'
import { JoinEarlyAccessModalDesktop } from './JoinEarlyAccessModalDesktop'
import { JoinEarlyAccessModalMobile } from './JoinEarlyAccessModalMobile'
import type { JoinEarlyAccessModalProps } from './join-early-access-shared'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export type { JoinEarlyAccessModalProps }

export const JoinEarlyAccessModal = memo(function JoinEarlyAccessModal(
  props: JoinEarlyAccessModalProps,
) {
  const isDesktop = useIsDesktop()

  if (isDesktop === null) {
    return <div className="h-full min-h-[320px] w-full bg-white" aria-hidden />
  }

  return isDesktop ? (
    <JoinEarlyAccessModalDesktop {...props} />
  ) : (
    <JoinEarlyAccessModalMobile {...props} />
  )
})
