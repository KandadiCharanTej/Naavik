'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useWaitlist } from '@/components/providers/waitlist-provider'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { premiumEasing } from '@/components/animations/reveal'
import { Logo } from '@/components/ui/logo'

const NAV_LINKS = [
  { label: 'Inside Naavik', href: '#inside-naavik', id: 'inside-naavik' },
  { label: 'Become Admin', href: '#admin', id: 'admin' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { open: openWaitlist } = useWaitlist()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
    let current = ''
    for (const id of ['inside-naavik', 'admin', 'faq']) {
      const el = document.getElementById(id)
      if (el) {
        const r = el.getBoundingClientRect()
        if (r.top <= 100 && r.bottom >= 100) current = id
      }
    }
    setActiveSection(current)
  })

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
        <div
          className={`flex w-full max-w-[680px] items-center justify-between rounded-full border px-2 py-1.5 pl-4 transition-all duration-500 sm:px-2 sm:pl-5 ${
            scrolled
              ? 'border-gray-200/80 bg-white/90 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
              : 'border-white/60 bg-white/60 shadow-[0_2px_16px_rgba(0,0,0,0.04)] backdrop-blur-lg'
          }`}
        >
          <a href="#" aria-label="Naavik home" className="shrink-0">
            <Logo className="h-5 w-auto sm:h-6" />
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-foreground'
                    : 'text-gray-500 hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={openWaitlist}
              className="hidden h-8 items-center gap-1 rounded-full bg-[var(--purple-600)] px-4 text-[12px] font-semibold text-white shadow-[0_2px_12px_rgba(124,58,237,0.35)] transition-all hover:bg-[var(--purple-700)] md:inline-flex"
            >
              Join Early Access
              <ArrowRight className="h-3 w-3" />
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-gray-100/80 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.4, ease: premiumEasing }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-[28px] bg-white px-5 pb-10 pt-5 shadow-[0_-24px_80px_rgba(0,0,0,0.12)] md:hidden"
            >
              <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-gray-200" />
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gray-100 py-4 text-[17px] font-semibold text-gray-900 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  openWaitlist()
                  setOpen(false)
                }}
                className="naavik-btn naavik-btn-primary mt-6 h-14 w-full !rounded-2xl text-[16px]"
              >
                Join Early Access →
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
