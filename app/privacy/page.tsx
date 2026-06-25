import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/logo'

export const metadata: Metadata = {
  title: 'Privacy Policy — Naavik',
  description: 'How we collect and protect your early access waitlist information.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
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
          <Link href="/" className="inline-flex items-center" aria-label="Naavik Home">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </header>

        {/* Content */}
        <main className="prose dark:prose-invert">
          <h1 className="text-2xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Last Updated: June 25, 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Naavik is built by and for engineering students. We respect your privacy and only request data that helps us build a better platform for you.
            </p>

            <div>
              <h2 className="text-base font-semibold text-foreground">1. Data We Collect</h2>
              <p className="mt-2">
                When you sign up for early access, we collect:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Your full name (to address you personally)</li>
                <li>Your email address (to contact you with updates and launch access)</li>
                <li>Your college name (to set up a local workspace for your campus)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">2. How We Use It</h2>
              <p className="mt-2">
                We use your data strictly to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Measure waitlist numbers across campuses in Telangana and AP.</li>
                <li>Email you a single welcome message + one notification when we launch.</li>
              </ul>
              <p className="mt-2">
                We will never sell, lease, or distribute your email or personal information to third parties. There is no tracking or third-party ads.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">3. Security</h2>
              <p className="mt-2">
                All data is encrypted in transit and stored inside our private database. Since this is an early validation website, we do not require password creation, avoiding standard credential theft vulnerabilities.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-foreground">4. Opt-Out</h2>
              <p className="mt-2">
                If you ever want to be removed from the waitlist, simply email us at <strong>hello@naavik.app</strong> and we will delete your record immediately.
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naavik · Made in Hyderabad
      </footer>
    </div>
  )
}
