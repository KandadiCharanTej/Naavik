'use client'

import { useWaitlist } from './waitlist-provider'

interface FinalCtaProps {
  waitlistCount?: number
}

export function FinalCta({ waitlistCount = 217 }: FinalCtaProps) {
  const { open } = useWaitlist()
  const percentage = Math.min(Math.floor((waitlistCount / 500) * 100), 100)

  return (
    <section className="bg-[#0F0F0F] pt-24 pb-12 sm:pt-32" id="final-cta">
      <div className="mx-auto max-w-4xl px-5 text-center flex flex-col items-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
          Join the first students.
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Be first when your campus goes live.
        </p>

        <div className="mx-auto mt-12 w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="flex items-center justify-between text-[13px] font-semibold text-white/80">
            <span>{waitlistCount} / 500 Students Joined</span>
            <span>{percentage}%</span>
          </div>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out rounded-full" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="mt-12 mb-24 w-full">
          <button 
            onClick={open}
            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] sm:w-auto min-h-[52px]"
          >
            Reserve Early Access
          </button>
        </div>
      </div>
    </section>
  )
}
