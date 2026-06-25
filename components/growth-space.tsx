'use client'

import { Reveal } from '@/components/reveal'
import { WaitlistButton } from '@/components/cta-buttons'

export function GrowthSpace() {
  return (
    <section id="growth-space" className="scroll-mt-20 py-16 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Two-column connection view visual mockup */}
          <div className="lg:col-span-7 relative order-last lg:order-first">
            <div className="relative min-h-[460px] w-full flex flex-col justify-center items-center px-2 py-8 bg-slate-50/50 rounded-2xl border border-border">
              
              <div className="w-full max-w-lg mb-3 flex items-center justify-between px-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Cross-Campus Connections</span>
                <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Matches
                </span>
              </div>

              {/* Connection Container Grid */}
              <div className="w-full max-w-lg grid gap-4 grid-cols-2 relative mb-6">
                
                {/* SVG Connecting Line between columns */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                  <svg className="w-full h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M 160 24 L 270 24"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                  </svg>
                </div>

                {/* Left Card: Student A (CBIT) */}
                <Reveal
                  delay={100}
                  className="bg-white border border-border rounded-xl p-4 shadow-xs z-10 text-left relative flex flex-col justify-between min-h-[145px] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2 py-0.5 rounded select-none">
                        CBIT
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs font-bold text-foreground">Rahul K.</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                      "Looking for a React Native dev for SIH hackathon. Initial prototype is ready."
                    </p>
                  </div>
                </Reveal>

                {/* Right Card: Student B (VNRVJIET) */}
                <Reveal
                  delay={200}
                  className="bg-white border border-border rounded-xl p-4 shadow-xs z-10 text-left relative flex flex-col justify-between min-h-[145px] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded select-none">
                        VNRVJIET
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs font-bold text-foreground">Sai Kumar</p>
                    <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                      "Hey Rahul! I build in React Native and want to work on a real build. Let's connect."
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Below: Three small opportunity cards with campus badges */}
              <div className="w-full max-w-lg grid gap-3 grid-cols-3 px-1">
                <Reveal
                  delay={300}
                  className="bg-white border border-border/80 rounded-xl p-3 shadow-2xs hover:shadow-xs transition-shadow text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded select-none">SIH</span>
                  </div>
                  <h4 className="text-[10px] font-bold text-foreground truncate">Smart India</h4>
                  <p className="text-[8px] text-muted-foreground mt-0.5">₹2L Prize</p>
                </Reveal>

                <Reveal
                  delay={350}
                  className="bg-white border border-border/80 rounded-xl p-3 shadow-2xs hover:shadow-xs transition-shadow text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded select-none">Google</span>
                  </div>
                  <h4 className="text-[10px] font-bold text-foreground truncate">Scholarship</h4>
                  <p className="text-[8px] text-muted-foreground mt-0.5">Prep Vault</p>
                </Reveal>

                <Reveal
                  delay={400}
                  className="bg-white border border-border/80 rounded-xl p-3 shadow-2xs hover:shadow-xs transition-shadow text-left"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded select-none">Internshala</span>
                  </div>
                  <h4 className="text-[10px] font-bold text-foreground truncate">Backend Dev</h4>
                  <p className="text-[8px] text-muted-foreground mt-0.5">₹25,000/mo</p>
                </Reveal>
              </div>

            </div>
          </div>

          {/* Right: Pitch & Copy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-full">
              Growth Space
            </span>
            <h2 className="mt-5 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-[1.75rem] leading-[1.25]">
              Meet builders outside your campus. <span className="text-primary">Find teammates. Win hackathons.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Don't limit yourself to your classroom. Connect with developers, designers, and founders from colleges across Telangana & Andhra Pradesh.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-xl leading-none select-none mt-0.5">🎯</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Opportunities matched to you</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Internships, scholarships, and hackathons filtered by your branch and semester. No generic jobs. Only what you qualify for.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl leading-none select-none mt-0.5">⚡</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">One-click team finder</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Need a developer for Smart India Hackathon? Post your project outline and recruit verified builders from other campuses instantly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl leading-none select-none mt-0.5">🚀</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Build your co-founding team</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Have a startup idea? Find co-founders, showcase your builds, and get noticed by early-stage student hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <WaitlistButton size="lg" className="w-full sm:w-auto" id="growth-space-keynote-btn">
                Reserve Early Access →
              </WaitlistButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
