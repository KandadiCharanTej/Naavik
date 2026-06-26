export function WhyNaavikExists() {
  const contrastItems = [
    { before: '7 apps to check every morning', after: 'One feed' },
    { before: 'Notes buried in Drive folders', after: 'Semester-sorted vault' },
    { before: 'Opportunities found by luck', after: 'Filtered to your branch' },
    { before: 'Teammates from your class only', after: '200+ colleges in TG & AP' },
    { before: 'Campus updates in WhatsApp spam', after: 'Verified, in one place' },
  ]

  return (
    <section className="bg-white py-20 sm:py-28" id="why-naavik-exists">
      <div className="mx-auto max-w-4xl px-5 text-center">
        
        <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl leading-snug">
          Engineering students today manage college life across 7 different apps.
        </h2>
        
        <p className="mt-4 text-lg font-medium text-primary">
          Naavik brings everything into one place.
        </p>

        {/* Logos Mockup */}
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-60 grayscale transition-all hover:grayscale-0">
          <span className="text-lg font-bold text-[#25D366]">WhatsApp</span>
          <span className="text-lg font-bold text-[#0A66C2]">LinkedIn</span>
          <span className="text-lg font-bold text-[#1FA463]">Google Drive</span>
          <span className="text-lg font-bold text-[#F04F23]">Unstop</span>
          <span className="text-lg font-bold text-[#181717]">GitHub</span>
          <span className="text-lg font-bold text-gray-700">ERP</span>
          <span className="text-lg font-bold text-[#7248B9]">Google Forms</span>
        </div>

        {/* Contrast Table */}
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-sm text-left">
          <div className="grid grid-cols-2 border-b border-border bg-secondary/50 p-4 sm:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Before Naavik</span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">With Naavik</span>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {contrastItems.map((item, i) => (
              <div key={i} className="grid grid-cols-2 p-4 sm:px-8 items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground line-through decoration-muted-foreground/30">{item.before}</span>
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="text-primary hidden sm:inline">→</span> {item.after}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Three Words */}
        <div className="mx-auto mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">
          <span>One account.</span>
          <span className="hidden sm:block text-muted-foreground/30">•</span>
          <span>One search.</span>
          <span className="hidden sm:block text-muted-foreground/30">•</span>
          <span>One place.</span>
        </div>

      </div>
    </section>
  )
}
