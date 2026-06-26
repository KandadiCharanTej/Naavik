'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const faqs = [
    {
      question: 'What is Naavik?',
      answer: 'Naavik is a student app built for engineering students in Telangana and Andhra Pradesh. It gives you access to internships, hackathons, college study resources, a cross-campus student network, and campus updates — all in one place, personalised to your branch and semester. No more juggling 7 different apps.',
    },
    {
      question: 'Is it free?',
      answer: 'Yes. Naavik is completely free for students. No credit card needed, no trial that expires, no hidden charges. It will remain free for students. We may introduce optional premium features in the future, but the core product will always be free.',
    },
    {
      question: 'When will Naavik launch?',
      answer: 'We\'re actively building Naavik with early student feedback right now. Everyone who joins Early Access will be notified personally before their campus goes live. The more students who join, the faster we can activate more colleges.',
    },
    {
      question: 'Which colleges are supported?',
      answer: 'We\'re starting in Telangana and Andhra Pradesh, activating campuses one at a time as student admins join. If your college isn\'t activated yet, it simply means no founding admin has applied from your campus. That can be you.',
    },
    {
      question: 'How is Naavik different from LinkedIn or Internshala?',
      answer: 'LinkedIn and Internshala are job boards built for professionals. Naavik is built for your college life. Campus-specific notes, PYQs, lab records, campus announcements — things LinkedIn doesn\'t touch. Opportunities filtered by your branch and year. A Team Finder for hackathons. A network of students across 200+ colleges in your state. They\'re job boards. We\'re your student workspace.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[var(--bg-gray)] py-[72px] lg:py-[120px]" id="faq">
      <div className="mx-auto max-w-[800px] px-5 flex flex-col items-center">
        
        {/* Header */}
        <Reveal className="w-full text-center">
          <div className="mb-12">
            <span className="eyebrow-label">FAQ</span>
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-[#111827] tracking-tight">
              Questions, answered.
            </h2>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={100} className="w-full">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div 
                  key={index} 
                  className="bg-white border border-[#E5E7EB] rounded-[12px] overflow-hidden transition-all duration-200 shadow-sm hover:border-[var(--purple-600)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-[16px] font-bold text-[#111827] pr-4">{faq.question}</span>
                    <span className="text-[#6B7280] shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      'px-6 pb-5 transition-all duration-200 ease-in-out',
                      isOpen ? 'block' : 'hidden'
                    )}
                  >
                    <p className="text-[15px] text-[#374151] leading-[1.7]">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
