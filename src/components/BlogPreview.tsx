import { ArrowRight } from "lucide-react";

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-warm-light">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Blog
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Últimos artículos
          </h2>
        </div>
        <article className="max-w-3xl mx-auto rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-shadow">
          <p className="text-xs text-muted-foreground mb-3">26/05/2025 · Terapias</p>
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            Fisioterapia deportiva en San Fernando de Henares: cómo prevenir y tratar lesiones
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            El deporte es salud, pero también exige al cuerpo un esfuerzo físico constante.
            Ya seas deportista amateur, profesional o simplemente alguien que entrena
            regularmente, es probable que en algún momento hayas sufrido una lesión...
          </p>
          <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all cursor-pointer">
            Leer más <ArrowRight className="w-4 h-4" />
          </span>
        </article>
      </div>
    </section>
  );
};

export default BlogPreview;
