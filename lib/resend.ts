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
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/naviko.app'
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || '' // Do not use personal profile. Hide if not provided.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://naviko.app'
  
  const subject = "🎉 You're on the Naavik Waitlist!"
  const html = buildWelcomeHtml({ name, instagramUrl, linkedinUrl, siteUrl })

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

  const from = process.env.RESEND_FROM_EMAIL || 'Naavik <welcome@naavik.in>'

  await resend.emails.send({
    from,
    to,
    subject,
    html,
  })
}

/** Inline HTML template for the welcome email. */
function buildWelcomeHtml({
  name,
  instagramUrl,
  linkedinUrl,
  siteUrl,
}: {
  name: string
  instagramUrl: string
  linkedinUrl: string
  siteUrl: string
}): string {
  // SVG Icons URL encoded for inline usage
  const instagramIcon = '&#x1F4F7;' // Fallback for email, or use simple text/image. Email clients strip complex SVGs. Let's use a web-safe approach or basic image if needed. For maximum compatibility without hosting external images, HTML character codes or text is safest. Let's use clean text buttons with simple emojis or just text for maximum client support if SVGs aren't available, but the prompt asked for icons. We can use a standard image tag or simple unicode for icons.
  // Actually, I'll use simple image tags pointing to standard icons or just style them beautifully.
  // To avoid broken images, I'll use a very clean button design.

  const linkedinButtonHtml = linkedinUrl 
    ? `
      <td align="center" style="border-radius:12px;" bgcolor="#0A66C2">
        <a href="${linkedinUrl}" target="_blank" style="font-size:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;padding:12px 24px;border:1px solid #0A66C2;display:inline-block;line-height:1.2;">
          LinkedIn
        </a>
      </td>
    `
    : ''

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Naavik</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @media screen and (max-width: 600px) {
      .responsive-table { width: 100% !important; }
      .responsive-padding { padding: 24px 16px !important; }
      .button-wrapper { width: 100% !important; display: block !important; margin-bottom: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F8FAFC;font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0F172A;-webkit-font-smoothing:antialiased;">
  <div style="background-color:#F8FAFC;padding:40px 20px;text-align:center;">
    <!-- Main Card -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="responsive-table" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:20px;border:1px solid #E2E8F0;box-shadow:0 10px 15px -3px rgba(0,0,0,0.05),0 4px 6px -4px rgba(0,0,0,0.02);overflow:hidden;text-align:left;">
      
      <!-- Top Accent Line -->
      <tr>
        <td height="4" style="background-color:#7C3AED;line-height:4px;font-size:4px;">&nbsp;</td>
      </tr>

      <!-- Header & Logo -->
      <tr>
        <td align="center" style="padding:40px 32px 0;">
          <a href="${siteUrl}" target="_blank" style="text-decoration:none;">
            <img src="https://raw.githubusercontent.com/NavikoApp/website/main/public/light-logo.png" alt="Naavik Logo" width="140" style="display:block;border:0;max-width:140px;height:auto;" />
          </a>
        </td>
      </tr>

      <!-- Content -->
      <tr>
        <td class="responsive-padding" style="padding:40px 48px 48px;">
          <h1 style="margin:0 0 24px;font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#0F172A;">
            🎉 You're on the Waitlist!
          </h1>
          
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
            Hi ${name},
          </p>
          
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
            Welcome to Naavik.
          </p>
          
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#334155;">
            You're officially one of our early members helping shape the future of engineering students.
          </p>
          
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#334155;">
            Naavik is building one platform where engineering students can discover internships, hackathons, competitions, study resources, projects, teammates, and campus updates—all in one place.
          </p>

          <p style="margin:0 0 12px;font-size:16px;line-height:1.6;color:#0F172A;font-weight:600;">
            As an Early Access member, you'll receive:
          </p>
          
          <ul style="margin:0 0 32px;padding:0 0 0 20px;font-size:16px;line-height:1.7;color:#334155;">
            <li style="margin-bottom:8px;">Early access before public launch</li>
            <li style="margin-bottom:8px;">Product updates as we build</li>
            <li style="margin-bottom:8px;">Exclusive announcements</li>
            <li style="margin-bottom:8px;">Opportunities to help shape future features</li>
          </ul>

          <!-- Highlighted CTA Box -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F5F3FF;border-radius:16px;border:1px solid #EDE9FE;margin-bottom:40px;">
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 12px;font-size:16px;line-height:1.5;color:#4C1D95;font-weight:600;">
                  🚀 Thanks for believing in our vision.
                </p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#5B21B6;">
                  We're just getting started, and we're excited to build Naavik with students like you.
                </p>
              </td>
            </tr>
          </table>

          <!-- Social Links -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center">
                <p style="margin:0 0 16px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#64748B;">
                  Follow our journey
                </p>
                
                <table border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="border-radius:12px;" bgcolor="#E1306C">
                      <a href="${instagramUrl}" target="_blank" style="font-size:14px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-weight:600;color:#ffffff;text-decoration:none;border-radius:12px;padding:12px 24px;border:1px solid #E1306C;display:inline-block;line-height:1.2;">
                        Instagram
                      </a>
                    </td>
                    <td width="16" style="font-size:1px;line-height:1px;">&nbsp;</td>
                    ${linkedinButtonHtml}
                  </tr>
                </table>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>

    <!-- Footer -->
    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="responsive-table" style="max-width:600px;margin:32px auto 0;text-align:center;">
      <tr>
        <td style="padding:0 24px;font-size:13px;line-height:1.6;color:#94A3B8;">
          <p style="margin:0 0 16px;">
            ━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <p style="margin:0 0 4px;font-weight:500;color:#64748B;">
            Built for Engineering Students.
          </p>
          <p style="margin:0 0 16px;font-weight:500;color:#64748B;">
            Designed for Growth.
          </p>
          <p style="margin:0 0 12px;">
            Privacy First &bull; No Spam &bull; <a href="#" style="color:#94A3B8;text-decoration:underline;">Unsubscribe Anytime</a>
          </p>
          <p style="margin:0;">
            &copy; 2026 Naavik. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `.trim()
}
