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
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
