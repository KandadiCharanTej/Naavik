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
import { ArrowRight, Check, AlertCircle, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
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
        <DialogContent 
          overlayClassName="!bg-white supports-backdrop-filter:!bg-white supports-backdrop-filter:!backdrop-blur-none" 
          className="sm:max-w-[480px] p-0 border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[24px] overflow-hidden bg-white"
        >
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10"
              >
                <div className="text-center mb-8">
                  <h2 className="text-[28px] font-extrabold tracking-tight text-gray-900 mb-3">Join Early Access</h2>
                  <p className="text-[15px] text-gray-500 font-medium leading-relaxed max-w-[340px] mx-auto">
                    Join the first students helping shape Naavik. We'll notify you as soon as your campus goes live.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[13px] font-semibold text-gray-700">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--purple-600)] focus:border-transparent transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[13px] font-semibold text-gray-700">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@college.edu.in"
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--purple-600)] focus:border-transparent transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="college" className="text-[13px] font-semibold text-gray-700">College</label>
                    <input
                      id="college"
                      name="college"
                      type="text"
                      required
                      placeholder="Your college name"
                      className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--purple-600)] focus:border-transparent transition-all shadow-sm"
                    />
                  </div>

                  <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-[13px] font-medium border border-red-100">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
                  >
                    {submitting ? 'Joining...' : (
                      <>
                        Join Early Access
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center flex flex-col gap-1 text-[12px] font-medium text-gray-400">
                  <p>Free forever for engineering students.</p>
                  <p>No spam. We'll only email important updates.</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--purple-50)] text-[var(--purple-600)] flex items-center justify-center mb-6 shadow-inner ring-1 ring-[var(--purple-100)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h2 className="text-[24px] font-extrabold text-gray-900 tracking-tight mb-2">You're on the Early Access List!</h2>
                <p className="text-[15px] font-medium text-gray-500 leading-relaxed max-w-[300px]">
                  Welcome aboard. You're now one of the first students helping build Naavik.
                </p>

                <div className="mt-8 mb-8 w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col items-center">
                  <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-2">Early Access Position</span>
                  <div className="text-[40px] font-black text-[var(--purple-600)] leading-none">#{position}</div>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <button
                    onClick={goToThankYou}
                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.01]"
                  >
                    View My Spot
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full h-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-[16px] font-bold transition-all shadow-sm"
                  >
                    Done
                  </button>
                </div>
                
                <p className="mt-8 text-[13px] font-medium text-gray-400">
                  We'll email you when your campus is ready.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  )
}
