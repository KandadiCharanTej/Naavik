import { ADMIN_FORM_URL } from '@/lib/constants'
import { FileText, Search, UserCheck, CheckCircle2, Rocket } from 'lucide-react'

export function AdminSection() {
  const steps = [
    { icon: FileText, label: 'Apply', desc: 'Fill the form' },
    { icon: Search, label: 'Review', desc: 'Profile check' },
    { icon: UserCheck, label: 'Interview', desc: 'Quick chat' },
    { icon: CheckCircle2, label: 'Selected', desc: 'Welcome aboard' },
    { icon: Rocket, label: 'Launch', desc: 'Your campus goes live' },
  ]

  const benefits = [
    'Verified Admin Badge on profile',
    'Direct collaboration with founding team',
    'Early access to new features',
    'Leadership experience for resume',
  ]

  return (
    <section className="bg-white py-24 sm:py-32 border-t border-border" id="admin">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-[2.5rem] border border-border bg-[#F9FAFB] p-8 sm:p-16 shadow-xl shadow-primary/5 flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 w-full text-center sm:text-left">
            <span className="text-xs font-bold tracking-wider text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20">Founding Team</span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-tight">
              Lead Your Campus.
            </h2>
            <p className="mt-5 text-base font-medium text-muted-foreground leading-relaxed max-w-md mx-auto sm:mx-0">
              We are selecting one Admin per college to curate resources and verify updates. Build a powerful network before you graduate.
            </p>
            
            <div className="mt-10">
              <a href={ADMIN_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-xl bg-foreground px-8 py-4 text-base font-bold text-background shadow-lg transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-[0.98] sm:w-auto">
                Apply as Admin →
              </a>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Perks</h3>
              <ul className="flex flex-col gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] font-bold text-emerald-600 border border-emerald-500/20">✓</span>
                    <span className="text-sm font-bold text-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline UI */}
          <div className="flex-1 w-full relative">
            <div className="absolute top-8 bottom-8 left-[2.25rem] w-0.5 bg-border sm:hidden" />
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 relative z-10">
              {/* Horizontal Line for Desktop */}
              <div className="hidden sm:block absolute top-[2rem] left-8 right-8 h-0.5 bg-border z-[-1]" />
              
              {steps.map((step, index) => (
                <div key={index} className="flex sm:flex-col items-center gap-6 sm:gap-4 group">
                  <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-muted-foreground group-hover:border-primary/50 group-hover:text-primary group-hover:shadow-md transition-all">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="sm:text-center flex-1">
                    <h4 className="text-base font-bold text-foreground">{step.label}</h4>
                    <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 rounded-2xl border border-border bg-white p-6 shadow-sm flex items-start gap-4">
              <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">💡</div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Time Commitment</h4>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">About 2-3 hours per week. Mostly verifying notes and approving campus updates. No technical skills required.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
