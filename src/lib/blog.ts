/**
 * blog.ts
 *
 * Fuente de datos para posts del blog. Prioridad:
 *   1. Supabase  (si VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY están definidas)
 *   2. WordPress (si VITE_WP_API_BASE está definida)
 *   3. localStorage (posts creados desde el panel /admin)
 *   4. Posts locales estáticos (src/content/blog/posts.ts)
 *
 * Para activar Supabase crea un proyecto, ejecuta el SQL de
 * src/lib/supabase-schema.sql y añade las variables de entorno al .env.
 */

import { localBlogPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/lib/content-types";

export type { BlogPost } from "@/lib/content-types";

// ---------------------------------------------------------------------------
// Env
// ---------------------------------------------------------------------------
const WP_BASE_ENV = import.meta.env.VITE_WP_API_BASE as string | undefined;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Define VITE_ADMIN_PASSWORD en tu archivo .env (no lo subas a git).
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;

const LS_KEY = "rouco_blog_posts";
const SESSION_KEY = "rouco_admin_session";

// ---------------------------------------------------------------------------
// Storage helpers
// ---------------------------------------------------------------------------
function getStorage(kind: "local" | "session"): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    const storage = kind === "local" ? window.localStorage : window.sessionStorage;
    const testKey = "__rouco_storage_test__";
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return storage;
  } catch {
    return null;
  }
}

function getStoredPosts(): BlogPost[] {
  try {
    const storage = getStorage("local");
    if (!storage) return [];
    const raw = storage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredPosts(posts: BlogPost[]) {
  const storage = getStorage("local");
  if (!storage) return;
  storage.setItem(LS_KEY, JSON.stringify(posts));
}

// ---------------------------------------------------------------------------
// Supabase source
// ---------------------------------------------------------------------------
type SupabaseRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  meta_description: string;
  published: boolean;
  content_format?: "markdown" | "html";
  featured_image?: string;
};

function mapSupabaseRow(row: SupabaseRow): BlogPost {
  return {
    id: `sb-${row.id}`,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    date: row.date,
    metaDescription: row.meta_description,
    published: row.published,
    contentFormat: row.content_format ?? "markdown",
    featuredImage: row.featured_image,
    source: "supabase",
  };
}

async function getSupabasePosts(): Promise<BlogPost[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=*&published=eq.true&order=date.desc`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    if (!response.ok) return [];
    const rows = (await response.json()) as SupabaseRow[];
    return rows.map(mapSupabaseRow);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// WordPress source
// ---------------------------------------------------------------------------
type WpPost = {
  id: number;
  slug: string;
  date: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: {
    "wp:term"?: Array<Array<{ name?: string }>>;
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
  };
  yoast_head_json?: { description?: string };
};

function normalizeWpBase(raw?: string) {
  if (!raw) return undefined;
  const trimmed = raw.replace(/\/$/, "");
  if (trimmed.endsWith("/wp-json/wp/v2")) return trimmed;
  if (trimmed.endsWith("/wp-json/wp/v2/")) return trimmed.slice(0, -1);
  if (trimmed.endsWith("/wp-json")) return `${trimmed}/wp/v2`;
  return `${trimmed}/wp-json/wp/v2`;
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeHtml(html: string) {
  if (typeof window === "undefined") return html;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
}

function parseWpCategory(post: WpPost) {
  const terms = post._embedded?.["wp:term"];
  const firstCategory = terms?.[0]?.[0]?.name;
  return firstCategory ?? "Blog";
}

async function getWordPressPosts(): Promise<BlogPost[]> {
  const base = normalizeWpBase(WP_BASE_ENV);
  if (!base) return [];
  try {
    const response = await fetch(
      `${base}/posts?per_page=100&status=publish&_embed=1`
    );
    if (!response.ok) return [];
    const posts = (await response.json()) as WpPost[];
    return posts.map((post) => {
      const title = decodeHtml(post.title?.rendered ?? "");
      const excerptHtml = post.excerpt?.rendered ?? "";
      const contentHtml = post.content?.rendered ?? "";
      const excerpt = decodeHtml(stripHtml(excerptHtml));
      const metaDescription = decodeHtml(
        post.yoast_head_json?.description ?? excerpt
      ).slice(0, 160);
      const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
      return {
        id: `wp-${post.id}`,
        title,
        slug: post.slug,
        excerpt,
        content: contentHtml,
        category: decodeHtml(parseWpCategory(post)),
        date: post.date,
        metaDescription,
        published: true,
        contentFormat: "html" as const,
        featuredImage,
        source: "wordpress" as const,
      };
    });
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Local / localStorage merge
// ---------------------------------------------------------------------------
function getLocalPosts(): BlogPost[] {
  const stored = getStoredPosts();
  const storedIds = new Set(stored.map((p) => p.id));
  const merged = [
    ...stored,
    ...localBlogPosts.filter((p) => !storedIds.has(p.id)),
  ];
  return merged.sort((a, b) => b.date.localeCompare(a.date));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export async function getPosts(): Promise<BlogPost[]> {
  try {
    const [supabasePosts, wpPosts] = await Promise.all([
      getSupabasePosts(),
      getWordPressPosts(),
    ]);
    const all = [...supabasePosts, ...wpPosts, ...getLocalPosts()];
    const unique = new Map(all.map((p) => [p.slug, p]));
    return Array.from(unique.values()).sort((a, b) =>
      b.date.localeCompare(a.date)
    );
  } catch {
    return getLocalPosts();
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.published);
}

/**
 * Devuelve undefined si el slug no existe.
 * El componente que llama debe renderizar un 404, no redirigir.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// ---------------------------------------------------------------------------
// CRUD — localStorage
// ---------------------------------------------------------------------------
export function savePost(post: BlogPost) {
  const stored = getStoredPosts();
  const idx = stored.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    stored[idx] = post;
  } else {
    stored.push(post);
  }
  saveStoredPosts(stored);
}

export function deletePost(id: string) {
  saveStoredPosts(getStoredPosts().filter((p) => p.id !== id));
}

// ---------------------------------------------------------------------------
// Auth — contraseña desde variable de entorno VITE_ADMIN_PASSWORD
// ---------------------------------------------------------------------------
export function adminLogin(password: string): boolean {
  if (!ADMIN_PASS) {
    console.warn("[blog] VITE_ADMIN_PASSWORD no está definida. Acceso admin deshabilitado.");
    return false;
  }
  if (password === ADMIN_PASS) {
    const storage = getStorage("session");
    storage?.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  const storage = getStorage("session");
  return storage?.getItem(SESSION_KEY) === "1";
}

export function adminLogout() {
  const storage = getStorage("session");
  storage?.removeItem(SESSION_KEY);
}
