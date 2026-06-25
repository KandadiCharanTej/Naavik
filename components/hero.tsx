'use client'

import { Bell } from 'lucide-react'
import { WaitlistButton } from '@/components/cta-buttons'
import { ConceptPreview } from '@/components/dashboard-mockup'
import { Reveal } from '@/components/reveal'

const trustSignals = [
  'Built by students',
  'Free forever',
  'Starting in TG & AP',
  'Launching soon',
]

export function Hero() {
  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-28 bg-[#FAFAFC]">
      
      {/* Premium subtle background glow effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 10%, rgba(109, 64, 246, 0.08), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'radial-gradient(#6D28D9 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
        
        {/* Intro Tag badges */}
        <Reveal delay={50} className="flex flex-wrap justify-center gap-2 mb-6">
          {trustSignals.map((sig, i) => (
            <span 
              key={i} 
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary"
            >
              <span className="text-[10px]">✦</span> {sig}
            </span>
          ))}
        </Reveal>

        {/* Large Keynote Title (72px target, responsive) */}
        <Reveal delay={100}>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[4.5rem] text-foreground">
            Stop tab-switching. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Start building.
            </span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={150}>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Naviko brings internships, study vaults, peer networks, and campus updates
            into one focused workspace — built specifically for engineering students
            in Telangana & Andhra Pradesh.
          </p>
        </Reveal>

        {/* Action CTAs */}
        <Reveal delay={200} className="mt-8 flex flex-col gap-3.5 w-full sm:w-auto sm:flex-row justify-center items-center">
          <WaitlistButton size="lg" id="hero-waitlist-btn">
            Join the Waitlist — It's Free
          </WaitlistButton>
          
          <a
            href="#how-it-works"
            onClick={handleScrollToHowItWorks}
            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors border border-border bg-white text-foreground hover:bg-muted/50 h-11 px-6 text-sm shadow-xs w-full sm:w-auto cursor-pointer"
          >
            See How It Works ↓
          </a>
        </Reveal>

        {/* Small Disclaimer */}
        <Reveal delay={220} className="mt-4">
          <p className="text-xs text-muted-foreground">
            Early concept — product in active development.
          </p>
        </Reveal>

        {/* Center-aligned Massive Mockup with Floating cards */}
        <Reveal delay={250} className="mt-20 w-full max-w-5xl relative">
          
          {/* Ambient Glow behind mockup */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-accent/15 blur-3xl opacity-60 rounded-full" />
          
          {/* Main App Preview */}
          <div className="hover:scale-[1.01] transition-transform duration-500 shadow-2xl rounded-2xl border border-border bg-white overflow-hidden relative">
            <div className="absolute top-3 right-3 z-20 bg-slate-900/90 text-[#FAFAFC] border border-slate-800 text-[9px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md shadow-md select-none">
              Concept preview · design in progress
            </div>
            <ConceptPreview />
          </div>

          {/* Floating UI Card 1: Study vault file (Top Left) */}
          <div className="hidden lg:flex absolute -top-8 -left-8 bg-white border border-border rounded-xl p-3.5 shadow-lg items-center gap-2.5 max-w-[200px] animate-float">
            <div className="h-8 w-8 rounded bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs select-none">
              PDF
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-foreground">DBMS PYQ (2024)</p>
              <p className="text-[9px] text-muted-foreground">CSE • Semester 4</p>
            </div>
          </div>

          {/* Floating UI Card 2: Opportunities alert (Bottom Right) */}
          <div className="hidden lg:flex absolute -bottom-6 -right-8 bg-white border border-border rounded-xl p-3.5 shadow-lg items-center gap-3 max-w-[220px] text-left">
            <div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center select-none">
              <Bell className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-foreground">Matching Opportunity</p>
              <p className="text-[9px] text-muted-foreground">Smart India Hackathon • Hyderabad</p>
            </div>
          </div>

        </Reveal>

      </div>
    </section>
  )
}
