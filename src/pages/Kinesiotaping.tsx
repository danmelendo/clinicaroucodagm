import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Kinesiotaping = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container max-w-4xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kinesiotaping
            </h1>
            <p className="text-foreground/85 leading-8 text-lg md:text-xl mb-8">
              El kinesiotaping es una técnica innovadora de vendaje terapéutico utilizada en fisioterapia para aliviar
              el dolor, mejorar la movilidad y prevenir lesiones. En Rouco Fisioterapia, empleamos el kinesiotaping como
              complemento ideal en nuestros tratamientos, ayudando a los pacientes de San Fernando de Henares, Coslada,
              Torrejón de Ardoz y otras localidades cercanas de Madrid a recuperar su bienestar.
            </p>
            <a
              href="tel:604899279"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              RESERVA TU CITA
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl space-y-12">
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Qué es el kinesiotaping?
              </h2>
              <p className="text-foreground/85 text-base md:text-lg leading-8">
                El kinesiotaping es una técnica innovadora de vendaje terapéutico utilizada en fisioterapia para aliviar
                el dolor, mejorar la movilidad y prevenir lesiones. En Rouco Fisioterapia, empleamos el kinesiotaping como
                complemento ideal en nuestros tratamientos, ayudando a los pacientes de San Fernando de Henares, Coslada,
                Torrejón de Ardoz y otras localidades cercanas de Madrid a recuperar su bienestar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Beneficios del kinesiotaping
              </h2>
              <p className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
                El kinesiotaping ofrece múltiples beneficios terapéuticos, tanto en el tratamiento como en la prevención de lesiones:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-foreground/85 text-base md:text-lg leading-8">
                <li>Alivio del dolor: Reduce la presión sobre los receptores del dolor, proporcionando un alivio inmediato.</li>
                <li>Mejora de la circulación: Facilita el drenaje linfático y la eliminación de líquidos acumulados.</li>
                <li>Estabilización muscular y articular: Ofrece soporte sin limitar el rango de movimiento.</li>
                <li>Reducción de la inflamación: Ideal para tratar edemas y hematomas.</li>
                <li>Prevención de lesiones: Protege músculos y articulaciones durante actividades deportivas o diarias.</li>
                <li>Corrección postural: Ayuda a mejorar la alineación corporal, reduciendo tensiones innecesarias.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Qué dolencias tratamos con kinesiotaping?
              </h2>
              <p className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
                En Rouco Fisioterapia, utilizamos el kinesiotaping para tratar una amplia variedad de dolencias, entre ellas:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-foreground/85 text-base md:text-lg leading-8">
                <li>Lesiones deportivas: Esguinces, roturas fibrilares y sobrecargas musculares.</li>
                <li>Dolores de espalda y cuello: Alivio de tensiones musculares y contracturas.</li>
                <li>Edemas y hematomas: Mejora del drenaje linfático tras traumatismos.</li>
                <li>Tendinitis y fascitis plantar: Reducción de la inflamación y alivio del dolor.</li>
                <li>Problemas posturales: Corrección de desequilibrios musculares y mejora de la postura corporal.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                ¿Cómo se realiza un tratamiento con kinesiotaping?
              </h2>
              <p className="text-foreground/85 text-base md:text-lg leading-8 mb-4">
                El proceso comienza con una evaluación personalizada para identificar las áreas afectadas y las necesidades
                específicas del paciente. Luego, el fisioterapeuta aplica las cintas siguiendo técnicas específicas que pueden
                variar según el objetivo del tratamiento:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-foreground/85 text-base md:text-lg leading-8 mb-4">
                <li>Aplicación de alivio muscular: Para reducir la tensión y mejorar la flexibilidad.</li>
                <li>Soporte articular: Para estabilizar las articulaciones y prevenir lesiones.</li>
                <li>Drenaje linfático: Para facilitar la eliminación de líquidos acumulados.</li>
                <li>Corrección postural: Para realinear el cuerpo y mejorar la postura.</li>
              </ul>
              <p className="text-foreground/85 text-base md:text-lg leading-8">
                El kinesiotaping puede mantenerse en la piel durante varios días, permitiendo que el paciente continúe con sus
                actividades cotidianas o deportivas. Además, esta técnica se complementa con otras terapias, como ejercicio
                terapéutico, terapia manual o punción seca, para obtener resultados óptimos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Recupera tu bienestar con kinesiotaping en Rouco Fisioterapia
              </h2>
              <p className="text-foreground/85 text-base md:text-lg leading-8 mb-6">
                En Rouco Fisioterapia, combinamos las técnicas más avanzadas para ayudarte a alcanzar tus objetivos de salud.
                Contacta con nosotros y descubre cómo el kinesiotaping puede marcar la diferencia en tu recuperación.
              </p>
              <a
                href="tel:604899279"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Contacto
              </a>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <Accordion type="single" collapsible className="w-full rounded-xl border border-border bg-card px-5 md:px-6">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                    ¿Es doloroso el kinesiotaping?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                    No, su aplicación no suele ser dolorosa y está diseñada para mejorar el confort del paciente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                    ¿Cuánto tiempo se puede llevar el kinesiotaping?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                    Normalmente varios días, según la zona tratada y la indicación del fisioterapeuta.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                    ¿Quién puede beneficiarse del kinesiotaping?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                    Personas con dolor muscular o articular, deportistas y pacientes en procesos de recuperación funcional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                    ¿El kinesiotaping sustituye otros tratamientos?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                    No, normalmente se utiliza como complemento dentro de un plan terapéutico personalizado.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5" className="border-b-0">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground">
                    ¿Es seguro usar kinesiotaping durante el embarazo?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/85 text-base md:text-lg leading-8">
                    Sí, siempre que sea aplicado por un fisioterapeuta cualificado y adaptado a las necesidades de la paciente.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Kinesiotaping;
