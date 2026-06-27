'use client'

import { useState } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FaqSection() {
  const faqs = [
    {
      question: 'What is Naavik?',
      answer: 'Naavik is a student app for engineering students in Telangana and Andhra Pradesh. Find internships, access college notes, build projects, connect with teammates, and stay updated with campus events — all in one place, filtered for your branch and year.',
    },
    {
      question: 'Is it free?',
      answer: 'Yes. Completely free for students. No credit card, no trial, no catch. Always free for engineering students.',
    },
    {
      question: 'When will Naavik launch?',
      answer: 'We\'re actively building with early student feedback. Everyone who joins Early Access will be notified personally before their college goes live.',
    },
    {
      question: 'Which colleges are supported?',
      answer: 'Starting in Telangana and Andhra Pradesh, activating one campus at a time as student admins join. Applying to be a founding admin is the fastest way to bring Naavik to your campus.',
    },
    {
      question: 'How is Naavik different from LinkedIn or Internshala?',
      answer: 'Those are job boards. Naavik is built for your college life — campus notes, PYQs, hackathon team-finding, campus announcements, and opportunities filtered by your branch and year. LinkedIn doesn\'t do any of that.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 py-[64px] lg:py-[112px] border-t border-gray-200" id="faq">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        
        {/* Header */}
        <Reveal className="w-full text-center">
          <div className="mb-16">
            <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-tight leading-[1.1] text-foreground mb-4">
              Questions? <span className="text-gray-400">Answered.</span>
            </h2>
            <p className="text-[18px] text-gray-500 font-medium">Everything you need to know about the product and launch.</p>
          </div>
        </Reveal>

        {/* Minimalist Accordion */}
        <StaggerContainer delay={100} className="w-full flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <StaggerItem key={index}>
                <div 
                  className={`bg-white rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-gray-200' : 'shadow-sm border border-gray-100 hover:border-gray-200 hover:shadow-md'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className={`text-[16px] md:text-[17px] font-bold transition-colors ${isOpen ? 'text-[var(--purple-600)]' : 'text-gray-900 group-hover:text-[var(--purple-600)]'} pr-4`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[var(--purple-600)] rotate-180' : 'text-gray-400 group-hover:text-[var(--purple-400)]'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 md:px-8 pb-6">
                          <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

      </div>
    </section>
  )
}
