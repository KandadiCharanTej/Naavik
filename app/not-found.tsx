import { Logo } from '@/components/ui/logo'
import { ArrowLeft, Home, Compass } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Naavik',
  description: 'The page you are looking for does not exist.',
}

export default function NotFoundPage() {
  return (
    <main className="h-[100dvh] w-full bg-white flex flex-col overflow-hidden relative">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0,transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-overlay" />
      
      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center absolute top-0 left-0 z-20">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
      </header>

      {/* Main Content Centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-5 relative z-10 w-full max-w-2xl mx-auto">
        
        {/* Giant 404 Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-black text-gray-50 opacity-50 select-none z-[-1] tracking-tighter">
          404
        </div>

        {/* Icon */}
        <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm mb-8 animate-in zoom-in duration-500">
          <Compass className="w-8 h-8 text-[var(--purple-600)]" strokeWidth={2} />
        </div>

        {/* Text */}
        <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-tight text-gray-900 mb-3 leading-tight animate-in slide-in-from-bottom-4 fade-in duration-700">
          You've drifted off course.
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-500 font-medium leading-relaxed max-w-[420px] mb-10 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-100">
          The page you're looking for has moved, been renamed, or might never have existed. 
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200">
          <Link 
            href="/"
            className="w-full sm:w-auto px-8 h-12 flex items-center justify-center gap-2 rounded-xl bg-[var(--purple-600)] hover:bg-[var(--purple-700)] text-white text-[15px] font-bold shadow-[0_4px_14px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.02]"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          

        </div>
      </div>

      {/* Footer minimal */}
      <footer className="w-full p-6 text-center absolute bottom-0 left-0 z-20">
        <p className="text-[13px] font-semibold text-gray-400">
          Need help? <a href="mailto:support@naavik.in" className="text-[var(--purple-600)] hover:underline">Contact Support</a>
        </p>
      </footer>
    </main>
  )
}
