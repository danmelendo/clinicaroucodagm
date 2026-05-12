-- =============================================================================
-- Rouco Fisioterapia — Supabase schema
-- Ejecuta este SQL en el SQL Editor de tu proyecto Supabase.
-- =============================================================================

-- Tabla principal de posts
create table if not exists public.blog_posts (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  slug            text not null unique,
  excerpt         text not null default '',
  content         text not null default '',
  category        text not null default 'Blog',
  date            date not null default now(),
  meta_description text not null default '',
  published       boolean not null default false,
  content_format  text check (content_format in ('markdown', 'html')) default 'markdown',
  featured_image  text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Índices útiles
create index if not exists blog_posts_slug_idx      on public.blog_posts (slug);
create index if not exists blog_posts_published_idx on public.blog_posts (published);
create index if not exists blog_posts_date_idx      on public.blog_posts (date desc);

-- Trigger para actualizar updated_at automáticamente
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- =============================================================================
-- Row Level Security (RLS)
-- =============================================================================
alter table public.blog_posts enable row level security;

-- Lectura pública: sólo posts publicados
create policy "Leer posts publicados"
  on public.blog_posts for select
  using (published = true);

-- Escritura: sólo usuarios autenticados con rol 'service_role' o admin
-- (cuando integres Supabase Auth, sustituye la condición por tu rol)
-- create policy "Admin puede escribir"
--   on public.blog_posts for all
--   using (auth.role() = 'authenticated')
--   with check (auth.role() = 'authenticated');

-- =============================================================================
-- Notas para la integración completa
-- =============================================================================
-- 1. Instala el cliente oficial:
--      npm install @supabase/supabase-js
--
-- 2. Crea src/lib/supabase.ts:
--      import { createClient } from '@supabase/supabase-js'
--      export const supabase = createClient(
--        import.meta.env.VITE_SUPABASE_URL,
--        import.meta.env.VITE_SUPABASE_ANON_KEY
--      )
--
-- 3. En blog.ts, reemplaza el fetch manual de getSupabasePosts() por:
--      const { data, error } = await supabase
--        .from('blog_posts')
--        .select('*')
--        .eq('published', true)
--        .order('date', { ascending: false })
--      if (error) return []
--      return (data ?? []).map(mapSupabaseRow)
--
-- 4. Para el panel /admin, usa supabase.from('blog_posts').insert/update/delete
--    con autenticación de usuario (supabase.auth.signInWithPassword).
--
-- 5. Variables de entorno necesarias (.env):
--      VITE_SUPABASE_URL=https://xxxx.supabase.co
--      VITE_SUPABASE_ANON_KEY=eyJhbGc...
--      VITE_ADMIN_PASSWORD=tu_contrasena_segura   ← nunca en git
