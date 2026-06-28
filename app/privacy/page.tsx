import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'

export const metadata: Metadata = {
  title: 'Privacy Policy â€” Naavik',
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
            <strong>Last Updated:</strong> June 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Naavik values your privacy.
            </p>
            <p>
              We're building Naavik to help engineering students discover opportunities, connect with peers, and grow their careers. During this early access phase, we collect only the information necessary to validate demand, improve the product, and communicate with our waitlist members.
            </p>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-2">
                When you join the Naavik waitlist, we may collect:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>College or University Name</li>
              </ul>
              <p className="mt-4">
                We intentionally collect only the minimum information required. We do not request passwords, payment information, or sensitive personal data during this validation phase.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">How We Use Your Information</h2>
              <p className="mt-2">
                Your information is used solely to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Reserve your place on the early access waitlist.</li>
                <li>Understand student interest across colleges and regions.</li>
                <li>Send important product updates.</li>
                <li>Notify you when Naavik launches.</li>
                <li>Improve the platform based on community interest and feedback.</li>
              </ul>
              <p className="mt-4">
                We will never sell, rent, trade, or share your personal information with advertisers or third parties for marketing purposes.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Data Security</h2>
              <p className="mt-2">
                Protecting your information is important to us.
              </p>
              <p className="mt-2">
                We use industry-standard security practices to protect data while it is transmitted and stored. Access to waitlist information is restricted to authorized team members only.
              </p>
              <p className="mt-2">
                Although no online service can guarantee absolute security, we continuously work to safeguard the information you share with us.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Cookies & Analytics</h2>
              <p className="mt-2">
                Naavik may use basic analytics to understand website performance and improve user experience.
              </p>
              <p className="mt-2">
                These analytics help us understand metrics such as:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Number of visitors</li>
                <li>Waitlist conversions</li>
                <li>Device types</li>
                <li>General usage patterns</li>
              </ul>
              <p className="mt-4">
                We do not use invasive tracking or sell browsing data.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Your Rights</h2>
              <p className="mt-2">
                You may request to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Access your information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your waitlist record</li>
                <li>Stop receiving emails at any time</li>
              </ul>
              <p className="mt-4">
                Simply contact us using the email below.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Changes to This Policy</h2>
              <p className="mt-2">
                As Naavik evolves, this Privacy Policy may be updated to reflect new features or legal requirements.
              </p>
              <p className="mt-2">
                Any significant changes will be reflected by updating the "Last Updated" date on this page.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                For privacy-related questions or requests, contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> <a href="mailto:naavik.team@gmail.com" className="text-primary hover:underline">naavik.team@gmail.com</a>
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-16 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Naavik. Built for Students. Designed for Growth.
      </footer>
    </div>
  )
}
