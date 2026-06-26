'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useWaitlist } from '@/components/waitlist-provider'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { premiumEasing } from '@/components/reveal'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { open: openWaitlist } = useWaitlist()
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8)
    
    // Active section tracking
    const sections = ['inside-naavik', 'admin', 'faq']
    let current = ''
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section
        }
      }
    }
    setActiveSection(current)
  })

  const NAV_LINKS = [
    { label: 'Inside Naavik', href: '#inside-naavik', id: 'inside-naavik' },
    { label: 'Become Admin', href: '#admin', id: 'admin' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: premiumEasing }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        className="w-full border-b transition-colors duration-300"
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
          borderColor: scrolled ? 'rgba(229, 231, 235, 0.7)' : 'rgba(229, 231, 235, 0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8 relative">
          
          {/* LEFT: Logo + dot */}
          <a href="#" className="flex items-center gap-1.5" aria-label="Naavik home">
            <span className="font-bold text-[20px] text-foreground tracking-tight">Naavik</span>
            <span className="h-2 w-2 rounded-full bg-primary" aria-label="Building indicator"></span>
          </a>

          {/* CENTER: Links (desktop only) */}
          <nav className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[16px] font-medium transition-colors"
                style={{
                  color: activeSection === link.id ? 'var(--foreground)' : 'var(--muted-foreground)'
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* RIGHT: Join Early Access */}
          <div className="hidden items-center gap-2 md:flex">
            <button 
              onClick={openWaitlist}
              className="btn-primary !px-[20px] !py-[10px] !text-[15px]"
            >
              Join Early Access &rarr;
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEasing }}
            className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <motion.nav 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col px-5 py-4"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="py-3 text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="mt-4 flex flex-col gap-2"
              >
                <button onClick={() => { openWaitlist(); setOpen(false); }} className="btn-primary">
                  Join Early Access &rarr;
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
