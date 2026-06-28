import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/logo'

export const metadata: Metadata = {
  title: 'Terms of Use — Naavik',
  description: 'Terms and conditions for using the Naavik validation website.',
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
          <h1 className="text-2xl font-semibold tracking-tight">Terms of Use</h1>
          <p className="text-xs text-muted-foreground mt-1">
            <strong>Last Updated:</strong> June 2026
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              Welcome to Naavik.
            </p>
            <p>
              These Terms of Use govern your access to and use of the Naavik website and early access waitlist. By accessing this website or joining the waitlist, you agree to these terms.
            </p>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Early Access</h2>
              <p className="mt-2">
                Naavik is currently in its validation and pre-launch stage.
              </p>
              <p className="mt-2">
                The website is designed to collect interest from engineering students and gather feedback before the official product launch.
              </p>
              <p className="mt-2">
                Features, timelines, pricing, and availability may change as the product evolves.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Waitlist Communications</h2>
              <p className="mt-2">
                By joining the waitlist, you agree to receive communications related to Naavik, including:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Welcome email</li>
                <li>Product updates</li>
                <li>Early access invitations</li>
                <li>Launch announcements</li>
                <li>Important service notifications</li>
              </ul>
              <p className="mt-4">
                We respect your inbox and will never send unrelated promotional or spam emails.
              </p>
              <p className="mt-2">
                You may unsubscribe at any time.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Acceptable Use</h2>
              <p className="mt-2">
                You agree not to:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Submit false or misleading information.</li>
                <li>Attempt to disrupt or interfere with the website.</li>
                <li>Use automated bots or scripts to abuse the waitlist.</li>
                <li>Attempt unauthorized access to our systems.</li>
                <li>Misuse any part of the platform.</li>
              </ul>
              <p className="mt-4">
                We reserve the right to remove fraudulent or abusive submissions without notice.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-2">
                Unless otherwise stated, all content on this website—including the Naavik name, branding, logo, interface design, graphics, copy, and source code—is the property of the Naavik team and is protected by applicable intellectual property laws.
              </p>
              <p className="mt-2">
                You may not copy, reproduce, distribute, modify, or commercially exploit any part of the website without prior written permission.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Third-Party Services</h2>
              <p className="mt-2">
                Naavik may use trusted third-party providers to deliver services such as email communications, analytics, hosting, or infrastructure.
              </p>
              <p className="mt-2">
                These providers only process information necessary to perform their services.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Disclaimer</h2>
              <p className="mt-2">
                Naavik is currently under active development.
              </p>
              <p className="mt-2">
                While we strive to provide accurate information, we do not guarantee that:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>All features shown will be released.</li>
                <li>Release dates will remain unchanged.</li>
                <li>The service will always be available without interruption.</li>
              </ul>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-2">
                To the maximum extent permitted by law, Naavik shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or your reliance on its content.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Changes to These Terms</h2>
              <p className="mt-2">
                We may update these Terms as Naavik evolves.
              </p>
              <p className="mt-2">
                Continued use of the website after updates constitutes acceptance of the revised Terms.
              </p>
            </div>

            <hr className="border-border" />

            <div>
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p className="mt-2">
                For questions regarding these Terms, contact:
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
