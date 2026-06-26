import { WaitlistProvider } from '@/components/waitlist-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { NumbersStrip } from '@/components/numbers-strip'
import { WhyNaavikExists } from '@/components/why-naavik-exists'
import { InsideNaavik } from '@/components/inside-naavik'
import { DayWithNaavik } from '@/components/day-with-naavik'
import { ProductPreview } from '@/components/product-preview'
import { WhatsReady } from '@/components/whats-ready'
import { WhyJoinEarlyAccess } from '@/components/why-join-early-access'
import { AdminSection } from '@/components/admin-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { getWaitlistCount } from '@/lib/waitlist-count'

export default async function Home() {
  const waitlistCount = await getWaitlistCount()

  return (
    <WaitlistProvider>
      <SiteHeader />
      <main>
        <Hero waitlistCount={waitlistCount} />
        <NumbersStrip waitlistCount={waitlistCount} />
        <WhyNaavikExists />
        <InsideNaavik />
        <DayWithNaavik />
        <ProductPreview />
        <WhatsReady />
        <WhyJoinEarlyAccess waitlistCount={waitlistCount} />
        <AdminSection />
        <FaqSection />
        <FinalCta waitlistCount={waitlistCount} />
      </main>
      <SiteFooter />
    </WaitlistProvider>
  )
}
