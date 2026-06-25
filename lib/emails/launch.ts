/**
 * Naavik Launch email template — for use when the platform launches.
 * Call this from a script or API route when you're ready to notify all waitlist users.
 */
export function buildLaunchHtml(name: string, launchUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f9fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9fb;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;border:1px solid #eee;overflow:hidden;">

        <!-- Header -->
        <tr><td style="padding:32px 32px 0;">
          <p style="margin:0;font-size:20px;font-weight:600;color:#1a1a2e;letter-spacing:-0.3px;">
            Naavi<span style="color:#7c3aed;">k</span>
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:24px 32px 32px;">
          <h1 style="margin:0 0 16px;font-size:24px;font-weight:600;color:#1a1a2e;">
            Naavik is Live! 🚀
          </h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            Hey ${name},
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            The day is here — Naavik is officially live. As one of our earliest supporters, you get first access to the platform.
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            Explore opportunities, find resources for your semester, connect with students from your college and beyond — all in one place.
          </p>

          <!-- CTA -->
          <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
            <tr><td style="background:#7c3aed;border-radius:8px;padding:14px 28px;">
              <a href="${launchUrl}" target="_blank" rel="noopener noreferrer"
                 style="color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;display:inline-block;">
                Get Started on Naavik →
              </a>
            </td></tr>
          </table>

          <p style="margin:0;font-size:14px;color:#555;line-height:1.6;">
            Thank you for believing in this from the beginning. We built this for students like you.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid #f0f0f0;background:#fafafa;">
          <p style="margin:0;font-size:12px;color:#999;text-align:center;">
            © ${new Date().getFullYear()} Naavik · Built by students, for students · Hyderabad
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}
