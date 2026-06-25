'use client'

import { Briefcase, BookOpen, Rocket, Users, Building2, Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Briefcase,
    title: 'Opportunities',
    desc: "Stop scrolling LinkedIn hoping something appears. Naavik surfaces internships, hackathons, and scholarships filtered by branch & year — so you only see what's relevant to you.",
    color: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: BookOpen,
    title: 'Study Vault',
    desc: 'Your college\'s entire knowledge base — organized. PYQs, unit-wise notes, lab manuals, and exam prep, uploaded and verified by trusted student admins. No more begging seniors on WhatsApp at midnight.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    icon: Rocket,
    title: 'Projects',
    desc: "Your projects deserve an audience beyond your professor. Showcase what you've built to peers, startup founders, and recruiters who are actively looking for student developers.",
    color: 'text-rose-600 bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: Users,
    title: 'Connect',
    desc: 'Hackathon deadline in 3 days and no team? Find developers, designers, and researchers from colleges across Telangana & AP — with the exact skills your project needs.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    icon: Building2,
    title: 'College Workspace',
    desc: 'Your campus, digitally organized. A private, verified space for your college — official announcements, event updates, and resources moderated by your campus admin. No noise. No spam.',
    color: 'text-amber-600 bg-amber-50 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
  },
  {
    icon: Trophy,
    title: 'Leaderboards',
    desc: 'Good contributions don\'t go unnoticed. Upload notes, share resources, and earn points that build your reputation on campus. The students who help others get recognized.',
    color: 'text-purple-600 bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
  },
]

export function SolutionSection() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="FEATURES"
          title="Six tools. One workspace. Zero friction."
          description="We replaced messy messaging groups and scattered folders with six core student utilities."
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
