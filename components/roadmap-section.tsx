'use client'

import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const betaFeatures = [
  { title: 'Opportunities', desc: 'Find internships, hackathons, and scholarships.' },
  { title: 'Study Vault', desc: 'Notes, PYQs, and semester study materials.' },
  { title: 'Projects', desc: 'Showcase your builds to peers and founders.' },
  { title: 'Connect & Team Finder', desc: 'Match with project partners and chat.' },
]

const nextFeatures = [
  { title: 'College Workspace', desc: 'A private, authenticated space for your campus.' },
  { title: 'Campus Updates', desc: 'Announcements and fests from verified campus sources.' },
  { title: 'Leaderboards', desc: 'Peer recognition for the top resource contributors.' },
]

const futureFeatures = [
  { title: 'AI Assistant', desc: 'Quick semantic search across notes and study vaults.' },
  { title: 'Recruiters', desc: 'Get direct internship offers based on your builds.' },
  { title: 'Placement Hub', desc: 'Read verified interview reviews from your seniors.' },
  { title: 'Clubs & Alumni', desc: 'Connect with active student chapters and graduates.' },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-[#FAFAFC] relative overflow-hidden">
      {/* Background ambient light details */}
      <div className="absolute left-1/4 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Roadmap"
          title="Here's what we're shipping — and what's coming."
          description="We build in public and prioritise what students actually ask for. This is our live roadmap."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          
          {/* Launching with Beta */}
          <Reveal delay={100} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Launching with Beta</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {betaFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Next Updates */}
          <Reveal delay={150} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Calendar className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Next Updates</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {nextFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mt-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* On the Roadmap */}
          <Reveal delay={200} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">On the Roadmap</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {futureFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted/40 text-muted-foreground mt-0.5">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
