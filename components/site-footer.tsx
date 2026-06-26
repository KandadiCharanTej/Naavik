import { Logo } from '@/components/logo'
import { Mail, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-5">
        
        {/* Top Section */}
        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-12 mb-20">
          
          {/* Left - Brand Column */}
          <div className="md:col-span-5">
            <Logo className="h-8 w-auto invert" />
            <p className="mt-8 text-base font-medium text-white/60 leading-relaxed max-w-sm">
              Helping engineering students across Telangana &amp; Andhra Pradesh discover opportunities, build projects, and stay connected.
            </p>
            <p className="mt-4 text-sm font-bold text-white/40 uppercase tracking-wider">
              Built by engineering students.
            </p>
          </div>

          {/* Center - Product Column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Product</span>
            <Link href="#inside-naavik" className="text-base font-medium text-white/70 hover:text-white transition-colors w-fit">
              Inside Naavik
            </Link>
            <Link href="#admin" className="text-base font-medium text-white/70 hover:text-white transition-colors w-fit">
              Become Admin
            </Link>
            <Link href="#faq" className="text-base font-medium text-white/70 hover:text-white transition-colors w-fit">
              FAQ
            </Link>
            <Link href="/privacy" className="text-base font-medium text-white/70 hover:text-white transition-colors w-fit mt-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-base font-medium text-white/70 hover:text-white transition-colors w-fit">
              Terms of Service
            </Link>
          </div>

          {/* Right - Connect Column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Connect</span>
            <a href="https://www.instagram.com/joinnaviko/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base font-medium text-white/70 hover:text-white transition-colors w-fit group">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> 
              Instagram
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="#" className="flex items-center gap-3 text-base font-medium text-white/70 hover:text-white transition-colors w-fit group">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> 
              LinkedIn
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="#" className="flex items-center gap-3 text-base font-medium text-white/70 hover:text-white transition-colors w-fit group">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.7-1.3-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C6.3 2.8 5.3 3.1 5.3 3.1c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.6 0 5.2 3 6.4 6 6.76-.8.4-1 1.5-1 2.9v4"/><path d="M9 20c-4 1-5-2-7-2"/></svg> 
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="mailto:naavik.team@gmail.com" className="flex items-center gap-3 text-base font-medium text-white/70 hover:text-white transition-colors w-fit group mt-2">
              <Mail className="h-5 w-5" /> 
              naavik.team@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-6 text-xs font-semibold text-white/40">
            <span>© 2026 Naavik</span>
            <span className="hidden sm:inline">Made with ❤️ in Telangana.</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-white/60">
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Privacy First
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Free Forever
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> No Spam
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
