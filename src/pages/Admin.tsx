import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const postTemplate = `{
  id: "dolor-lumbar",
  title: "Dolor lumbar: causas y tratamiento fisioterapeutico",
  slug: "dolor-lumbar-causas-tratamiento-fisioterapeutico",
  excerpt: "Resumen breve del articulo...",
  content: "Contenido en markdown basico...",
  category: "Consejos",
  date: "2026-02-24",
  metaDescription: "Descripcion SEO corta del articulo.",
  published: true,
}`;

const galleryTemplate = `{ id: "sala-principal", url: "/images/gallery/sala-principal.jpg", alt: "Sala principal de la clinica" }`;

const Admin = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background py-16">
        <div className="container max-w-4xl space-y-8">
          <header className="space-y-3">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Gestion local de contenido
            </h1>
            <p className="text-muted-foreground">
              Este proyecto usa un CMS local basado en archivos del repositorio.
              Es la base para migrar luego a backend manteniendo la misma capa de acceso.
            </p>
          </header>

          <section className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Añadir articulos del blog
            </h2>
            <p className="text-sm text-muted-foreground">
              Edita <code>src/content/blog/posts.ts</code> y añade un objeto al array
              <code> localBlogPosts</code>.
            </p>
            <pre className="rounded-lg bg-background border border-border p-4 text-xs overflow-x-auto">
              <code>{postTemplate}</code>
            </pre>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Añadir imagenes a la galeria
            </h2>
            <p className="text-sm text-muted-foreground">
              1) Copia las imagenes en <code>public/images/gallery</code>.
            </p>
            <p className="text-sm text-muted-foreground">
              2) Registra cada imagen en <code>src/content/gallery/images.ts</code>.
            </p>
            <pre className="rounded-lg bg-background border border-border p-4 text-xs overflow-x-auto">
              <code>{galleryTemplate}</code>
            </pre>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 space-y-2">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Escalable a backend
            </h2>
            <p className="text-sm text-muted-foreground">
              La app ya consume contenido desde <code>src/lib/blog.ts</code> y
              <code> src/lib/gallery.ts</code> mediante repositorios asíncronos.
              Para migrar a backend solo hay que reemplazar la implementación local
              por llamadas HTTP.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Admin;
