'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useWaitlist } from '@/components/waitlist-provider'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { open: openWaitlist } = useWaitlist()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NAV_LINKS = [
    { label: 'Inside Naavik', href: '#inside-naavik' },
    { label: 'Become Admin', href: '#admin' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:px-8">
        
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
              className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
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
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <button onClick={() => { openWaitlist(); setOpen(false); }} className="btn-primary">
                Join Early Access &rarr;
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
