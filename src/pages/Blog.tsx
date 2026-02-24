import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedPosts, type BlogPost } from "@/lib/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getPublishedPosts().then(setPosts).catch(() => setPosts([]));
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog de Fisioterapia
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Articulos sobre salud, terapias y bienestar escritos por nuestros
              fisioterapeutas especializados en San Fernando de Henares.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            {posts.length === 0 && (
              <p className="text-center text-muted-foreground">
                No hay articulos publicados aun.
              </p>
            )}
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("es-ES")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Leer mas <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
