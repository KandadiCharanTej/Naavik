import { Logo } from '@/components/ui/logo'
import { WaitlistButton } from '@/components/ui/cta-buttons'
import { Compass, Map, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Naavik',
  description: 'The page you are looking for does not exist.',
}

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-12 px-5 sm:px-8 overflow-hidden">
      
      {/* Top Logo */}
      <div className="w-full max-w-[600px] flex justify-center mb-16">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
      </div>

      <div className="w-full max-w-[540px] flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out z-10">
        
        {/* Illustration */}
        <div className="relative mb-10 w-40 h-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--purple-100)] to-transparent rounded-full opacity-60 blur-2xl"></div>
          
          <div className="relative z-10 w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <Compass className="w-10 h-10 text-[var(--purple-600)]" strokeWidth={1.5} />
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm -rotate-12">
            <Map className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-[36px] md:text-[48px] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
          Looks like you're off course.
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[420px] mb-12">
          The page you're looking for doesn't exist, has moved, or isn't available yet. Let's help you get back on track.
        </p>

        {/* Actions */}
        <div className="w-full flex flex-col gap-3 max-w-[400px]">
          <Link 
            href="/"
            className="w-full h-14 flex items-center justify-center gap-2 rounded-xl bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02]"
          >
            Go to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <WaitlistButton 
            className="w-full h-14 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-[16px] font-bold rounded-xl shadow-sm hover:scale-[1.02]"
          />
          
          <a 
            href="mailto:support@naavik.in"
            className="w-full h-12 flex items-center justify-center text-[15px] font-bold text-gray-500 hover:text-gray-900 transition-colors mt-2"
          >
            Contact Support
          </a>
        </div>

        {/* Helpful Links Grid */}
        <div className="w-full mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-[14px] font-bold tracking-widest text-gray-400 uppercase mb-8">Helpful Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 max-w-[480px] mx-auto text-left">
            <Link href="/" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">Home</Link>
            <Link href="/#whats-inside" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">Features</Link>
            <Link href="/#admin" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">Campus Admin</Link>
            <Link href="/#faq" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">FAQ</Link>
            <a href="https://www.instagram.com/joinnaavik?igsh=MXBueGtoZWF2ajRxdQ==" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[15px] font-semibold text-gray-600 hover:text-[var(--purple-600)] transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-400">Still having trouble?</span>
          <a href="mailto:naavik.team@gmail.com" className="text-[15px] font-bold text-[var(--purple-600)] hover:text-[var(--purple-700)] transition-colors">
            naavik.team@gmail.com
          </a>
        </div>

      </div>
    </main>
  )
}
