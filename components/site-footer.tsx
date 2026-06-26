'use client'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-[#050505] border-t border-[#1F2937] text-white relative overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--purple-600)] rounded-full blur-[200px] opacity-[0.15] pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] px-5 pt-[64px] pb-12 relative z-10">
        
        {/* Massive Footer CTA Area */}
        <Reveal>
          <div className="mb-[64px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">
            <div>
              <h2 className="text-[36px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-tight mb-2">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--purple-400)] to-[var(--purple-600)]">start?</span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-gray-400 font-medium">Join the waitlist. We'll let you in soon.</p>
            </div>
            <a 
              href="#hero-primary-cta"
              className="inline-flex items-center justify-center h-[60px] md:h-[64px] w-full sm:w-auto px-10 md:px-12 rounded-full bg-white text-black text-[17px] md:text-[18px] font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Get Early Access
            </a>
          </div>
        </Reveal>

        <div className="h-px bg-white/10 w-full mb-16"></div>

        {/* Links Grid Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 mb-16">
          
          {/* COLUMN 1 - Brand (Spans 6) */}
          <StaggerItem className="col-span-1 md:col-span-6 flex flex-col items-start pr-4">
            <div className="flex items-center gap-3 mb-6">
              <Logo theme="dark" />
            </div>
            <p className="text-[16px] text-gray-400 mb-8 max-w-[340px] leading-relaxed">
              The definitive platform for engineering students in Telangana & Andhra Pradesh. Built by students, for students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-auto h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[14px] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                Instagram
              </a>
              <a href="#" className="w-auto h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[14px] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                LinkedIn
              </a>
              <a href="#" className="w-auto h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[14px] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                GitHub
              </a>
            </div>
          </StaggerItem>

          {/* COLUMN 2 - Product */}
          <StaggerItem className="col-span-1 md:col-span-3 flex flex-col items-start mt-4 md:mt-0">
            <span className="text-[13px] font-bold text-white mb-4 md:mb-6 tracking-wide">Product</span>
            <div className="flex flex-col gap-4">
              <a href="#whats-inside" className="text-[15px] text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#product-preview" className="text-[15px] text-gray-400 hover:text-white transition-colors">Preview</a>
              <a href="#early-access" className="text-[15px] text-gray-400 hover:text-white transition-colors">Early Access</a>
              <a href="#admin" className="text-[15px] text-[var(--purple-400)] font-medium hover:text-[var(--purple-300)] transition-colors">Campus Admin</a>
            </div>
          </StaggerItem>

          {/* COLUMN 3 - Legal & Contact */}
          <StaggerItem className="col-span-1 md:col-span-3 flex flex-col items-start mt-4 md:mt-0">
            <span className="text-[13px] font-bold text-white mb-4 md:mb-6 tracking-wide">Legal & Contact</span>
            <div className="flex flex-col gap-4">
              <a href="/privacy" className="text-[15px] text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-[15px] text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="mailto:hello@naavik.in" className="text-[15px] text-gray-400 hover:text-white transition-colors mt-2">hello@naavik.in</a>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* BOTTOM BAR */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <p className="text-[14px] text-gray-500 font-medium mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Naavik. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[14px] text-gray-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              All systems operational
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
