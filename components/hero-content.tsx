'use client'

import { WaitlistButton } from '@/components/cta-buttons'
import { ConceptPreview } from '@/components/dashboard-mockup'
import { motion, useScroll, useTransform } from 'framer-motion'
import { StaggerContainer, StaggerItem, premiumEasing } from '@/components/reveal'
import { useRef } from 'react'
import { Briefcase, BookOpen, Code, Users, ArrowRight } from 'lucide-react'

export function HeroContent({ waitlistCount, progressPercentage, waitlistGoal }: { waitlistCount: number, progressPercentage: number, waitlistGoal: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacityParallax = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={containerRef} className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10 text-left pt-28 md:pt-32 pb-12 lg:pb-8">
      
      {/* Left Column: Typography & CTAs */}
      <div className="w-full lg:w-[50%] flex flex-col items-start px-4 sm:px-8 xl:px-12">
        <StaggerContainer delay={100} className="flex flex-col items-start w-full">
          
          <StaggerItem className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/50 backdrop-blur-md px-4 py-2 text-[13px] font-semibold tracking-wide text-[var(--purple-600)] shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--purple-600)] shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse"></span>
              Early Access Now Open
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-[44px] sm:text-[64px] lg:text-[88px] font-extrabold leading-[1] sm:leading-[0.95] text-foreground tracking-[-0.03em] sm:tracking-[-0.04em] max-w-[700px]">
              Your entire engineering life.
              <span className="block mt-2 sm:mt-3 text-[var(--purple-600)] pb-2">
                In one place.
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem className="mt-8">
            <p className="text-[18px] sm:text-[22px] font-medium text-muted-foreground leading-[1.6] max-w-[580px] text-balance">
              Find internships, hackathons, and workshops. Access verified PYQs and study resources, showcase your projects, find teammates, and get real-time campus updates.
            </p>
          </StaggerItem>

          {/* Premium Feature Grid (Bento Style) */}
          <StaggerItem className="mt-12 w-full max-w-[540px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "Internships & Hackathons", icon: Briefcase },
                { text: "Notes, PYQs & Manuals", icon: BookOpen },
                { text: "Project Showcases", icon: Code },
                { text: "Campus Networking", icon: Users },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group flex items-center gap-3.5 bg-white/60 border border-[var(--border)] rounded-[16px] p-4 transition-all duration-300 hover:bg-white hover:border-[var(--purple-300)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.08)]"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-[12px] bg-[var(--purple-50)] text-[var(--purple-600)] transition-colors group-hover:bg-[var(--purple-600)] group-hover:text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-semibold text-[#374151] group-hover:text-foreground transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </StaggerItem>

          {/* CTAs */}
          <StaggerItem className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[480px]">
            <WaitlistButton 
              className="btn-primary w-full justify-center h-[60px] text-[16px] font-semibold rounded-full shadow-[0_8px_30px_rgba(124,58,237,0.3)] transition-all"
              id="hero-primary-cta"
            >
              Reserve My Spot
              <ArrowRight className="w-5 h-5 ml-1" />
            </WaitlistButton>
            
            <a
              href="#whats-inside"
              className="flex items-center justify-center w-full h-[60px] text-[16px] font-semibold text-foreground bg-white border border-[var(--border)] rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all group"
            >
              Explore Features 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-y-1">&darr;</span>
            </a>
          </StaggerItem>
          
          {/* Social Proof / Launch Messaging */}
          <StaggerItem className="mt-12 w-full max-w-[480px]">
            <div className="flex flex-col gap-3 p-4 bg-gray-50/80 border border-gray-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--purple-400)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--purple-600)]"></span>
                </span>
                <span className="text-[14px] font-bold text-foreground tracking-wide">LAUNCHING CAMPUS BY CAMPUS</span>
              </div>
              <p className="text-[14px] text-muted-foreground font-medium leading-relaxed">
                Starting across Telangana & Andhra Pradesh. Join the founding members for exclusive early access and features.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Right Column: Parallax 3D Mockup */}
      <div className="hidden md:flex w-full lg:w-[50%] relative z-20 justify-center lg:justify-end px-4 sm:px-8 mt-16 lg:mt-0 perspective-[2000px]">
        <motion.div 
          style={{ y: yParallax, opacity: opacityParallax }}
          className="w-full max-w-[700px] xl:max-w-[800px]"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotateY: [-2, 2, -2], rotateX: [2, 0, 2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full rounded-[24px] overflow-hidden border border-white/60 bg-white/90 backdrop-blur-3xl shadow-[0_40px_100px_rgba(124,58,237,0.2)] ring-1 ring-black/5"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Browser Header / Premium Chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--border)] bg-gradient-to-b from-white to-gray-50/50">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
              </div>
              <div className="mx-auto w-[240px] h-7 bg-white rounded-md border border-[var(--border)] shadow-sm flex items-center justify-center text-[12px] text-muted-foreground font-semibold tracking-wide">
                naavik.app
              </div>
            </div>
            
            <div className="relative w-full aspect-[4/3] bg-gray-50/50 p-2 sm:p-4">
               <ConceptPreview />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating background elements for premium feel */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-[var(--purple-600)] opacity-[0.08] blur-[120px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-[0%] left-[10%] w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.06] blur-[100px] rounded-full mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

    </div>
  )
}
