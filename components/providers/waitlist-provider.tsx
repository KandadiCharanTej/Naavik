'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { trackWaitlistButtonClick, trackWaitlistSubmitted } from '@/lib/analytics'
import { cn } from '@/lib/utils'
import { JoinEarlyAccessModal } from '@/components/waitlist/JoinEarlyAccessModal'
import { WaitlistModalPortal } from '@/components/waitlist/WaitlistModalPortal'

type WaitlistContextValue = {
  open: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider')
  return ctx
}

export function WaitlistProvider({ children, initialCount = 128 }: { children: ReactNode; initialCount?: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [navigating, setNavigating] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(initialCount)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/success') {
      setIsOpen(false)
      setSubmitting(false)
      setNavigating(false)
    }
  }, [pathname])

  const open = useCallback(() => {
    setError('')
    setSubmitting(false)
    setNavigating(false)
    setIsOpen(true)
    trackWaitlistButtonClick()
  }, [])

  const close = useCallback(() => {
    if (navigating) return
    setIsOpen(false)
  }, [navigating])

  const value = useMemo(() => ({ open }), [open])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const college = (formData.get('college') as string)?.trim()
    const website = (formData.get('website') as string) || ''

    if (!name || name.length < 2) {
      setError('Please enter your full name.')
      setSubmitting(false)
      return
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      setSubmitting(false)
      return
    }

    if (!college || college.length < 3) {
      setError('Please enter your college name.')
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, college, website }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      setWaitlistCount(data.position)
      trackWaitlistSubmitted(college)
      setNavigating(true)
      router.push(
        `/success?position=${data.position}&name=${encodeURIComponent(name)}`,
      )
    } catch {
      setError('Network error. Please check your connection and try again.')
      setSubmitting(false)
      setNavigating(false)
    }
  }

  const showLoadingOverlay = submitting || navigating

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModalPortal
        open={isOpen}
        onClose={close}
        preventClose={navigating}
        className={cn(
          'border border-white/20 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.25)]',
          'max-md:w-[92vw] max-md:max-w-[420px] max-md:max-h-[98dvh] max-md:rounded-[28px] max-md:shadow-[0_0_60px_rgba(124,58,237,0.15)]',
          'md:h-[min(90dvh,760px)] md:w-[95vw] md:rounded-[24px]',
          'lg:h-[540px] lg:max-h-[90vh] lg:w-[1000px] lg:max-w-[1050px] lg:rounded-[28px]',
        )}
      >
        <div className="relative flex h-full min-h-0 w-full flex-col">
          <JoinEarlyAccessModal
            waitlistCount={waitlistCount}
            error={error}
            submitting={submitting}
            onSubmit={handleSubmit}
            onClose={close}
          />

          {showLoadingOverlay ? (
            <div
              aria-live="polite"
              aria-busy="true"
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/90"
            >
              <Loader2 className="h-8 w-8 animate-spin text-[var(--purple-600)]" />
              <p className="mt-3 text-[14px] font-semibold text-gray-600">
                {navigating ? 'Taking you to your confirmation…' : 'Joining…'}
              </p>
            </div>
          ) : null}
        </div>
      </WaitlistModalPortal>
    </WaitlistContext.Provider>
  )
}
