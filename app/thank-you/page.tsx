import type { Metadata } from 'next'
import { ThankYouContent } from './thank-you-content'

export const metadata: Metadata = {
  title: 'You\'re In — Naviko Early Access',
  description: 'You\'ve joined the Naviko early access waitlist. Share with friends and follow us on Instagram.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return <ThankYouContent />
}
