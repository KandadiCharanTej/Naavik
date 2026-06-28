'use client'

import { useState } from 'react'
import { Reveal } from '@/components/animations/reveal'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { PageContainer, Section, SectionHeader, Divider } from '@/components/design/primitives'

const faqs = [
  {
    question: 'What is Naavik?',
    answer:
      'Naavik is a student app for engineering students in Telangana and Andhra Pradesh. Find internships, access college notes, build projects, connect with teammates, and stay updated with campus events — all in one place, filtered for your branch and year.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes. Join Naavik today at no cost during Early Access. No payment required. No credit card needed. Core student features are free to access.',
  },
  {
    question: 'When will Naavik launch?',
    answer:
      "We're actively building with early student feedback. Everyone who joins Early Access will be notified personally before their college goes live.",
  },
  {
    question: 'Which colleges are supported?',
    answer:
      'Starting in Telangana and Andhra Pradesh, activating one campus at a time as student admins join. Applying to be a founding admin is the fastest way to bring Naavik to your campus.',
  },
  {
    question: 'How is Naavik different from LinkedIn or Internshala?',
    answer:
      "Those are job boards. Naavik is built for your college life — campus notes, PYQs, hackathon team-finding, campus announcements, and opportunities filtered by your branch and year. LinkedIn doesn't do any of that.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" surface="white">
      <PageContainer size="narrow">
        <Reveal>
          <SectionHeader
            align="center"
            title={
              <>
                Questions? <span className="text-gray-400">Answered.</span>
              </>
            }
            lead="Everything you need to know about the product and launch."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-[600px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={50 + index * 30}>
                <div>
                  {index > 0 && <Divider className="my-0" />}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left sm:py-7"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span
                      className={`text-[16px] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-200 sm:text-[17px] ${
                        isOpen ? 'text-[var(--purple-600)]' : 'text-gray-900 group-hover:text-gray-700'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-gray-300 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180 text-[var(--purple-500)]' : 'group-hover:text-gray-400'
                      }`}
                      strokeWidth={1.75}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-[15px] leading-[1.7] text-gray-500 sm:pb-7 sm:text-[16px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
          <Divider className="my-0" />
        </div>
      </PageContainer>
    </Section>
  )
}
