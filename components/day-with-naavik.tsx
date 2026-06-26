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
    <section className="bg-[var(--bg-white)] py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12">
            <span className="eyebrow-label">A DAY WITH NAAVIK</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight">
              See how it fits into your day.
            </h2>
            <p className="mt-4 text-[17px] text-[#6B7280]">
              Real scenarios. Real value. Every day.
            </p>
          </div>
        </Reveal>

        {/* 4 Time Cards */}
        <StaggerContainer delay={100} className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar -mx-5 px-5 lg:mx-0 lg:px-0 lg:overflow-visible lg:pb-0">
          {cards.map((card, idx) => (
            <StaggerItem key={idx} className="min-w-[280px] w-[280px] lg:w-auto lg:min-w-0 snap-center flex-shrink-0 flex">
              <motion.div 
                whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}
                transition={{ duration: 0.3, ease: premiumEasing }}
                className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 shadow-sm flex flex-col h-auto lg:max-h-[260px] relative group w-full"
              >
                <div className="text-[12px] text-[#6B7280] font-medium mb-1">{card.time}</div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-4">{card.title}</h3>
                
                <div className="h-px w-full bg-[#F3F4F6] mb-4"></div>
                
                <p className="text-[14px] text-[#374151] leading-[1.6] whitespace-pre-wrap flex-grow mb-6">
                  {card.body}
                </p>
                
                <div className="mt-auto">
                  <a href="#" className="text-[13px] font-semibold text-[var(--purple-600)] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    {card.cta} &rarr;
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer Text */}
        <Reveal delay={200}>
          <div className="mt-12 lg:mt-16 text-center">
            <p className="text-[22px] font-bold text-[#111827]">
              All of this — from one app.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
