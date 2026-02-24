import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, type BlogPost as BlogPostModel } from "@/lib/blog";

const renderMarkdown = (content: string) => {
  return content.split("\n\n").map((block, i) => {
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
};

const boldify = (text: string) =>
  text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostModel | undefined>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!slug) {
      setLoaded(true);
      return;
    }

    getPostBySlug(slug)
      .then(setPost)
      .finally(() => setLoaded(true));
  }, [slug]);

  if (!loaded) return null;
  if (!post || !post.published) return <Navigate to="/blog" replace />;

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
            <div className="space-y-4">{renderMarkdown(post.content)}</div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
