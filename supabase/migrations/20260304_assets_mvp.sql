create extension if not exists "pgcrypto";

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  original_path text not null,
  width integer null,
  height integer null,
  created_at timestamptz default now()
);

create index if not exists idx_assets_created_at on public.assets (created_at desc);
