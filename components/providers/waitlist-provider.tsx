'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { trackWaitlistButtonClick, trackWaitlistSubmitted } from '@/lib/analytics'
import { WaitlistFormPanel } from '@/components/waitlist/waitlist-flow-ui'

type WaitlistContextValue = {
  open: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider')
  return ctx
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [waitlistCount, setWaitlistCount] = useState(128)
  const router = useRouter()

  const open = useCallback(() => {
    setError('')
    setIsOpen(true)
    trackWaitlistButtonClick()
  }, [])

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
      setIsOpen(false)
      router.push(
        `/thank-you?position=${data.position}&name=${encodeURIComponent(name)}`,
      )
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          overlayClassName="!bg-black/50"
          className="flex max-h-[min(92dvh,760px)] w-[min(1040px,95vw)] max-w-none flex-col overflow-hidden rounded-[24px] border border-white/20 bg-white p-0 shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
        >
          <WaitlistFormPanel
            waitlistCount={waitlistCount}
            error={error}
            submitting={submitting}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  )
}
