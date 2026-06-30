import { SiteHeader } from '@/components/layout/site-header'
import { Hero } from '@/components/sections/hero'
import { WhyNaavikExists } from '@/components/sections/why-naavik-exists'
import { TwoSpacesSection } from '@/components/sections/two-spaces-section'
import { InsideNaavik } from '@/components/sections/inside-naavik' // keeping fallback reference if needed
import { DayWithNaavik } from '@/components/sections/day-with-naavik'
import { ProductPreview } from '@/components/sections/product-preview'
import { WhatsReady } from '@/components/sections/whats-ready'
import { WhyJoinEarly } from '@/components/sections/why-join-early'
import { AdminSection } from '@/components/sections/admin-section'
import { FaqSection } from '@/components/sections/faq-section'
import { FinalCta } from '@/components/sections/final-cta'
import { SiteFooter } from '@/components/layout/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="naavik-page-flow relative overflow-x-clip">
        <Hero />
        <WhyNaavikExists />
        <TwoSpacesSection />
        <DayWithNaavik />
        <ProductPreview />
        <WhatsReady />
        <WhyJoinEarly />
        <AdminSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}

