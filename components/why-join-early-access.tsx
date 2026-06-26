'use client'

import { useWaitlist } from './waitlist-provider'

interface WhyJoinEarlyAccessProps {
  waitlistCount?: number
}

export function WhyJoinEarlyAccess({ waitlistCount = 217 }: WhyJoinEarlyAccessProps) {
  const { open } = useWaitlist()

  const cards = [
    {
      icon: '🚀',
      title: 'First Access',
      text: 'Be among the very first students at your campus when your college goes live on Naavik.',
    },
    {
      icon: '🗳',
      title: 'Shape Naavik',
      text: 'Early members vote on which features get built next. Your feedback goes directly to the founders.',
    },
    {
      icon: '🔔',
      title: 'Campus Alerts',
      text: "The moment your college goes live, you'll be the first to know. No waiting.",
    }
  ]

  return (
    <section className="bg-[#F9FAFB] py-20 sm:py-32" id="why-join">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center sm:text-left mb-16">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1 rounded-full border border-primary/20">Early Access</span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why join now?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{card.icon}</span>
                <h3 className="text-base font-bold text-foreground">{card.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={open}
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] sm:w-auto min-h-[52px]"
          >
            Reserve Early Access
          </button>
        </div>
      </div>
    </section>
  )
}
