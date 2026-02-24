import { localBlogPosts } from "@/content/blog/posts";
import type { BlogPost } from "@/lib/content-types";

export type { BlogPost } from "@/lib/content-types";

interface BlogRepository {
  getPosts: () => Promise<BlogPost[]>;
  getPublishedPosts: () => Promise<BlogPost[]>;
  getPostBySlug: (slug: string) => Promise<BlogPost | undefined>;
}

const localBlogRepository: BlogRepository = {
  async getPosts() {
    return [...localBlogPosts].sort((a, b) => b.date.localeCompare(a.date));
  },
  async getPublishedPosts() {
    return localBlogPosts
      .filter((post) => post.published)
      .sort((a, b) => b.date.localeCompare(a.date));
  },
  async getPostBySlug(slug: string) {
    return localBlogPosts.find((post) => post.slug === slug);
  },
};

const blogRepository: BlogRepository = localBlogRepository;

export async function getPosts(): Promise<BlogPost[]> {
  return blogRepository.getPosts();
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  return blogRepository.getPublishedPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogRepository.getPostBySlug(slug);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
