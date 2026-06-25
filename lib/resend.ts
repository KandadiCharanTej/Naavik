import { Resend } from 'resend'

let resendClient: Resend | null = null

/** Lazily initialise the Resend client. */
export function getResend(): Resend {
  if (resendClient) return resendClient

  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('Missing RESEND_API_KEY environment variable')
  }

  resendClient = new Resend(key)
  return resendClient
}

/** Send the welcome email to a new waitlist member. */
export async function sendWelcomeEmail(to: string, name: string) {
  const resend = getResend()
  const from = process.env.RESEND_FROM_EMAIL || 'Naviko <noreply@naviko.app>'
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/naviko.app'

  await resend.emails.send({
    from,
    to,
    subject: 'Welcome to Naviko 🚀',
    html: buildWelcomeHtml(name, instagramUrl),
  })
}

/** Inline HTML template for the welcome email. */
function buildWelcomeHtml(name: string, instagramUrl: string): string {
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
            Navik<span style="color:#7c3aed;">o</span>
          </p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:24px 32px 32px;">
          <h1 style="margin:0 0 16px;font-size:22px;font-weight:600;color:#1a1a2e;">
            Welcome aboard, ${name}! 🎉
          </h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            Thank you for joining the Naviko early access list. You're now part of the founding community that will shape this platform.
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            <strong>What is Naviko?</strong><br/>
            Naviko is a student ecosystem being built for engineering students in Telangana &amp; Andhra Pradesh — bringing opportunities, resources, projects, and your college community into one place.
          </p>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#555;">
            We're building this in the open and we'll notify you before anything goes live. Your feedback matters — so don't hesitate to reach out.
          </p>

          <!-- CTA -->
          <table cellpadding="0" cellspacing="0" style="margin:24px 0;">
            <tr><td style="background:#7c3aed;border-radius:8px;padding:12px 24px;">
              <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer"
                 style="color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;display:inline-block;">
                Follow us on Instagram
              </a>
            </td></tr>
          </table>

          <p style="margin:0;font-size:13px;color:#999;line-height:1.5;">
            We'll only email you about Naviko. No spam, ever.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 32px;border-top:1px solid #f0f0f0;background:#fafafa;">
          <p style="margin:0;font-size:12px;color:#999;text-align:center;">
            © ${new Date().getFullYear()} Naviko · Built by students, for students · Hyderabad
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}
