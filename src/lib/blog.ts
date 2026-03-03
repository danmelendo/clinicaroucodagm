import { localBlogPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/lib/content-types";

export type { BlogPost } from "@/lib/content-types";

const LS_KEY = "rouco_blog_posts";

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

function getAllPosts(): BlogPost[] {
  const stored = getStoredPosts();
  const storedIds = new Set(stored.map((p) => p.id));
  const merged = [...stored, ...localBlogPosts.filter((p) => !storedIds.has(p.id))];
  return merged.sort((a, b) => b.date.localeCompare(a.date));
}

// Public API
export async function getPosts(): Promise<BlogPost[]> {
  return getAllPosts();
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return getAllPosts().filter((p) => p.published);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return getAllPosts().find((p) => p.slug === slug);
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
