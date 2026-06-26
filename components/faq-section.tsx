'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    question: 'What is Naavik?',
    answer:
      'Naavik is a student app built for engineering students in Telangana and Andhra Pradesh. It gives you access to internships, hackathons, college study resources, a cross-campus student network, and campus updates — all in one place, personalised to your branch and semester. No more juggling 7 different apps.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes. Naavik is completely free for students. No credit card needed, no free trial that expires, no hidden charges. It will remain free for students. We may introduce optional premium features in the future, but the core product will always be free.',
  },
  {
    question: 'When will Naavik launch?',
    answer:
      "We're actively building Naavik with early student feedback right now. Everyone who joins Early Access will be notified personally before their campus goes live — you won't miss it. The more students who join early, the faster we can activate more colleges.",
  },
  {
    question: 'Which colleges are supported?',
    answer:
      "We're starting in Telangana and Andhra Pradesh, activating campuses one at a time as student admins join. If your college isn't listed, it simply means no one from your campus has applied to become a founding admin yet. That can be you.",
  },
  {
    question: 'How is Naavik different from LinkedIn or Internshala?',
    answer:
      "LinkedIn and Internshala are job boards built for professionals. Naavik is built for your college life. We have campus-specific notes, PYQs, lab records, and local announcements — things LinkedIn doesn't touch. Our opportunities are filtered by your branch, year, and semester — not just job title keywords. And our Team Finder connects you with students from colleges across your state, not just your class.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center sm:text-left mb-16">
          <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">FAQ</span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={cn(
                  'rounded-2xl border transition-all duration-300',
                  isOpen
                    ? 'border-primary/20 bg-primary/5 shadow-sm'
                    : 'border-border bg-[#F9FAFB] hover:border-primary/30',
                )}
              >
                <button
                  className="flex w-full items-center justify-between px-6 sm:px-8 py-6 text-left min-h-[72px]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={cn("text-base sm:text-lg font-bold transition-colors", isOpen ? "text-primary" : "text-foreground")}>
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      'ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300',
                      isOpen ? 'rotate-180 border-primary/20 bg-white text-primary shadow-sm' : 'border-border bg-white text-muted-foreground',
                    )}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 text-sm sm:text-base font-medium text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
