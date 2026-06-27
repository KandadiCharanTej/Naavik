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
          className={`flex w-full items-center justify-between rounded-full border px-2 py-1.5 pl-4 transition-all duration-500 max-w-[680px] md:max-w-[800px] md:py-2.5 md:pl-6 md:px-3 ${
            scrolled
              ? 'border-gray-200/80 bg-white/90 shadow-[0_2px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl'
              : 'border-white/60 bg-white/60 shadow-[0_2px_16px_rgba(0,0,0,0.04)] backdrop-blur-lg'
          }`}
        >
          <a href="#" aria-label="Naavik home" className="shrink-0">
            <Logo className="h-5 w-auto md:h-7" />
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 md:px-5 md:py-2 text-[13px] md:text-[14px] font-medium transition-colors ${
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
              className="naavik-btn naavik-btn-primary !hidden md:!inline-flex !h-10 !rounded-full !px-5 !text-[14px]"
            >
              Join Early Access
              <ArrowRight className="h-4 w-4 ml-0.5" />
            </button>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-gray-100/80 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: premiumEasing }}
              className="fixed left-4 right-4 top-[76px] z-50 rounded-[24px] bg-white p-5 shadow-[0_16px_48px_rgba(0,0,0,0.15)] border border-gray-100 md:hidden"
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gray-100 py-3.5 text-[16px] font-semibold text-gray-900 last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => {
                  openWaitlist()
                  setOpen(false)
                }}
                className="naavik-btn naavik-btn-primary mt-4 h-12 w-full !rounded-[16px] text-[15px]"
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
