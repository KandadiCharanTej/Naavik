import { WaitlistProvider } from '@/components/waitlist-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhyNaavikExists } from '@/components/why-naavik-exists'
import { InsideNaavik } from '@/components/inside-naavik'
import { DayWithNaavik } from '@/components/day-with-naavik'
import { ProductPreview } from '@/components/product-preview'
import { WhatsReady } from '@/components/whats-ready'
import { WhyJoinEarly } from '@/components/why-join-early'
import { AdminSection } from '@/components/admin-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <WaitlistProvider>
      <SiteHeader />
      <main>
        <Hero />


        <WhyNaavikExists />
        <InsideNaavik />
        <DayWithNaavik />
        <ProductPreview />
        <WhatsReady />
        <WhyJoinEarly />
        <AdminSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </WaitlistProvider>
  )
}

