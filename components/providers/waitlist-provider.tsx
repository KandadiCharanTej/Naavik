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
    if (submitting) return
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const college = (formData.get('college') as string)?.trim()
    const website = (formData.get('website') as string) || ''

    if (!name || name.length < 2) {
      setError('Please enter your full name.')
      return
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!college || college.length < 3) {
      setError('Please enter your college name.')
      return
    }

    // Client validation passed.
    setSubmitting(true)
    setNavigating(true)

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, college, website }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong.')
        setSubmitting(false)
        setNavigating(false)
        return
      }

      // Track analytics
      trackWaitlistSubmitted(college)

      // Navigate to success page
      router.push(
        `/success?position=${data.position || waitlistCount + 1}&name=${encodeURIComponent(name)}`
      )
    } catch (err) {
      setError('Network error. Please try again.')
      setSubmitting(false)
      setNavigating(false)
    }
  }

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
            submitting={false}
            onSubmit={handleSubmit}
            onClose={close}
          />
        </div>
      </WaitlistModalPortal>
    </WaitlistContext.Provider>
  )
}
