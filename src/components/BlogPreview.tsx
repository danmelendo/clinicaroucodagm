import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getPublishedPosts, type BlogPost } from "@/lib/blog";

const BlogPreview = () => {
  const [latest, setLatest] = useState<BlogPost | null>(null);

  useEffect(() => {
    getPublishedPosts()
      .then((posts) => setLatest(posts[0] || null))
      .catch(() => setLatest(null));
  }, []);

  if (!latest) return null;

  return (
    <section id="blog" className="py-20 md:py-28 bg-warm-light">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Blog
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Ultimos articulos
          </h2>
        </div>
        <article className="max-w-3xl mx-auto rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-shadow">
          <p className="text-xs text-muted-foreground mb-3">
            {new Date(latest.date).toLocaleDateString("es-ES")} · {latest.category}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            {latest.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {latest.excerpt}
          </p>
          <Link
            to={`/blog/${latest.slug}`}
            className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all"
          >
            Leer mas <ArrowRight className="w-4 h-4" />
          </Link>
        </article>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:gap-3 transition-all"
          >
            Ver todos los articulos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
