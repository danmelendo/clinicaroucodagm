import { localGalleryImages } from "@/content/gallery/images";
import type { GalleryImage } from "@/lib/content-types";

export type { GalleryImage } from "@/lib/content-types";

interface GalleryRepository {
  getGalleryImages: () => Promise<GalleryImage[]>;
}

const localGalleryRepository: GalleryRepository = {
  async getGalleryImages() {
    return [...localGalleryImages];
  },
};

const galleryRepository: GalleryRepository = localGalleryRepository;

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return galleryRepository.getGalleryImages();
}
