'use client'

import { Reveal, StaggerContainer, StaggerItem } from '@/components/reveal'
import { Logo } from '@/components/logo'


const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 pt-[64px] pb-12 relative z-10">
        
        {/* Links Grid Layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          
          {/* COLUMN 1 - Brand (Spans 6) */}
          <StaggerItem className="col-span-1 md:col-span-6 flex flex-col items-start pr-4">
            <div className="flex items-center mb-4">
              <Logo theme="light" />
            </div>
            <p className="text-[14px] text-gray-500 mb-8 max-w-[380px] leading-relaxed">
              Built for engineering students across Telangana & Andhra Pradesh.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/joinnaavik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </StaggerItem>

          {/* COLUMN 2 - Product */}
          <StaggerItem className="col-span-1 md:col-span-3 flex flex-col items-start mt-4 md:mt-0">
            <span className="text-[11px] font-bold text-gray-400 uppercase mb-4 md:mb-6 tracking-widest">Product</span>
            <div className="flex flex-col gap-3">
              <a href="#whats-inside" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Features</a>
              <a href="#product-preview" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Preview</a>
              <a href="#early-access" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Early Access</a>
              <a href="#admin" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Campus Admin</a>
            </div>
          </StaggerItem>

          {/* COLUMN 3 - Legal & Contact */}
          <StaggerItem className="col-span-1 md:col-span-3 flex flex-col items-start mt-4 md:mt-0">
            <span className="text-[11px] font-bold text-gray-400 uppercase mb-4 md:mb-6 tracking-widest">Legal & Contact</span>
            <div className="flex flex-col gap-3">
              <a href="/privacy" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">Terms of Use</a>
              <a href="mailto:naavik.team@gmail.com" className="text-[14px] text-gray-500 hover:text-gray-900 transition-colors">naavik.team@gmail.com</a>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* BOTTOM BAR */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100">
            <p className="text-[12px] text-gray-400 font-medium mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Naavik. All rights reserved.
            </p>
            <p className="text-[12px] text-gray-400 font-medium">
              Built in Hyderabad for engineering students.
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}
