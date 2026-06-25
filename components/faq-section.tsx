import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { CONTACT_EMAIL, INSTAGRAM_URL } from '@/lib/constants'

const faqs = [
  {
    q: 'What is Naviko?',
    a: 'Naviko is a unified student workspace for engineering students in Telangana and Andhra Pradesh. It combines internship discovery, study resources, peer networking, and campus updates — all in one place, personalised to your branch and year.',
  },
  {
    q: 'When will it launch?',
    a: "We're in active development. The waitlist is open now, and early members will get first access when we launch campus-by-campus. Sign up to be notified the moment your college goes live.",
  },
  {
    q: 'Is it free?',
    a: 'Yes. Naviko is free to join and always will be for students. We may offer premium features in the future, but the core platform stays free.',
  },
  {
    q: 'Which colleges are supported?',
    a: "We're starting in Telangana and Andhra Pradesh. Colleges are activated one by one as student admins join. If your campus isn't live yet, applying to be a founding admin is the fastest way to change that.",
  },
  {
    q: 'Can I become a college admin?',
    a: 'Yes — and we\'re actively looking for founding admins. You\'ll need to be a currently enrolled student at your college. Apply via the "Become a Campus Admin" page. We review every application personally.',
  },
  {
    q: 'How is Naviko different from LinkedIn or Internshala?',
    a: 'LinkedIn and Internshala are built for the job market. Naviko is built for your college life. We\'re not a job board — we\'re a workspace. Think: campus-specific resources, peer study networks, team-finding for hackathons, and college announcements — things LinkedIn simply doesn\'t do.',
  },
  {
    q: 'I have a suggestion. How do I share it?',
    a: `We're all ears. Reach out directly at ${CONTACT_EMAIL} or message us on Instagram at ${INSTAGRAM_URL}. Every suggestion from early members gets reviewed.`,
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-28 sm:py-36 bg-[#FAFAFC]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <Reveal className="mt-12">
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
