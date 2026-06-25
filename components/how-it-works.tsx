import { Compass, TrendingUp, UserPlus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Create Your Profile',
    desc: 'Sign up with your college email. Set your branch, year, and skills. Naviko personalises your feed from day one.',
  },
  {
    icon: Compass,
    step: '02',
    title: "Explore What's Relevant",
    desc: "Browse opportunities, study resources, and campus updates filtered specifically for your semester and branch.",
  },
  {
    icon: TrendingUp,
    step: '03',
    title: 'Contribute and Get Recognised',
    desc: 'Share notes, showcase projects, and build a reputation that follows you beyond your campus.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-[#FAFAFC]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading 
          eyebrow="HOW IT WORKS" 
          title="Up and running in under 3 minutes." 
          description="Simple, fast, and designed to fit into your busy engineering schedule."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-10 right-10 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 120}
              className="relative rounded-2xl border border-border bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-extrabold text-muted-foreground/20">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground text-left">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-left">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
