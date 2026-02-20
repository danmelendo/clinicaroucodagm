import { Phone } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-warm-light">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber/10" />
      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll delayMs={0}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
              Clínica de Fisioterapia en San Fernando de Henares
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Especialistas en el <span className="text-primary">tratamiento del dolor</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delayMs={140}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Con más de 5 años de experiencia, te ayudamos a mejorar tu calidad de vida
              mediante un enfoque personalizado y basado en evidencia. Recupera tu bienestar
              y vuelve a disfrutar de tus actividades sin dolor.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:604899279"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-accent transition-all"
              >
                <Phone className="w-5 h-5" />
                Pide cita
              </a>
              <a
                href="/#servicios"
                className="inline-flex items-center rounded-lg border-2 border-primary px-8 py-4 text-primary font-semibold text-lg hover:bg-primary/5 transition-all"
              >
                Nuestros servicios
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
