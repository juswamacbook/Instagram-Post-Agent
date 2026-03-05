create extension if not exists pgcrypto;

create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  original_path text not null,
  width integer null,
  height integer null,
  created_at timestamptz not null default now()
);

create table if not exists public.asset_analysis (
  asset_id uuid primary key references public.assets(id) on delete cascade,
  palette jsonb not null,
  safe_zones jsonb not null,
  tags jsonb not null,
  ocr_text text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.design_sets (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid not null references public.assets(id) on delete cascade,
  user_id uuid not null,
  params jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.design_variants (
  id uuid primary key default gen_random_uuid(),
  design_set_id uuid not null references public.design_sets(id) on delete cascade,
  template_id text not null,
  style_id text not null,
  format text not null check (format in ('square', 'portrait', 'story')),
  spec jsonb not null,
  render_path text null,
  thumb_path text null,
  score numeric null,
  created_at timestamptz not null default now()
);

create index if not exists idx_assets_user_id_created_at on public.assets (user_id, created_at desc);
create index if not exists idx_asset_analysis_asset_id on public.asset_analysis (asset_id);
create index if not exists idx_design_sets_user_id_created_at on public.design_sets (user_id, created_at desc);
create index if not exists idx_design_sets_asset_id on public.design_sets (asset_id);
create index if not exists idx_design_variants_design_set_id on public.design_variants (design_set_id);
create index if not exists idx_design_variants_format on public.design_variants (format);

alter table public.assets enable row level security;
alter table public.asset_analysis enable row level security;
alter table public.design_sets enable row level security;
alter table public.design_variants enable row level security;

drop policy if exists assets_select_own on public.assets;
create policy assets_select_own on public.assets for select
using (user_id = auth.uid());

drop policy if exists assets_insert_own on public.assets;
create policy assets_insert_own on public.assets for insert
with check (user_id = auth.uid());

drop policy if exists assets_update_own on public.assets;
create policy assets_update_own on public.assets for update
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists assets_delete_own on public.assets;
create policy assets_delete_own on public.assets for delete
using (user_id = auth.uid());

drop policy if exists asset_analysis_select_own on public.asset_analysis;
create policy asset_analysis_select_own on public.asset_analysis for select
using (
  exists (
    select 1
    from public.assets a
    where a.id = asset_id
      and a.user_id = auth.uid()
  )
);

drop policy if exists asset_analysis_insert_own on public.asset_analysis;
create policy asset_analysis_insert_own on public.asset_analysis for insert
with check (
  exists (
    select 1
    from public.assets a
    where a.id = asset_id
      and a.user_id = auth.uid()
  )
);

drop policy if exists asset_analysis_update_own on public.asset_analysis;
create policy asset_analysis_update_own on public.asset_analysis for update
using (
  exists (
    select 1
    from public.assets a
    where a.id = asset_id
      and a.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.assets a
    where a.id = asset_id
      and a.user_id = auth.uid()
  )
);

drop policy if exists asset_analysis_delete_own on public.asset_analysis;
create policy asset_analysis_delete_own on public.asset_analysis for delete
using (
  exists (
    select 1
    from public.assets a
    where a.id = asset_id
      and a.user_id = auth.uid()
  )
);

drop policy if exists design_sets_select_own on public.design_sets;
create policy design_sets_select_own on public.design_sets for select
using (user_id = auth.uid());

drop policy if exists design_sets_insert_own on public.design_sets;
create policy design_sets_insert_own on public.design_sets for insert
with check (user_id = auth.uid());

drop policy if exists design_sets_update_own on public.design_sets;
create policy design_sets_update_own on public.design_sets for update
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists design_sets_delete_own on public.design_sets;
create policy design_sets_delete_own on public.design_sets for delete
using (user_id = auth.uid());

drop policy if exists design_variants_select_own on public.design_variants;
create policy design_variants_select_own on public.design_variants for select
using (
  exists (
    select 1
    from public.design_sets ds
    where ds.id = design_set_id
      and ds.user_id = auth.uid()
  )
);

drop policy if exists design_variants_insert_own on public.design_variants;
create policy design_variants_insert_own on public.design_variants for insert
with check (
  exists (
    select 1
    from public.design_sets ds
    where ds.id = design_set_id
      and ds.user_id = auth.uid()
  )
);

drop policy if exists design_variants_update_own on public.design_variants;
create policy design_variants_update_own on public.design_variants for update
using (
  exists (
    select 1
    from public.design_sets ds
    where ds.id = design_set_id
      and ds.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.design_sets ds
    where ds.id = design_set_id
      and ds.user_id = auth.uid()
  )
);

drop policy if exists design_variants_delete_own on public.design_variants;
create policy design_variants_delete_own on public.design_variants for delete
using (
  exists (
    select 1
    from public.design_sets ds
    where ds.id = design_set_id
      and ds.user_id = auth.uid()
  )
);

insert into storage.buckets (id, name, public)
values ('uploads', 'uploads', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('renders', 'renders', false)
on conflict (id) do nothing;

drop policy if exists storage_uploads_select_own on storage.objects;
create policy storage_uploads_select_own on storage.objects for select
using (
  bucket_id = 'uploads'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_uploads_insert_own on storage.objects;
create policy storage_uploads_insert_own on storage.objects for insert
with check (
  bucket_id = 'uploads'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_uploads_update_own on storage.objects;
create policy storage_uploads_update_own on storage.objects for update
using (
  bucket_id = 'uploads'
  and split_part(name, '/', 1) = auth.uid()::text
)
with check (
  bucket_id = 'uploads'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_uploads_delete_own on storage.objects;
create policy storage_uploads_delete_own on storage.objects for delete
using (
  bucket_id = 'uploads'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_renders_select_own on storage.objects;
create policy storage_renders_select_own on storage.objects for select
using (
  bucket_id = 'renders'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_renders_insert_own on storage.objects;
create policy storage_renders_insert_own on storage.objects for insert
with check (
  bucket_id = 'renders'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_renders_update_own on storage.objects;
create policy storage_renders_update_own on storage.objects for update
using (
  bucket_id = 'renders'
  and split_part(name, '/', 1) = auth.uid()::text
)
with check (
  bucket_id = 'renders'
  and split_part(name, '/', 1) = auth.uid()::text
);

drop policy if exists storage_renders_delete_own on storage.objects;
create policy storage_renders_delete_own on storage.objects for delete
using (
  bucket_id = 'renders'
  and split_part(name, '/', 1) = auth.uid()::text
);
