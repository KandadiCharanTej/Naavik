import type { Metadata } from 'next'
import { Logo } from '@/components/logo'

export const metadata: Metadata = {
  title: 'Terms of Use — Naviko',
  description: 'Terms and conditions for using the Naviko validation website.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background px-5 py-16 flex flex-col justify-between">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 10%, oklch(0.54 0.24 293 / 0.05), transparent 45%)',
        }}
      />

      <div className="mx-auto max-w-xl w-full">
        {/* Header */}
        <header className="mb-10 flex items-center justify-between border-b border-border pb-6">
          <a href="/" className="inline-flex items-center" aria-label="Naviko Home">
            <Logo />
          </a>
          <a
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </a>
        </header>

        {/* Content */}
        <main className="prose dark:prose-invert">
          <h1 className="text-2xl font-semibold tracking-tight">Terms of Use</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Last Updated: June 25, 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Welcome to the Naviko early access validation page. By browsing this page or signing up, you agree to these basic terms.
            </p>

            <div>
              <h2 className="text-base font-semibold text-foreground">1. Validation Phase</h2>
              <p className="mt-2">
                This website is built to gauge market interest and collect an early access list of engineering students in Telangana and Andhra Pradesh. It is <strong>not</strong> the final platform. We make no guarantees about features, release dates, or platform availability.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">2. Communication</h2>
              <p className="mt-2">
                By entering your email on the waitlist, you consent to receive waitlist-related communications from us (such as a welcome email, occasional progress updates, and a launch invitation). We hate spam and will never send unrelated promotional emails.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">3. Intellectual Property</h2>
              <p className="mt-2">
                All designs, logos, and custom code on this landing page are owned by the Naviko team. Copying or reverse engineering this design for commercial purposes is not allowed.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">4. Age Restrictions</h2>
              <p className="mt-2">
                This platform is intended for students currently enrolled in undergraduate or graduate engineering degrees.
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naviko · Made in Hyderabad
      </footer>
    </div>
  )
}
