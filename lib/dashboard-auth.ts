import crypto from 'crypto'

const ALGORITHM = 'aes-256-cbc'

/**
 * Generate a session token for the dashboard.
 * Contains timestamp + random bytes, encrypted with dashboard password as key.
 */
export function generateSessionToken(): string {
  const password = process.env.DASHBOARD_PASSWORD
  if (!password) throw new Error('DASHBOARD_PASSWORD not set')

  const payload = JSON.stringify({
    ts: Date.now(),
    rand: crypto.randomBytes(8).toString('hex'),
  })

  const key = crypto.scryptSync(password, 'naavik-dashboard-salt', 32)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
  let encrypted = cipher.update(payload, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return iv.toString('hex') + ':' + encrypted
}

/**
 * Validate a session token.
 * Returns true if the token was generated with the current password
 * and is less than 24 hours old.
 */
export function validateSessionToken(token: string): boolean {
  const password = process.env.DASHBOARD_PASSWORD
  if (!password || !token) return false

  try {
    const [ivHex, encrypted] = token.split(':')
    if (!ivHex || !encrypted) return false

    const key = crypto.scryptSync(password, 'naavik-dashboard-salt', 32)
    const iv = Buffer.from(ivHex, 'hex')
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv)
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')

    const payload = JSON.parse(decrypted) as { ts: number }
    const age = Date.now() - payload.ts
    const MAX_AGE = 24 * 60 * 60 * 1000 // 24 hours

    return age < MAX_AGE
  } catch {
    return false
  }
}

/**
 * Validate password directly.
 */
export function validatePassword(input: string): boolean {
  const password = process.env.DASHBOARD_PASSWORD
  if (!password) return false
  return input === password
}
