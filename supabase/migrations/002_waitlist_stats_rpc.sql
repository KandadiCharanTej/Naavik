-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Note: No RLS policies are created. This ensures public/anon keys cannot
-- select, insert, update, or delete waitlist rows. Only the server-side
-- service role key (admin) can bypass RLS to read/write waitlist data.

-- RPC function to aggregate signups by college
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS TABLE (college TEXT, count BIGINT)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT college, COUNT(*) as count
  FROM waitlist
  GROUP BY college
  ORDER BY count DESC;
$$;

-- RPC function to aggregate daily signups for the last 30 days
CREATE OR REPLACE FUNCTION get_daily_signups_last_30_days()
RETURNS TABLE (day DATE, count BIGINT)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT created_at::DATE as day, COUNT(*) as count
  FROM waitlist
  WHERE created_at >= NOW() - INTERVAL '30 days'
  GROUP BY created_at::DATE
  ORDER BY day ASC;
$$;
