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
import { ArrowRight, Check, Loader2, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { trackWaitlistButtonClick, trackWaitlistSubmitted } from '@/lib/analytics'

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
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [position, setPosition] = useState(0)
  const [userName, setUserName] = useState('')
  const router = useRouter()

  const open = useCallback(() => {
    setDone(false)
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
    const website = (formData.get('website') as string) || '' // honeypot

    // Client-side validation
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

      setPosition(data.position)
      setUserName(name)
      setDone(true)
      trackWaitlistSubmitted(college)
      toast.success('You\'re on the list!')
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function goToThankYou() {
    setIsOpen(false)
    router.push(`/thank-you?position=${position}&name=${encodeURIComponent(userName)}`)
  }

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          {done ? (
            <div className="flex flex-col items-center py-4 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                You&apos;re on the early access list!
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Waitlist position: <span className="font-semibold text-primary">#{position}</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                Thank you for your interest. We&apos;re building Naviko in the
                open and will email you as soon as there&apos;s something to try.
              </p>
              <div className="mt-6 flex w-full flex-col gap-2">
                <Button onClick={goToThankYou}>
                  View your spot & share
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl tracking-tight">
                  Join early access
                </DialogTitle>
                <DialogDescription>
                  Three quick details. We&apos;ll keep you posted as we build —
                  no spam.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="mt-1 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="waitlist-name">Name</Label>
                  <Input
                    id="waitlist-name"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waitlist-email">Email</Label>
                  <Input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waitlist-college">College</Label>
                  <Input
                    id="waitlist-college"
                    name="college"
                    required
                    placeholder="Your college name"
                    autoComplete="organization"
                    minLength={3}
                    maxLength={200}
                  />
                </div>

                {/* Honeypot — hidden from humans, filled by bots */}
                <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
                  <Input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitting}
                  id="waitlist-submit-btn"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Join Early Access
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Free for students. We&apos;ll only email about Naviko.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  )
}
