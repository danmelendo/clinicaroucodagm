import { localBlogPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/lib/content-types";

export type { BlogPost } from "@/lib/content-types";

const LS_KEY = "rouco_blog_posts";
const WP_BASE_ENV = import.meta.env.VITE_WP_API_BASE as string | undefined;

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

function getStoredPosts(): BlogPost[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredPosts(posts: BlogPost[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(posts));
}

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

  const response = await fetch(`${base}/posts?per_page=100&status=publish&_embed=1`);
  if (!response.ok) return [];
  const posts = (await response.json()) as WpPost[];

  return posts.map((post) => {
    const title = decodeHtml(post.title?.rendered ?? "");
    const excerptHtml = post.excerpt?.rendered ?? "";
    const contentHtml = post.content?.rendered ?? "";
    const excerpt = decodeHtml(stripHtml(excerptHtml));
    const metaDescription =
      decodeHtml(post.yoast_head_json?.description ?? excerpt).slice(0, 160);
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
      contentFormat: "html",
      featuredImage,
      source: "wordpress",
    };
  });
}

function getAllPosts(): BlogPost[] {
  const stored = getStoredPosts();
  const storedIds = new Set(stored.map((p) => p.id));
  const merged = [...stored, ...localBlogPosts.filter((p) => !storedIds.has(p.id))];
  return merged.sort((a, b) => b.date.localeCompare(a.date));
}

// Public API
export async function getPosts(): Promise<BlogPost[]> {
  try {
    const wpPosts = await getWordPressPosts();
    const all = [...wpPosts, ...getAllPosts()];
    const unique = new Map(all.map((p) => [p.slug, p]));
    return Array.from(unique.values()).sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return getAllPosts();
  }
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.published);
}

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

// CRUD for localStorage posts
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

// Auth
const ADMIN_PASS = "rouco2024";
const SESSION_KEY = "rouco_admin_session";

export function adminLogin(password: string): boolean {
  if (password === ADMIN_PASS) {
    sessionStorage.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function adminLogout() {
  sessionStorage.removeItem(SESSION_KEY);
}
