import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { getPostBySlug, type BlogPost as BlogPostModel } from "@/lib/blog";

// ---------------------------------------------------------------------------
// Markdown renderer (simple)
// ---------------------------------------------------------------------------
const boldify = (text: string) =>
  text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');

const renderMarkdown = (content: string) =>
  content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-display text-2xl font-bold text-foreground mt-8 mb-4"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line) => line.replace(/^- /, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: boldify(item) }} />
          ))}
        </ul>
      );
    }
    if (block.match(/^\d+\. /)) {
      const items = block.split("\n").map((line) => line.replace(/^\d+\. /, ""));
      return (
        <ol key={i} className="list-decimal pl-6 space-y-2 text-muted-foreground">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: boldify(item) }} />
          ))}
        </ol>
      );
    }
    return (
      <p
        key={i}
        className="text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: boldify(block) }}
      />
    );
  });

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
type LoadState = "loading" | "found" | "not_found";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostModel | null>(null);
  const [state, setState] = useState<LoadState>("loading");

  useEffect(() => {
    if (!slug) {
      setState("not_found");
      return;
    }

    let cancelled = false;
    setState("loading");

    (async () => {
      try {
        const found = await getPostBySlug(slug);
        if (cancelled) return;

        if (!found || !found.published) {
          setState("not_found");
        } else {
          setPost(found);
          setState("found");
        }
      } catch {
        if (!cancelled) setState("not_found");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // --- Cargando ---
  if (state === "loading") {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background">
          <div className="container max-w-3xl py-16 md:py-24">
            <p className="text-muted-foreground">Cargando artículo…</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // --- No encontrado: 404 real, sin redirección ---
  // Google verá el contenido de 404 en la URL correcta → no es soft 404.
  if (state === "not_found" || !post) {
    return <NotFound />;
  }

  // --- Post encontrado ---
  const isHtmlContent = post.contentFormat === "html";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Person", name: "David Rouco" },
    publisher: {
      "@type": "Organization",
      name: "Rouco Fisioterapia",
      url: "https://roucofisioterapia.es",
    },
    ...(post.featuredImage && { image: post.featuredImage }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <article className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-primary font-medium text-sm mb-8 hover:gap-2.5 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al blog
            </Link>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString("es-ES")}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              {post.title}
            </h1>
            {isHtmlContent ? (
              <div
                className="wp-content space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="space-y-4">{renderMarkdown(post.content)}</div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
