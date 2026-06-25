import { WaitlistButton } from '@/components/cta-buttons'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-[#FAFAFC] px-6 py-16 text-center sm:py-20 shadow-xs">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.08), transparent 70%)',
            }}
          />
          <div className="relative flex flex-col items-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl leading-[1.1]">
              Naviko is being built right now. <br />
              The students who join early will shape what it becomes.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Get launch updates for your college. Lock in your founding member status. Be first when your campus goes live.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <WaitlistButton size="lg" id="final-cta-waitlist-btn">
                Reserve My Spot — Free
              </WaitlistButton>
              <p className="text-xs text-muted-foreground mt-2">
                No spam. Just meaningful updates. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
