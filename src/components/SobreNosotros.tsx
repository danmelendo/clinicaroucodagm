import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const credentialsImages = [
  { src: "/images/gallery/Grado.jpg", alt: "Titulo de Grado en Fisioterapia" },
  { src: "/images/gallery/Master.jpg", alt: "Titulo de Master en Fisioterapia" },
  { src: "/images/gallery/Diploma1.jpg", alt: "Diploma 1" },
  { src: "/images/gallery/Diploma2.jpg", alt: "Diploma 2" },
  { src: "/images/gallery/Diploma3.jpg", alt: "Diploma 3" },
  { src: "/images/gallery/Diploma4.jpg", alt: "Diploma 4" },
  { src: "/images/gallery/Diploma5.jpg", alt: "Diploma 5" },
];

const SobreNosotros = () => {
  const [credentialIndex, setCredentialIndex] = useState(0);
  const selectedCredential = credentialsImages[credentialIndex];

  const goPrevCredential = () => {
    setCredentialIndex((prev) => (prev - 1 + credentialsImages.length) % credentialsImages.length);
  };

  const goNextCredential = () => {
    setCredentialIndex((prev) => (prev + 1) % credentialsImages.length);
  };

  return (
    <section id="sobre-nosotros" className="py-20 md:py-28 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ¿Quiénes Somos?
          </h2>
        </div>

        <div className="space-y-10">
          <article className="rounded-xl bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Nuestra Historia
            </h3>
            <p className="text-primary/90 text-sm uppercase tracking-wider font-medium mb-5">
              Fisioterapia en San Fernando de Henares
            </p>
            <p className="text-foreground/85 text-base md:text-lg leading-8 md:leading-9">
              En Rouco Fisioterapia, somos un equipo apasionado por la fisioterapia y comprometido con mejorar la calidad de vida de nuestros pacientes. Nos basamos en una atención personalizada, combinando experiencia, formación continua y un trato cercano.
            </p>
          </article>

          <article className="rounded-xl bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/85 text-base md:text-lg leading-8">
              <li>Ubicación céntrica en San Fernando de Henares.</li>
              <li>Fisioterapeutas titulados y con amplia experiencia.</li>
              <li>Tratamientos manuales, tecnología avanzada y atención individualizada.</li>
              <li>Más de 6 años de experiencia en el sector.</li>
            </ul>
          </article>

          <article className="rounded-xl bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Tratamientos que ofrecemos</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/85 text-base md:text-lg leading-8">
              <li>Fisioterapia traumatológica y deportiva.</li>
              <li>Rehabilitación postoperatoria.</li>
              <li>Terapia manual y masajes terapéuticos.</li>
              <li>Punción seca y EPTE (Electrólisis Percutánea Terapéutica).</li>
              <li>Ecografía musculoesquelética para evaluación y seguimiento.</li>
              <li>Dolor de espalda, cervicalgias, ciáticas y más.</li>
            </ul>
          </article>

          <article className="rounded-xl bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              ¿Vives en San Fernando de Henares y necesitas fisioterapia?
            </h3>
            <p className="text-foreground/85 text-base md:text-lg leading-8 mb-3">
              Estamos aquí para ayudarte. Ya sea que sufras una lesión deportiva, una contractura muscular o un problema crónico, diseñaremos un plan de tratamiento a tu medida.
            </p>
            <p className="text-primary font-semibold text-base md:text-lg leading-8">
              Primera consulta + valoración gratuita.
            </p>
          </article>

          <article className="rounded-xl bg-card border border-border p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Graduados en Fisioterapia</h3>
            <div className="rounded-xl border border-border bg-background/70 p-4 md:p-5 mb-6">
              <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={selectedCredential.src}
                  alt={selectedCredential.alt}
                  className="w-full h-[260px] md:h-[420px] object-contain bg-background"
                  loading="lazy"
                />
                {credentialsImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={goPrevCredential}
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-black/55 p-2 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.9)] hover:bg-black/70"
                      aria-label="Titulo anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={goNextCredential}
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-black/55 p-2 text-white shadow-[0_0_0_1px_rgba(0,0,0,0.9)] hover:bg-black/70"
                      aria-label="Titulo siguiente"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              <div className="mt-2 text-right">
                <p className="text-sm text-muted-foreground">
                  {credentialIndex + 1} / {credentialsImages.length}
                </p>
              </div>
            </div>
            <h4 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hablemos de ti</h4>
            <p className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
              Cuéntanos cuál es tu problema o lesión, y te diremos lo que podemos hacer por ti, sólo haz clic aquí.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Empieza tu recuperación hoy mismo
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
