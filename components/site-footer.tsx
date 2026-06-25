import { Logo } from '@/components/logo'
import { ADMIN_FORM_URL, INSTAGRAM_URL } from '@/lib/constants'
import { InstagramIcon } from '@/components/instagram-icon'

const TWITTER_URL = 'https://twitter.com/naviko_app'

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#FAFAFC]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* Logo & Description */}
          <div className="max-w-xs text-left">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              One place for everything engineering students need.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/85 flex items-center gap-1">
              Built in Telangana &amp; Andhra Pradesh. 🤍
            </p>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Product</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Program</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#become-admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Become Campus Admin
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">Community</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={TWITTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <TwitterIcon className="h-3.5 w-3.5" />
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                    Instagram
                  </a>
                </li>
                <li className="flex items-center gap-1.5 text-sm text-muted-foreground/60 select-none">
                  Discord <span className="text-[8px] font-bold text-muted-foreground/80 bg-muted px-1.5 py-0.5 rounded">Coming soon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Naviko. Built by students, for students.</p>
        </div>
      </div>
    </footer>
  )
}
