import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getGalleryImages, type GalleryImage } from "@/lib/gallery";
import RevealOnScroll from "@/components/RevealOnScroll";

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setImages(getGalleryImages());

    const onStorage = () => setImages(getGalleryImages());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const hasImages = images.length > 0;
  const selected = openIndex !== null ? images[openIndex] : null;

  const goPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + images.length) % images.length);
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % images.length);
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Galería
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
                Esta galería está lista para recibir imágenes desde el panel de administración.
              </p>
            </div>
          </RevealOnScroll>
        )}

        {hasImages && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((image, index) => (
              <RevealOnScroll key={image.id} delayMs={Math.min(index * 60, 240)}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="group w-full overflow-hidden rounded-xl border border-border bg-card text-left"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{image.alt || "Imagen de la clínica"}</p>
                  </div>
                </button>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute top-5 right-5 text-white/90 hover:text-white"
            aria-label="Cerrar visualizador"
          >
            <X className="w-8 h-8" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 md:left-8 text-white/90 hover:text-white"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          )}

          <img
            src={selected.url}
            alt={selected.alt}
            className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 md:right-8 text-white/90 hover:text-white"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
