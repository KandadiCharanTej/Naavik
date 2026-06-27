'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Briefcase, BookOpen, Code, Users, Bell } from 'lucide-react'
import { WaitlistButton } from './cta-buttons'
import { DashboardMockup } from './dashboard-mockup'
import { StaggerContainer, StaggerItem } from './reveal'

export function HeroContent({
  waitlistCount,
  waitlistGoal,
  progressPercentage,
}: {
  waitlistCount: number
  waitlistGoal: number
  progressPercentage: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacityParallax = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={containerRef} className="w-full max-w-[1400px] mx-auto relative z-10 flex flex-col ">
      
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8">
        
        <div className="w-full lg:w-[45%] flex flex-col items-start px-4 sm:px-8">
          <StaggerContainer delay={100} className="flex flex-col items-start w-full">
            
            <StaggerItem className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 backdrop-blur-md px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[var(--purple-600)] shadow-sm">
                🟣 Early Access Now Open
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="text-[36px] sm:text-[42px] lg:text-[64px] xl:text-[72px] font-extrabold leading-[1.05] tracking-tight text-foreground max-w-[600px]">
                Never miss an <br className="hidden md:block" />
                opportunity <br />
                <span className="text-[var(--purple-600)]">again.</span>
              </h1>
            </StaggerItem>

            <StaggerItem className="mt-8 lg:mt-10">
              <div className="flex flex-col gap-3">
                {[
                  { icon: Briefcase, text: 'Find internships & hackathons' },
                  { icon: BookOpen, text: 'Access notes, PYQs & lab manuals' },
                  { icon: Code, text: 'Showcase your projects' },
                  { icon: Users, text: 'Find teammates across Telangana & Andhra Pradesh' },
                  { icon: Bell, text: 'Stay updated with campus events' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--purple-50)] flex flex-shrink-0 items-center justify-center text-[var(--purple-600)]">
                      <item.icon size={13} />
                    </div>
                    <span className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-600 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>

            <StaggerItem className="mt-10 w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[480px]">
                <WaitlistButton 
                  className="flex-1 h-[56px] bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[16px] font-bold rounded-full shadow-[0_8px_30px_rgba(124,58,237,0.3)] transition-all"
                  id="hero-primary-cta"
                >
                  Reserve My Spot
                </WaitlistButton>
                
                <a
                  href="#whats-inside"
                  className="flex-1 flex items-center justify-center h-[56px] text-[16px] font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all group"
                >
                  Explore Features 
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </StaggerItem>
            
            <StaggerItem className="mt-10 w-full max-w-[480px]">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[13px] font-medium">
                  <span><span className="text-foreground font-bold">{waitlistCount}</span> students joined</span>
                  <span className="text-gray-500">Goal: {waitlistGoal}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden relative">
                  <div className="absolute left-0 top-0 h-full bg-[var(--purple-600)] rounded-full transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">
                  Launching campus by campus across Telangana & Andhra Pradesh.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <div className="w-full lg:w-[55%] relative z-20 hidden lg:flex justify-end px-2 sm:px-8 mt-12 lg:mt-0 perspective-[2000px]">
          <motion.div 
            style={{ y: yParallax, opacity: opacityParallax }}
            className="w-full flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-[800px]"
            >
              <DashboardMockup />
            </motion.div>
          </motion.div>
        </div>

      </div>

      <div className="mt-20 lg:mt-32 w-full max-w-[1000px] mx-auto border-t border-gray-200/60 pt-8 px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[12px] sm:text-[13px] font-semibold text-gray-400 tracking-wide">
        <div className="flex items-center gap-1.5"><span className="text-[var(--purple-600)]">✓</span> Built by engineering students</div>
        <div className="flex items-center gap-1.5"><span className="text-[var(--purple-600)]">✓</span> Free forever</div>
        <div className="flex items-center gap-1.5"><span className="text-[var(--purple-600)]">✓</span> Privacy first</div>
        <div className="flex items-center gap-1.5"><span className="text-[var(--purple-600)]">✓</span> Campus-by-campus rollout</div>
      </div>
      
    </div>
  )
}
