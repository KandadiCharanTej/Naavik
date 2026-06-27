import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleAnalytics, MicrosoftClarity, ScrollDepthTracker } from '@/components/analytics'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://naavik.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Naavik — One platform for engineering students',
    template: '%s | Naavik',
  },
  description:
    'Naavik is an early-stage student ecosystem being built for engineering students in Telangana & Andhra Pradesh. Join early access and help shape it.',
  keywords: [
    'Naavik',
    'engineering students',
    'student platform',
    'Telangana',
    'Andhra Pradesh',
    'student ecosystem',
    'college community',
    'hackathons',
    'internships',
    'early access',
  ],
  authors: [{ name: 'Naavik', url: siteUrl }],
  creator: 'Naavik',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Naavik',
    title: 'Naavik — One platform for engineering students',
    description:
      'An early-stage student ecosystem for engineering students in Telangana & Andhra Pradesh. Join early access.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Naavik — One platform for engineering students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naavik — One platform for engineering students',
    description:
      'An early-stage student ecosystem for engineering students in Telangana & Andhra Pradesh.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAFAFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Naavik',
              url: siteUrl,
              description:
                'An early-stage student ecosystem for engineering students in Telangana & Andhra Pradesh.',
              potentialAction: {
                '@type': 'SearchAction',
                target: siteUrl,
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Naavik',
              url: siteUrl,
              logo: `${siteUrl}/icon.svg`,
              description:
                'Student ecosystem for engineering students in Telangana & Andhra Pradesh.',
              areaServed: {
                '@type': 'Place',
                name: 'Telangana & Andhra Pradesh, India',
              },
            }),
          }}
        />
      </head>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <GoogleAnalytics />
        <MicrosoftClarity />
        <ScrollDepthTracker />
      </body>
    </html>
  )
}
