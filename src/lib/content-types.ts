export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  metaDescription: string;
  published: boolean;
  contentFormat?: "markdown" | "html";
  featuredImage?: string;
  source?: "local" | "wordpress" | "supabase";
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
