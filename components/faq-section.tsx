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
    a: 'One place for everything engineering students need — opportunities, study resources, peer connections, and campus updates. Built specifically for colleges in Telangana & AP.',
  },
  {
    q: 'When will it launch?',
    a: "We are launching campus-by-campus soon. Reserve early access now to secure your spot and get notified the moment your college goes live.",
  },
  {
    q: 'Is it free?',
    a: 'Yes, Naviko is completely free for students. No hidden costs or catches.',
  },
  {
    q: 'Which colleges are supported?',
    a: 'We are starting in Telangana and Andhra Pradesh. Workspaces are activated once a verified student admin joins to set up their campus.',
  },
  {
    q: 'Can I help launch my college?',
    a: 'Yes! Apply to be a Founding Campus Admin. You will help build your college hub and coordinate with the founders directly.',
  },
  {
    q: 'How is this different from WhatsApp or LinkedIn?',
    a: 'WhatsApp is full of spam and unorganized notes. LinkedIn is full of corporate fluff. Naviko is built purely for engineering students to find notes, partners, and internships without the noise.',
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

