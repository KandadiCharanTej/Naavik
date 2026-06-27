'use client'

import { Logo } from '@/components/ui/logo'
import { PageContainer, Divider } from '@/components/design/primitives'

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export function SiteFooter() {
  return (
    <footer className="bg-white pb-10 pt-16">
      <PageContainer>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Logo theme="light" />
            <p className="mt-4 text-[14px] leading-relaxed text-gray-500">
              Built for engineering students across Telangana & Andhra Pradesh.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/joinnaavik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-900"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="flex gap-16 sm:gap-20">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-gray-400">Product</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <a href="#whats-inside" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Features</a>
                <a href="#product-preview" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Preview</a>
                <a href="#early-access" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Early Access</a>
                <a href="#admin" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Campus Admin</a>
              </nav>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-gray-400">Legal & Contact</p>
              <nav className="mt-4 flex flex-col gap-2.5">
                <a href="/privacy" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Privacy Policy</a>
                <a href="/terms" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">Terms of Use</a>
                <a href="mailto:naavik.team@gmail.com" className="text-[14px] text-gray-600 transition-colors hover:text-gray-900">naavik.team@gmail.com</a>
              </nav>
            </div>
          </div>
        </div>

        <Divider className="my-10" />
        <div className="flex flex-col gap-2 text-[12px] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Naavik. All rights reserved.</p>
          <p>Built in Hyderabad for engineering students.</p>
        </div>
      </PageContainer>
    </footer>
  )
}
