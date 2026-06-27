'use client'

import { Reveal, StaggerContainer, StaggerItem, premiumEasing } from '@/components/reveal'
import { motion } from 'framer-motion'

export function DayWithNaavik() {
  const cards = [
    {
      time: '☀️ 8:30 AM',
      title: 'Morning',
      body: 'A new internship notification from Razorpay just arrived. Deadline: tomorrow.\n\nYou almost missed it last time. Not anymore.',
      cta: 'Apply Now'
    },
    {
      time: '🌤 2:15 PM',
      title: 'Afternoon',
      body: 'The IEEE club event starts in 2 hours. Your campus just posted a reminder.\n\nYou almost forgot. Again.',
      cta: 'RSVP Now'
    },
    {
      time: '🌆 7:00 PM',
      title: 'Evening',
      body: "Your senior just uploaded DBMS unit 3 & 4 notes. Exam: 3 days away.\n\nNo more 'bhai notes bhejo' at midnight.",
      cta: 'Download Notes'
    },
    {
      time: '🌙 11:00 PM',
      title: 'Night',
      body: 'A student from CBIT needs a React Native dev for SIH. Deadline: 48 hours.\n\nYour next hackathon team is one tap away.',
      cta: 'View Post'
    }
  ]

  return (
    <section className="bg-[var(--bg-white)] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12 md:mb-16">
            <span className="eyebrow-label">A DAY WITH NAAVIK</span>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.1] text-foreground whitespace-normal overflow-visible break-normal">
              See how it fits into your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-600)] to-[var(--purple-400)] pb-1 pr-1">day.</span>
            </h2>
            <p className="mt-4 text-[16px] md:text-[18px] text-muted-foreground leading-relaxed max-w-[600px]">
              Real scenarios. Real value. Every day.
            </p>
          </div>
        </Reveal>

        {/* 4 Time Cards */}
        <StaggerContainer delay={100} className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 lg:overflow-visible lg:pb-0">
          {cards.map((card, idx) => (
            <StaggerItem key={idx} className="min-w-[280px] w-[280px] lg:w-auto lg:min-w-0 snap-center flex-shrink-0 flex">
              <div 
                className="ui-preview-card flex flex-col h-full group w-full"
              >
                <div className="text-[12px] text-muted-foreground font-medium mb-2 uppercase tracking-wider">{card.time}</div>
                <h3 className="text-[20px] font-bold text-foreground mb-4">{card.title}</h3>
                
                <div className="h-px w-full bg-border/50 mb-4"></div>
                
                <p className="text-[15px] text-muted-foreground leading-relaxed whitespace-pre-wrap flex-grow mb-6">
                  {card.body}
                </p>
                
                <div className="mt-auto">
                  <a href="#" className="text-[14px] font-semibold text-[var(--purple-600)] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    {card.cta} &rarr;
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer Text */}
        <Reveal delay={200}>
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-[24px] font-bold text-foreground">
              All of this — from one app.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
