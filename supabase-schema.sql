-- =============================================
-- World Cup 2026 - Database Schema
-- Run this FIRST in Supabase SQL Editor
-- =============================================

-- Matches table
CREATE TABLE IF NOT EXISTS matches (
  id SERIAL PRIMARY KEY,
  team_a TEXT NOT NULL,
  team_b TEXT NOT NULL,
  team_a_flag TEXT,
  team_b_flag TEXT,
  stage TEXT NOT NULL CHECK (stage IN ('group', 'r16', 'qf', 'sf', 'third', 'final')),
  group_name TEXT,
  match_number INT UNIQUE NOT NULL,
  kickoff_time TIMESTAMPTZ NOT NULL,
  result_a INT,
  result_b INT,
  winner TEXT,
  penalty_winner TEXT,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'locked', 'finished'))
);

-- Predictions table
CREATE TABLE IF NOT EXISTS predictions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  match_id INT REFERENCES matches(id) ON DELETE CASCADE,
  pred_a INT NOT NULL,
  pred_b INT NOT NULL,
  pred_winner TEXT,
  points_earned INT DEFAULT 0,
  was_changed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, match_id)
);

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  total_points INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Matches: anyone can read
CREATE POLICY "matches_read_all" ON matches FOR SELECT USING (true);

-- Predictions: users can read/write their own
CREATE POLICY "predictions_own" ON predictions FOR ALL USING (auth.uid() = user_id);

-- Profiles: users can read all, write own
CREATE POLICY "profiles_read_all" ON profiles FOR SELECT USING (true);
CREATE POLICY "profiles_own_write" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_own_update" ON profiles FOR UPDATE USING (auth.uid() = id);

-- =============================================
-- Function: auto-create profile on signup
-- =============================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Profile is created manually in the app with username
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
