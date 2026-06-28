import { SignJWT, jwtVerify } from 'jose'

const getSecretKey = () => {
  const secret = process.env.DASHBOARD_PASSWORD || 'fallback_secret_for_dev_only'
  return new TextEncoder().encode(secret)
}

/**
 * Generate a JWT session token for the dashboard.
 */
export async function generateSessionToken(): Promise<string> {
  const token = await new SignJWT({ auth: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getSecretKey())
  return token
}

/**
 * Validate a JWT session token.
 */
export async function validateSessionToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getSecretKey())
    return true
  } catch {
    return false
  }
}

/**
 * Generate a temporary JWT token for the success page (5 minutes).
 */
export async function generateSuccessToken(): Promise<string> {
  const token = await new SignJWT({ success: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('5m')
    .sign(getSecretKey())
  return token
}

/**
 * Validate the success page JWT token.
 */
export async function validateSuccessToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey())
    return payload.success === true
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
