/**
 * Client-side analytics helpers.
 * Wraps Google Analytics 4 and Microsoft Clarity event tracking.
 */

type EventParams = Record<string, string | number | boolean>

/** Fire a GA4 event and tag Clarity. */
export function trackEvent(name: string, params?: EventParams) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      name,
      params,
    )
  }

  // Microsoft Clarity custom tag
  if (typeof window !== 'undefined' && 'clarity' in window) {
    ;(window as unknown as { clarity: (...args: unknown[]) => void }).clarity(
      'set',
      name,
      params ? JSON.stringify(params) : 'true',
    )
  }
}

// ─── Pre-defined events ────────────────────────────────────

export function trackWaitlistButtonClick() {
  trackEvent('waitlist_button_click')
}

export function trackWaitlistSubmitted(college: string) {
  trackEvent('waitlist_submitted', { college })
}

export function trackAdminButtonClick() {
  trackEvent('admin_button_click')
}

export function trackPageView(path: string) {
  trackEvent('page_view', { page_path: path })
}
