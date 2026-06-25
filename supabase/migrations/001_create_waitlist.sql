-- Waitlist table for Naavik early access signups
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  college TEXT NOT NULL,
  position INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Fast duplicate check
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);

-- College-wise aggregation
CREATE INDEX IF NOT EXISTS idx_waitlist_college ON waitlist (college);

-- Daily signup queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist (created_at);
