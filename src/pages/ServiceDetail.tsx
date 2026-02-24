import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { serviceBlockImagesBySlug, servicesBySlug } from "@/lib/services";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesBySlug[slug] : undefined;
  const blockImages = slug ? (serviceBlockImagesBySlug[slug] ?? []) : [];

  if (!service) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container max-w-4xl">
            <RevealOnScroll delayMs={0}>
              <p className="text-sm uppercase tracking-wider text-primary font-medium mb-3">Servicio</p>
            </RevealOnScroll>
            <RevealOnScroll delayMs={80}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delayMs={140}>
              <p className="text-foreground/85 leading-8 text-lg md:text-xl mb-8">
                {service.intro}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delayMs={200}>
              <a
                href="tel:604899279"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                {service.ctaLabel ?? "RESERVA TU CITA"}
              </a>
            </RevealOnScroll>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container max-w-4xl space-y-12">
            {service.sections.map((section, sectionIndex) => (
              <RevealOnScroll key={section.title} delayMs={Math.min(sectionIndex * 50, 250)}>
                {blockImages[sectionIndex]?.src ? (
                  <section className="grid gap-6 md:grid-cols-2 md:items-start">
                    <div className={sectionIndex % 2 === 0 ? "md:order-1" : "md:order-2"}>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {section.title}
                      </h2>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets && (
                        <ul className="list-disc pl-6 space-y-3 text-foreground/85 text-base md:text-lg leading-8">
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className={sectionIndex % 2 === 0 ? "md:order-2" : "md:order-1"}>
                      <div className="overflow-hidden rounded-xl border border-border bg-card">
                        <img
                          src={blockImages[sectionIndex].src}
                          alt={blockImages[sectionIndex].alt}
                          className="h-60 md:h-72 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </section>
                ) : (
                  <section>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="list-disc pl-6 space-y-3 text-foreground/85 text-base md:text-lg leading-8">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                )}
              </RevealOnScroll>
            ))}

            {service.faq.length > 0 && (
              <RevealOnScroll>
                <section>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Preguntas Frecuentes
                  </h2>
                  <Accordion type="single" collapsible className="w-full rounded-xl border border-border bg-card px-5 md:px-6">
                    {service.faq.map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`faq-${index + 1}`}
                        className={index === service.faq.length - 1 ? "border-b-0" : undefined}
                      >
                        <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </RevealOnScroll>
            )}

            <RevealOnScroll>
              <section className="pt-2">
                <Link
                  to="/#servicios"
                  className="inline-flex items-center rounded-lg border border-primary px-5 py-2.5 text-primary font-semibold hover:bg-primary/5 transition-colors"
                >
                  Volver a servicios
                </Link>
              </section>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
