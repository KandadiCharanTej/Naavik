'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { useWaitlist } from './waitlist-provider'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '#inside-naavik', label: 'Inside Naavik' },
  { href: '#product-preview', label: 'Tour' },
  { href: '#admin', label: 'Admin' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { open: openWaitlist } = useWaitlist()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section Highlight Logic
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      let current = ''
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/50 bg-white/80 backdrop-blur-xl shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center" aria-label="Naavik home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive ? "bg-secondary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-secondary/5"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button 
            onClick={openWaitlist}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
          >
            Join Early Access
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground bg-secondary/5 border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 border-b border-border bg-white/95 backdrop-blur-xl md:hidden shadow-lg"
          >
            <nav className="flex flex-col px-5 py-6 gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-3 px-4 text-base font-bold rounded-xl transition-colors",
                      isActive ? "bg-secondary/10 text-primary" : "text-muted-foreground hover:bg-secondary/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                )
              })}
              <div className="mt-4 pt-4 border-t border-border">
                <button 
                  onClick={() => {
                    setOpen(false)
                    openWaitlist()
                  }}
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-base font-bold text-primary-foreground shadow-sm transition-all active:scale-[0.98]"
                >
                  Join Early Access
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
