import { Resend } from 'resend'
import nodemailer from 'nodemailer'

let resendClient: Resend | null = null

/** Lazily initialise the Resend client. */
export function getResend(): Resend | null {
  if (resendClient) return resendClient

  const key = process.env.RESEND_API_KEY
  if (!key) {
    return null
  }

  resendClient = new Resend(key)
  return resendClient
}

/** Send the welcome email to a new waitlist member. */
export async function sendWelcomeEmail(to: string, name: string) {
  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/'
  const linkedinUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/'
  const subject = 'Welcome to Naavik 🚀'
  const html = buildWelcomeHtml(name, instagramUrl, linkedinUrl)

  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD

  // If Gmail SMTP credentials are configured, send via SMTP
  if (smtpUser && smtpPassword) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    const from = process.env.RESEND_FROM_EMAIL || `Naavik <${smtpUser}>`

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
    })
    return
  }

  // Otherwise, fall back to Resend
  const resend = getResend()
  if (!resend) {
    console.warn('Skipping welcome email: Neither SMTP nor RESEND_API_KEY are configured.')
    return
  }

  const from = process.env.RESEND_FROM_EMAIL || 'Naavik <welcome@naavik.app>'

  await resend.emails.send({
    from,
    to,
    subject,
    html,
  })
}


/** Inline HTML template for the welcome email. */
function buildWelcomeHtml(name: string, instagramUrl: string, linkedinUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Naavik</title>
</head>
<body style="margin:0;padding:0;background-color:#FAFAFC;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAFC;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;background-color:#ffffff;border-radius:16px;border:1px solid #E5E7EB;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05),0 2px 4px -1px rgba(0,0,0,0.03);">
          
          <!-- Top Accent Bar -->
          <tr>
            <td height="4" style="background-color:#6D28D9;"></td>
          </tr>

          <!-- Header / Logo -->
          <tr>
            <td style="padding:32px 32px 16px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:24px;font-weight:800;color:#111827;letter-spacing:-0.5px;">
                      Naavi<span style="color:#6D28D9;">k</span>
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:16px 32px 32px;">
              <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#111827;font-weight:600;">
                Hi ${name},
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">
                Welcome to Naavik!
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">
                You're officially on the Early Access list.
              </p>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">
                Naavik is building one place where engineering students can discover internships, hackathons, resources, projects, teammates, and college updates without jumping between multiple apps.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#374151;">
                We'll keep you updated as we build and you'll be among the first to receive access.
              </p>

              <!-- Social Links Section -->
              <p style="margin:0 0 12px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#6B7280;">
                Follow our journey
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                <tr>
                  <td style="background-color:#F5F3FF;border:1px solid #DDD6FE;border-radius:20px;padding:8px 16px;">
                    <a href="${instagramUrl}" target="_blank" rel="noopener noreferrer" style="color:#6D28D9;text-decoration:none;font-size:14px;font-weight:600;display:block;">
                      Instagram
                    </a>
                  </td>
                  <td width="12"></td>
                  <td style="background-color:#F5F3FF;border:1px solid #DDD6FE;border-radius:20px;padding:8px 16px;">
                    <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" style="color:#6D28D9;text-decoration:none;font-size:14px;font-weight:600;display:block;">
                      LinkedIn
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#374151;">
                Thank you for joining us.
              </p>
              <p style="margin:0;font-size:15px;line-height:1.6;color:#111827;font-weight:600;">
                — Team Naavik
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px;background-color:#FAFAFC;border-top:1px solid #E5E7EB;text-align:center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;line-height:1.8;color:#6B7280;">
                    <p style="margin:0 0 4px;font-weight:600;color:#4B5563;">Built by engineering students.</p>
                    <p style="margin:0 0 4px;">Focused on Telangana & Andhra Pradesh.</p>
                    <p style="margin:0;">Privacy first. &bull; No spam. Ever.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

