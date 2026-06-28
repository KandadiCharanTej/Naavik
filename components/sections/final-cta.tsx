import { Reveal } from '@/components/animations/reveal'
import { WaitlistButton } from '@/components/ui/cta-buttons'
import { getSupabaseAdmin } from '@/lib/supabase'
import { headers } from 'next/headers'
import { PageContainer, Section, MeshGradient } from '@/components/design/primitives'

async function getWaitlistCount() {
  try {
    const supabase = getSupabaseAdmin()
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
    return count ?? 0
  } catch {
    return 128
  }
}

export async function FinalCta() {
  headers()

  const waitlistCount = await getWaitlistCount()
  const waitlistGoal = 500
  const progressPercentage = Math.min(
    100,
    Math.round((waitlistCount / waitlistGoal) * 100),
  )

  return (
    <Section id="final-cta" surface="purple" pad="compact" className="relative">
      <MeshGradient />
      <PageContainer size="narrow" className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--naavik-radius-xl)] border border-[var(--purple-100)]/80 bg-white/70 px-8 py-12 text-center shadow-[0_8px_40px_rgba(124,58,237,0.08)] backdrop-blur-sm sm:px-12 sm:py-14 lg:px-16 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--purple-300)]/50 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--purple-200)]/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[var(--purple-100)]/40 blur-3xl"
            />

            <p className="relative text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--purple-500)]">
              Early Access
            </p>
            <h2 className="relative mt-4 text-[1.875rem] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.5rem] lg:text-[2.75rem]">
              Naavik is being built right now.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-[16px] font-medium leading-relaxed text-gray-500 sm:text-[17px]">
              Join Early Access today and be among the first students when your campus goes live.
            </p>

            <div className="relative mx-auto mt-10 max-w-sm">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[13px] font-medium text-gray-500 sm:text-[14px]">
                  {waitlistCount} / {waitlistGoal} students have joined early access.
                </p>
                <span className="text-[13px] font-bold tabular-nums text-[var(--purple-600)]">
                  {progressPercentage}%
                </span>
              </div>
              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-[var(--purple-50)] ring-1 ring-[var(--purple-100)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--purple-500)] to-[var(--purple-600)] transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="relative mx-auto mt-10 max-w-xs">
              <WaitlistButton
                id="final-cta-btn"
                className="naavik-btn naavik-btn-primary h-14 w-full !rounded-2xl bg-[var(--purple-600)] text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:bg-[var(--purple-700)]"
              >
                Join the First Students
              </WaitlistButton>
              <p className="mt-4 text-[12px] font-medium text-gray-400">
                No spam. One email when your campus is ready.
              </p>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </Section>
  )
}
