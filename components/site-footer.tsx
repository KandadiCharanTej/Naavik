'use client'

import { InstagramIcon } from '@/components/instagram-icon'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'

export function SiteFooter() {
  return (
    <footer className="bg-[var(--bg-dark)] border-t border-[#1F2937]">
      <div className="mx-auto max-w-[1200px] px-5 py-16">
        
        {/* 4 Column Layout */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* COLUMN 1 - Brand */}
          <StaggerItem className="col-span-2 md:col-span-2 flex flex-col items-start pr-4">
            <span className="text-[20px] font-bold text-white tracking-tight mb-4">Naavik</span>
            <p className="text-[14px] text-[#6B7280] mb-6 max-w-[280px]">
              For engineering students in Telangana &amp; Andhra Pradesh.
            </p>
            <div className="flex flex-col gap-2 mt-auto">
              <p className="text-[13px] text-[#4B5563]">Made with care in Hyderabad 🤍</p>
              <a href="mailto:hello@naavik.in" className="text-[14px] text-[var(--purple-600)] font-medium hover:underline">
                hello@naavik.in
              </a>
            </div>
          </StaggerItem>

          {/* COLUMN 2 - Connect */}
          <StaggerItem className="col-span-1 flex flex-col items-start">
            <span className="text-[11px] font-semibold text-[#4B5563] uppercase tracking-widest mb-6">
              COMMUNITY
            </span>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[14px] text-[#6B7280] hover:text-white transition-colors">GitHub</a>
            </div>
          </StaggerItem>

          {/* COLUMN 3 - Legal */}
          <StaggerItem className="col-span-1 flex flex-col items-start">
            <span className="text-[11px] font-semibold text-[#4B5563] uppercase tracking-widest mb-6">
              LEGAL
            </span>
            <div className="flex flex-col gap-4">
              <a href="/privacy" className="text-[14px] text-[#6B7280] hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-[14px] text-[#6B7280] hover:text-white transition-colors">Terms of Use</a>
            </div>
          </StaggerItem>

        </StaggerContainer>

      </div>

      {/* BOTTOM BAR */}
      <Reveal>
        <div className="border-t border-[#1F2937] py-8">
          <p className="text-[13px] text-[#4B5563] text-center">
            &copy; 2026 Naavik. Built by students, for students.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
