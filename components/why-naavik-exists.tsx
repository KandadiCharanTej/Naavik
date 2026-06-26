import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { MessageCircle, Briefcase, Cloud, Globe, Code, Database, FileText } from 'lucide-react'
export async function WhyNaavikExists() {

  const apps = [
    { name: 'WhatsApp', icon: MessageCircle },
    { name: 'LinkedIn', icon: Briefcase },
    { name: 'Google Drive', icon: Cloud },
    { name: 'Unstop', icon: Globe },
    { name: 'GitHub', icon: Code },
    { name: 'ERP', icon: Database },
    { name: 'Google Forms', icon: FileText },
  ]

  const contrastItems = [
    { before: '7 apps to check every morning', after: 'One personalised feed' },
    { before: 'Notes buried in Drive folders', after: 'Semester-sorted study vault' },
    { before: 'Opportunities found by luck', after: 'Filtered to your branch & year' },
    { before: 'Teammates only from your class', after: '200+ colleges across TG & AP' },
    { before: 'Campus updates lost in spam', after: 'Verified, in one clean place' },
  ]

  return (
    <>

      {/* SECTION 4 - WHY NAAVIK EXISTS */}
      <section className="bg-[var(--bg-white)] py-[72px] lg:py-[120px]" id="whats-inside">
        <div className="mx-auto max-w-[1200px] px-5">
          
          <Reveal>
            <h2 className="text-[30px] md:text-[40px] font-extrabold text-foreground max-w-[800px] leading-tight md:text-left text-center md:mx-0 mx-auto">
              Engineering students today manage college life across 7 different apps.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-[17px] text-[#374151] text-center max-w-[600px] mx-auto leading-relaxed">
              Students switch between WhatsApp, LinkedIn, Google Drive, Unstop, GitHub and more every day. Naavik brings everything into one place.
            </p>
          </Reveal>

          {/* App Logos Row */}
          <StaggerContainer delay={200} className="mt-12 flex flex-wrap justify-center items-center gap-[32px] grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100 duration-500">
            {apps.map(app => (
              <StaggerItem key={app.name} variant="scaleIn" className="flex flex-col items-center gap-2">
                <div title={app.name}>
                  <app.icon className="h-[44px] w-[44px] transition-transform hover:scale-110 duration-300" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contrast Table */}
          <StaggerContainer delay={300} className="mt-20 max-w-[680px] mx-auto w-full">
            <Reveal variant="fadeUp">
              <div className="flex justify-between items-center mb-6 px-4">
                <span className="text-[15px] font-semibold text-muted-foreground uppercase tracking-wider">Before Naavik</span>
                <span className="text-[15px] font-semibold text-primary uppercase tracking-wider">With Naavik</span>
              </div>
            </Reveal>
            
            <div className="flex flex-col space-y-6">
              {contrastItems.map((item, i) => (
                <StaggerItem key={i} variant="fadeUp" className="flex items-center justify-between group">
                  <span className="text-[15px] text-[#6B7280] line-through decoration-muted-foreground/30 flex-1 px-4 transition-colors group-hover:text-muted-foreground">
                    {item.before}
                  </span>
                  <span className="text-primary font-bold px-2 shrink-0 transition-transform group-hover:scale-125 duration-300">&rarr;</span>
                  <span className="text-[15px] text-[#111827] font-medium flex-1 text-right px-4">
                    {item.after}
                  </span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Three Words */}
          <StaggerContainer delay={400} className="mt-24 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[48px] text-[32px] font-extrabold text-foreground tracking-tight">
            <StaggerItem variant="fadeUp">One account.</StaggerItem>
            <StaggerItem variant="scaleIn" className="hidden md:block w-px h-8 bg-border"></StaggerItem>
            <StaggerItem variant="fadeUp">One search.</StaggerItem>
            <StaggerItem variant="scaleIn" className="hidden md:block w-px h-8 bg-border"></StaggerItem>
            <StaggerItem variant="fadeUp">One place.</StaggerItem>
          </StaggerContainer>

        </div>
      </section>
    </>
  )
}
