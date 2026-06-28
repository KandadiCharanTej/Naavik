'use client'

import { useRef } from 'react'
import { Reveal, premiumEasing } from '@/components/animations/reveal'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import {
  PageContainer,
  Section,
  SectionHeader,
  Eyebrow,
} from '@/components/design/primitives'
import { cn } from '@/lib/utils'

const cards = [
  {
    time: '☀️ 8:30 AM',
    title: 'Morning',
    body: 'A new internship notification from Razorpay just arrived. Deadline: tomorrow.\n\nYou almost missed it last time. Not anymore.',
    cta: 'Apply Now',
  },
  {
    time: '🌤 2:15 PM',
    title: 'Afternoon',
    body: 'The IEEE club event starts in 2 hours. Your campus just posted a reminder.\n\nYou almost forgot. Again.',
    cta: 'Register Now',
  },
  {
    time: '🌆 7:00 PM',
    title: 'Evening',
    body: "Your senior just uploaded DBMS unit 3 & 4 notes. Exam: 3 days away.\n\nNo more 'bhai notes bhejo' at midnight.",
    cta: 'Download Notes',
  },
  {
    time: '🌙 11:00 PM',
    title: 'Night',
    body: 'A student from CBIT needs a React Native dev for SIH. Deadline: 48 hours.\n\nYour next hackathon team is one tap away.',
    cta: 'View Post',
  },
]

function TimelineNode({ active = false }: { active?: boolean }) {
  return (
    <motion.div
      className={cn(
        'relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-4 ring-white',
        active ? 'bg-[var(--purple-600)]' : 'bg-gray-200',
      )}
      animate={active ? { scale: [1, 1.12, 1] } : { scale: 1 }}
      transition={{ duration: 0.5, ease: premiumEasing }}
    >
      {active && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[var(--purple-500)]"
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 1.8 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        />
      )}
      <span className={cn('h-2 w-2 rounded-full', active ? 'bg-white' : 'bg-gray-400')} />
    </motion.div>
  )
}

function JourneyCard({
  card,
  index,
  className,
}: {
  card: (typeof cards)[number]
  index: number
  className?: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: premiumEasing }}
      className={cn(
        'group relative flex h-full min-w-[280px] max-w-[320px] flex-col snap-center border border-gray-200/70 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(124,58,237,0.08)] sm:min-w-[300px]',
        className,
      )}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
        {card.time}
      </p>
      <h3 className="mt-2 text-[18px] font-bold tracking-[-0.02em]">{card.title}</h3>
      <p className="mt-3 flex-1 whitespace-pre-wrap text-[14px] leading-relaxed text-gray-500">
        {card.body}
      </p>
      <a
        href="#"
        className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-[var(--purple-600)] transition-colors hover:text-[var(--purple-700)]"
      >
        {card.cta}
        <motion.span
          className="inline-block"
          initial={false}
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          →
        </motion.span>
      </a>
    </motion.article>
  )
}

export function DayWithNaavik() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  const { scrollXProgress } = useScroll({ container: scrollRef })
  const lineScaleX = useSpring(useTransform(scrollXProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 20,
  })

  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileRef,
    offset: ['start end', 'end start'],
  })
  const lineScaleY = useSpring(useTransform(mobileProgress, [0.1, 0.85], [0, 1]), {
    stiffness: 80,
    damping: 20,
  })

  return (
    <Section surface="white">
      <PageContainer>
        <Reveal>
          <SectionHeader
            eyebrow={<Eyebrow tone="purple">A DAY WITH NAAVIK</Eyebrow>}
            title={
              <>
                See how it fits into your{' '}
                <span className="text-[var(--purple-600)]">day.</span>
              </>
            }
            lead="Real scenarios. Real value. Every day."
          />
        </Reveal>

        {/* Desktop: horizontal scroll-snap journey with progress line */}
        <div className="relative mt-12 hidden lg:block">
          <div className="relative mb-8 px-2">
            <div className="absolute left-2 right-2 top-1/2 h-px -translate-y-1/2 bg-gray-200" />
            <motion.div
              className="absolute left-2 right-2 top-1/2 h-0.5 -translate-y-1/2 origin-left bg-gradient-to-r from-[var(--purple-400)] via-[var(--purple-600)] to-[var(--purple-500)]"
              style={{ scaleX: lineScaleX }}
            />
            <div className="relative flex justify-between">
              {cards.map((card, idx) => (
                <div key={card.title} className="flex flex-col items-center" style={{ width: `${100 / cards.length}%` }}>
                  <TimelineNode active={idx === 0} />
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
                    {card.time.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative -mx-2">
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 pl-2 pr-8 scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card, idx) => (
                <Reveal key={card.title} delay={80 + idx * 70} className="snap-center shrink-0">
                  <JourneyCard card={card} index={idx} />
                </Reveal>
              ))}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
            />
          </div>
        </div>

        {/* Mobile: vertical timeline with animated progress */}
        <div ref={mobileRef} className="relative mt-10 lg:hidden">
          <div className="absolute bottom-4 left-[13px] top-4 w-px bg-gray-200">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-[var(--purple-500)] to-[var(--purple-600)]"
              style={{ scaleY: lineScaleY }}
            />
          </div>
          <div className="space-y-6">
            {cards.map((card, idx) => (
              <Reveal key={card.title} delay={60 + idx * 50}>
                <div className="relative flex gap-4 pl-1">
                  <div className="pt-5">
                    <TimelineNode active={idx === 0} />
                  </div>
                  <motion.article
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: premiumEasing }}
                    className="min-w-0 flex-1 rounded-2xl border border-gray-200/70 bg-white p-5"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      {card.time}
                    </p>
                    <h3 className="mt-1 text-[17px] font-bold tracking-[-0.02em]">{card.title}</h3>
                    <p className="mt-2 whitespace-pre-wrap text-[14px] leading-relaxed text-gray-500">
                      {card.body}
                    </p>
                    <a href="#" className="mt-3 inline-block text-[13px] font-bold text-[var(--purple-600)]">
                      {card.cta} →
                    </a>
                  </motion.article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-[1.375rem] font-bold sm:mt-16 sm:text-[1.5rem]">
            All of this — from one app.
          </p>
        </Reveal>
      </PageContainer>
    </Section>
  )
}
