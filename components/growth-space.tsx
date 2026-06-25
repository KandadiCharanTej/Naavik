'use client'

import { Briefcase, Users, Globe, Cpu, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'

export function GrowthSpace() {
  return (
    <section id="growth-space" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Premium Immersive Layered Mockup */}
          <div className="lg:col-span-7 relative order-last lg:order-first">
            <div className="relative min-h-[460px] w-full flex items-center justify-center">
              
              {/* Central base panel: Global Network Feed */}
              <div className="w-[85%] rounded-2xl border border-border bg-[#FAFAFC] p-6 shadow-2xs z-0">
                <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-extrabold uppercase text-foreground tracking-wider">AP & TG growth feed</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                
                {/* Mock post */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center text-[9px] font-bold text-indigo-700">A</span>
                    <p className="text-[10px] font-semibold text-foreground">Student A • CSE • VNR VJIET</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed text-left">
                    "Forming a team for Smart India Hackathon. Need a React Native developer from any college in Hyderabad. DMs open!"
                  </p>
                </div>
              </div>

              {/* Layered Overlay 1: Opportunities Card (Top Right floating) */}
              <Reveal
                delay={100}
                className="absolute top-4 right-2 w-[240px] rounded-xl border border-primary/20 bg-white/95 backdrop-blur-md p-4 shadow-lg z-10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-sm">Opportunities</span>
                  <Briefcase className="h-3 w-3 text-primary" />
                </div>
                <h4 className="text-xs font-bold text-foreground truncate">Internship Opportunity</h4>
                <p className="text-[9px] text-muted-foreground mt-0.5">Hyderabad • CSE / ECE • 2nd & 3rd Year</p>
              </Reveal>

              {/* Layered Overlay 2: Team Match Finder (Bottom Left floating) */}
              <Reveal
                delay={200}
                className="absolute bottom-8 left-2 w-[220px] rounded-xl border border-emerald-200 bg-white/95 backdrop-blur-md p-4 shadow-lg z-20 hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm">Team Finder</span>
                  <Users className="h-3 w-3 text-emerald-600" />
                </div>
                <h4 className="text-xs font-bold text-foreground">Hackathon Partner</h4>
                <p className="text-[9px] text-muted-foreground mt-0.5">Looking for Designer • UI/UX</p>
                <div className="mt-2.5 h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-emerald-500" />
                </div>
              </Reveal>

              {/* Layered Overlay 3: Scholarship / Fest alert (Bottom Right floating) */}
              <Reveal
                delay={300}
                className="absolute bottom-16 right-4 w-[180px] rounded-xl border border-border bg-white/90 backdrop-blur-md p-3.5 shadow-md z-10 text-left"
              >
                <div className="flex items-center gap-1.5 text-amber-600 font-semibold text-[10px]">
                  <Cpu className="h-3 w-3 animate-spin" /> Tech Alert
                </div>
                <p className="text-[10px] text-foreground font-semibold mt-1 truncate">Google Generation Scholarship</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">Apply before June 30</p>
              </Reveal>

            </div>
          </div>

          {/* Right: Pitch & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
              Growth Space
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] leading-[1.15]">
              Your campus is a starting point, not a ceiling.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Growth Space opens your network to engineering students across Telangana & AP — for teams, ideas, and real opportunities.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Global Opportunity Hub</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Internships, hackathons, and scholarships that never make it to your college noticeboard — delivered directly to you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Cross-Campus Teams</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Build your hackathon team with the best people available, not just who happens to be in your class.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Co-Founder Directory</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Have a startup idea but missing a technical co-founder? Pitch it here and find someone who actually wants to build with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <WaitlistButton size="lg" id="growth-space-keynote-btn">
                Join the Founding Students
              </WaitlistButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
