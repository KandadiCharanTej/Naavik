import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What is Naviko?',
    a: 'Naviko is a unified student workspace for engineering students in Telangana and Andhra Pradesh. It combines internship discovery, study resources, peer networking, and campus updates — all in one place, personalised to your branch and year.',
  },
  {
    q: 'When will it launch?',
    a: "We're in active development. The waitlist is open now. Early members get first access when we launch campus-by-campus. Sign up and you'll be notified the moment your college goes live.",
  },
  {
    q: 'Is it free?',
    a: 'Yes — and always will be for students. We may offer premium features later, but the core platform stays free. Forever.',
  },
  {
    q: 'Which colleges are supported?',
    a: "We're starting in Telangana and Andhra Pradesh. Colleges are activated one by one as student admins join. If your college isn't live yet, applying to be a founding admin is the fastest way to change that.",
  },
  {
    q: 'Can I become a college admin?',
    a: "Yes — and we're actively looking for founding admins right now. You need to be currently enrolled at your college. Apply via the \"Become a Campus Admin\" page. We personally review every application.",
  },
  {
    q: 'How is Naviko different from LinkedIn or Internshala?',
    a: "LinkedIn and Internshala are built for the job market. Naviko is built for your college life. We're not a job board — we're a workspace. Campus-specific resources, peer study networks, hackathon team-finding, and campus announcements — things LinkedIn simply doesn't do.",
  },
  {
    q: 'I have a suggestion. How do I share it?',
    a: "We're all ears. Reach out via our community page or email us directly. Every suggestion from early members gets reviewed personally by the founders.",
  },
]

export function FaqSection() {
  const allItemValues = faqs.map((_, i) => `item-${i}`)

  return (
    <section id="faq" className="scroll-mt-20 py-28 sm:py-36 bg-[#FAFAFC]">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />

        <Reveal className="mt-12">
          <Accordion multiple defaultValue={allItemValues} className="w-full">
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

