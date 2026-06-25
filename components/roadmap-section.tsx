'use client'

import { Sparkles, Calendar, CheckCircle2, Clock, Circle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const betaFeatures = [
  { title: 'Opportunities', desc: 'Discover internships, hackathons, and workshops.' },
  { title: 'Resources', desc: 'Get study vaults, notes, and lab manuals.' },
  { title: 'Projects', desc: 'Showcase your builds to peers and founders.' },
  { title: 'Team Finder', desc: 'Find teammates and project partners.' },
  { title: 'Student Profiles', desc: 'Create your professional student resume.' },
  { title: 'Growth Feed', desc: 'Connect with students across campuses.' },
]

const nextFeatures = [
  { title: 'College Space', desc: 'Private organized workspace for your college.' },
  { title: 'Campus Updates', desc: 'Official event & exam updates from your campus.' },
  { title: 'Leaderboards', desc: 'Rankings for top resource contributors.' },
  { title: 'Streaks', desc: 'Build daily study and contribution streaks.' },
]

const futureFeatures = [
  { title: 'AI Assistant', desc: 'Instant semantic search over all notes.' },
  { title: 'Recruiters', desc: 'Get direct internship hiring offers.' },
  { title: 'Placement Experiences', desc: 'Verified senior interview walkthroughs.' },
  { title: 'Clubs', desc: 'Connect with active student chapters.' },
  { title: 'Alumni', desc: 'Find graduates from your college.' },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-[#FAFAFC] relative overflow-hidden">
      {/* Background ambient light details */}
      <div className="absolute left-1/4 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="ROADMAP"
          title="What's shipping — and what's next."
          description="We build in public. Here is our product roadmap, shaped directly by engineering students."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          
          {/* Available at Launch */}
          <Reveal delay={100} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Available at Launch</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {betaFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5">
                      <CheckCircle2 className="h-3 w-3" />
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

          {/* Coming Soon */}
          <Reveal delay={150} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Clock className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Coming Soon</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {nextFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mt-0.5">
                      <Clock className="h-3 w-3" />
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

          {/* Future Updates */}
          <Reveal delay={200} className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border/40 pb-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Circle className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Future Updates</span>
              </div>
              
              <ul className="space-y-4 text-left">
                {futureFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted/40 text-muted-foreground mt-0.5">
                      <Circle className="h-3 w-3" />
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

