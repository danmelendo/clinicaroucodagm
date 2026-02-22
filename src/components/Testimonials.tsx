import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tenía un problemita en el cuello, mi amigo David terminó la sesión conmigo, me acaba de dejar hecho un rey. Cualquier cosa que queráis: David en Madrid, muy bueno!",
    name: "Kidd Keo",
    role: "Cantante de trap",
  },
  {
    quote: "Un trato excelente y resultados en el momento. Totalmente recomendable.",
    name: "Almudena",
    role: "Paciente",
  },
  {
    quote:
      "Tenía la espalda como un señor de 80 años. Así que ya sabéis, si necesitáis una buena clínica.",
    name: "Delantero09",
    role: "Creador de contenido",
  },
  {
    quote:
      "Me dolía mucho el cuello y en Rouco Fisioterapia me han dejado como nuevo, estoy super cómodo en sus sesiones. La mejor clínica.",
    name: "José Miguel",
    role: "Ingeniero Informático",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            No lo decimos nosotros
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Lo dicen nuestros pacientes
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-xl bg-card border border-border p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                «{t.quote}»
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
