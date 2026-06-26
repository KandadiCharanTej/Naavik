import { Logo } from '@/components/logo'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { CopyLinkButton } from '@/components/cta-buttons'
import Link from 'next/link'

export const metadata = {
  title: 'You\'re on the list | Naavik',
  description: 'Thank you for joining the Naavik early access waitlist.',
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { position?: string; name?: string }
}) {
  const position = searchParams.position || '1'
  const name = searchParams.name ? decodeURIComponent(searchParams.name) : ''

  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-12 px-5 sm:px-8">
      {/* Top Logo */}
      <div className="w-full max-w-[600px] flex justify-center mb-16">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
      </div>

      <div className="w-full max-w-[540px] flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
        
        {/* Minimal Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[var(--purple-100)] blur-2xl rounded-full opacity-50"></div>
          <div className="relative w-20 h-20 bg-white border border-[var(--purple-200)] shadow-[0_8px_30px_rgba(124,58,237,0.12)] rounded-full flex items-center justify-center text-[var(--purple-600)]">
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400" />
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
          You're officially on the list.
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
          Thanks for joining Naavik{name ? `, ${name}` : ''}. You're one of our earliest members helping build the future of engineering students. We'll email you as soon as Early Access becomes available for your campus.
        </p>

        {/* Position Card */}
        <div className="mt-12 mb-12 w-full bg-gradient-to-b from-[var(--purple-50)] to-white border border-[var(--purple-200)] rounded-3xl p-8 flex flex-col items-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[var(--purple-600)] opacity-[0.03] rounded-full blur-[40px] pointer-events-none"></div>
          <span className="text-[12px] font-bold tracking-widest text-[var(--purple-600)] uppercase mb-3">Early Access Position</span>
          <div className="text-[56px] md:text-[72px] font-black text-[var(--purple-600)] leading-none tracking-tighter">#{position}</div>
        </div>

        {/* What Happens Next */}
        <div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-left mb-12">
          <h3 className="text-[14px] font-bold tracking-widest text-gray-400 uppercase mb-5">What Happens Next?</h3>
          <ul className="space-y-4">
            {[
              "Your signup has been confirmed.",
              "You'll receive launch updates.",
              "We'll notify you when your campus is available.",
              "No spam. Unsubscribe anytime."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-[15px] font-semibold text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Share Section */}
        <div className="w-full flex flex-col items-center border-t border-gray-100 pt-10">
          <h3 className="text-[18px] font-bold text-gray-900 mb-6">Help us reach more engineering students.</h3>
          
          <div className="w-full flex flex-col gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-14 flex items-center justify-center gap-2 rounded-xl bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.01]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Follow Naavik on Instagram
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-14 flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-[16px] font-bold shadow-[0_4px_14px_rgba(10,102,194,0.3)] transition-all hover:scale-[1.01]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              Connect on LinkedIn
            </a>
            
            <CopyLinkButton />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 w-full flex flex-col items-center gap-2 pb-10">
          <span className="text-[13px] font-semibold text-gray-400">Questions?</span>
          <a href="mailto:hello@naavik.in" className="text-[15px] font-bold text-[var(--purple-600)] hover:text-[var(--purple-700)] transition-colors">
            hello@naavik.in
          </a>
        </div>

      </div>
    </main>
  )
}
