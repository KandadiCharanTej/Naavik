'use client'

import { Briefcase, BookOpen, Rocket, Users, Building2, Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Briefcase,
    title: 'Opportunities',
    desc: 'Discover internships, hackathons, and workshops matched to your interests.',
    examples: ['Microsoft Internship', 'Google Solution Challenge', 'Smart India Hackathon'],
    color: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: BookOpen,
    title: 'Study Vault',
    desc: 'Get organized study materials, lab records, and notes from your campus.',
    examples: ['DBMS Unit 1-5 Notes', 'Basic Electrical Lab Manual', 'OS Semester 4 PYQs'],
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    icon: Rocket,
    title: 'Projects',
    desc: 'Showcase your builds to find teammates and get noticed by recruiters.',
    examples: ['AI Chatbot (Next.js)', 'Campus Navigation App', 'IoT Smart Home System'],
    color: 'text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: Users,
    title: 'Connect & Team Finder',
    desc: 'Find developers, designers, and project partners across colleges.',
    examples: ['SIH Hackathon Designer', 'Flutter App Co-Founder', 'Frontend React Developer'],
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    icon: Building2,
    title: 'College Space',
    desc: 'Your college space for updates, resources, and events from your own campus.',
    examples: ['CBIT Tech Fest Registration', 'JNTUH HackFest Announcement', 'VNRVJIET Lab Exam Dates'],
    color: 'text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
  },
  {
    icon: Trophy,
    title: 'Leaderboard & Streaks',
    desc: 'Share verified study notes to build reputation and gain campus recognition.',
    examples: ['Weekly Top Contributors', 'Verified Study Note Badges', 'Resource Sharing Streaks'],
    color: 'text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
  },
]

export function SolutionSection() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="FEATURES"
          title="Everything you need. One place."
          description="Six tools that replace the dozen apps you're juggling right now."
        />

        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <Reveal
              key={feat.title}
              delay={i * 80}
              className="group rounded-2xl border border-border/70 bg-white p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(109,40,217,0.04)] hover:border-primary/20 text-left"
            >
              <div className="flex flex-col items-start gap-4 sm:gap-6">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${feat.color} transition-all duration-300 group-hover:scale-105 shadow-2xs`}>
                  <feat.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground sm:mt-2">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {feat.desc}
                  </p>
                  
                  {/* Real Examples bullet list */}
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-2">Examples</p>
                    <ul className="space-y-1">
                      {feat.examples.map((ex, idx) => (
                        <li key={idx} className="text-xs text-foreground/80 flex items-center gap-1.5">
                          <span className="text-[8px] text-primary">•</span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
