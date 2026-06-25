import { WaitlistProvider } from '@/components/waitlist-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProblemSection } from '@/components/problem-section'
import { VisualComparison } from '@/components/visual-comparison'
import { GrowthSpace } from '@/components/growth-space'
import { CollegeSpace } from '@/components/college-space'
import { ProductWalkthrough } from '@/components/product-walkthrough'
import { HowItWorks } from '@/components/how-it-works'
import { SolutionSection } from '@/components/solution-section'
import { RoadmapSection } from '@/components/roadmap-section'
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
        <ProblemSection />
        <VisualComparison />
        <GrowthSpace />
        <CollegeSpace />
        <ProductWalkthrough />
        <HowItWorks />
        <SolutionSection />
        <RoadmapSection />
        <AdminSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </WaitlistProvider>
  )
}

