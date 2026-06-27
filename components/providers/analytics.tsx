import Script from 'next/script'

/** Google Analytics 4 — only loads when NEXT_PUBLIC_GA_ID is set. */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: true });
        `}
      </Script>
    </>
  )
}

/** Microsoft Clarity — only loads when NEXT_PUBLIC_CLARITY_ID is set. */
export function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
  if (!clarityId) return null

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  )
}

/** Scroll depth tracking — fires events at 25%, 50%, 75%, 100%. */
export function ScrollDepthTracker() {
  return (
    <Script id="scroll-depth" strategy="afterInteractive">
      {`
        (function() {
          var thresholds = [25, 50, 75, 100];
          var fired = {};
          function getScrollPercent() {
            var h = document.documentElement;
            var b = document.body;
            var st = h.scrollTop || b.scrollTop;
            var sh = (h.scrollHeight || b.scrollHeight) - h.clientHeight;
            return sh > 0 ? Math.round((st / sh) * 100) : 0;
          }
          window.addEventListener('scroll', function() {
            var pct = getScrollPercent();
            thresholds.forEach(function(t) {
              if (pct >= t && !fired[t]) {
                fired[t] = true;
                if (typeof gtag === 'function') {
                  gtag('event', 'scroll_depth', { percent: t });
                }
              }
            });
          }, { passive: true });
        })();
      `}
    </Script>
  )
}
