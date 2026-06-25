import { WaitlistButton } from '@/components/cta-buttons'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#0A0714] px-6 py-16 text-center sm:py-20 shadow-2xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15), transparent 70%)',
            }}
          />
          <div className="relative flex flex-col items-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl leading-[1.1]">
              Secure your spot.<br />
              Be the first to get Naviko.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-400">
              Join students from CBIT, VNRVJIET, and JNTUH reserving early access. Free for students, always.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <WaitlistButton size="lg" id="final-cta-waitlist-btn">
                Reserve Early Access →
              </WaitlistButton>
              <p className="text-xs text-slate-500 mt-2">
                No spam. Starting soon in Telangana & Andhra Pradesh.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

