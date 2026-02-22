export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

const STORAGE_KEY = "rouco_gallery_images";

const defaultImages: GalleryImage[] = [];

export function getGalleryImages(): GalleryImage[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultImages));
    return defaultImages;
  }

  try {
    const parsed = JSON.parse(stored) as GalleryImage[];
    return Array.isArray(parsed) ? parsed : defaultImages;
  } catch {
    return defaultImages;
  }
}

export function saveGalleryImages(images: GalleryImage[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

export function addGalleryImage(image: GalleryImage): void {
  const images = getGalleryImages();
  images.push(image);
  saveGalleryImages(images);
}

export function deleteGalleryImage(id: string): void {
  const images = getGalleryImages().filter((img) => img.id !== id);
  saveGalleryImages(images);
}
