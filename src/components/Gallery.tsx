import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryImages, type GalleryImage } from "@/lib/gallery";
import RevealOnScroll from "@/components/RevealOnScroll";

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getGalleryImages().then(setImages).catch(() => setImages([]));
  }, []);

  const hasImages = images.length > 0;
  const selected = hasImages ? images[currentIndex] : null;

  const goPrev = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Galeria
            </p>
            <h4 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Conocenos antes de visitarnos
            </h4>
          </div>
        </RevealOnScroll>

        {!hasImages && (
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto rounded-xl border-2 border-dashed border-primary/35 bg-card/70 p-10 text-center">
              <p className="text-foreground/80 text-base md:text-lg leading-8">
                Galeria vacia. Añade imagenes en src/content/gallery/images.ts
                y guarda los archivos en public/images/gallery.
              </p>
            </div>
          </RevealOnScroll>
        )}

        {hasImages && selected && (
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={selected.url}
                  alt={selected.alt}
                  className="w-full h-[260px] md:h-[420px] object-contain bg-background"
                  loading="lazy"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={goPrev}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-black/55 p-2 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.9)] hover:bg-black/70"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={goNext}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-black/55 p-2 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.9)] hover:bg-black/70"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              <div className="mt-2 text-right">
                <p className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
};

export default Gallery;
