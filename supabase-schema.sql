-- Run once in the Supabase SQL editor (Project → SQL Editor → New query)
-- for the OAT Prep progress-sync feature.

create table if not exists public.progress (
  user_id      uuid primary key references auth.users(id) on delete cascade,
  topic_stats  jsonb not null default '{}'::jsonb,
  test_history jsonb not null default '[]'::jsonb,
  scratch_notes text not null default '',
  best_full    jsonb,
  updated_at   timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "select own progress" on public.progress
  for select using (auth.uid() = user_id);

create policy "insert own progress" on public.progress
  for insert with check (auth.uid() = user_id);

create policy "update own progress" on public.progress
  for update using (auth.uid() = user_id);
