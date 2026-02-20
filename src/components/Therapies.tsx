import RevealOnScroll from "@/components/RevealOnScroll";

const clinicAreas = [
  {
    title: "Recepción",
    text: "Al entrar en RoucoFisioterapia, te recibimos en un espacio diseñado para ofrecerte comodidad y confianza desde el primer momento. Nuestra recepción está atendida por un equipo amable y profesional, listo para ayudarte con tus citas, resolver tus dudas y asegurarte una experiencia acogedora en cada visita. Aquí encontrarás un ambiente tranquilo y organizado, ideal para que te sientas cómodo desde el primer momento.",
    photoPlaceholder: "Espacio reservado para fotos de Recepción",
  },
  {
    title: "Salas de Tratamiento",
    text: "Contamos con varias salas de tratamiento completamente equipadas con camillas de alta calidad y el material necesario para realizar terapias efectivas y personalizadas. Cada sala ofrece privacidad y confort para que nuestros pacientes reciban una atención óptima y enfocada en sus necesidades. Nuestro equipo utiliza técnicas avanzadas y adaptadas a cada caso, siempre con el objetivo de mejorar tu bienestar.",
    photoPlaceholder: "Espacio reservado para fotos de Salas de Tratamiento",
  },
  {
    title: "Baño Accesible",
    text: "RoucoFisioterapia dispone de un baño diseñado para cumplir con todas las normativas de accesibilidad, asegurando comodidad y seguridad para todos nuestros pacientes. Espacioso, limpio y bien equipado, el baño está adaptado para personas con movilidad reducida y pensado para cubrir cualquier necesidad que puedan tener durante su estancia.",
    photoPlaceholder: "Espacio reservado para fotos de Baño Accesible",
  },
  {
    title: "Sala de Pilates y Gimnasio",
    text: "En RoucoFisioterapia, ofrecemos una sala de gimnasio diseñada para la práctica de pilates y ejercicios de rehabilitación. Con capacidad para hasta 10 personas, la sala está equipada con todo el material necesario: colchonetas, pelotas, bandas elásticas y otros elementos específicos para las sesiones. Este espacio permite a nuestros pacientes realizar ejercicios guiados en un ambiente seguro y funcional, ideal para fortalecer su salud y bienestar.",
    photoPlaceholder: "Espacio reservado para fotos de la Sala de Pilates y Gimnasio",
  },
];

const Therapies = () => {
  return (
    <section id="clinica" className="py-20 md:py-28 bg-warm-light">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Clínica
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Nuestras instalaciones
            </h2>
          </div>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto space-y-10">
          {clinicAreas.map((area, index) => (
            <RevealOnScroll key={area.title} from={index % 2 === 0 ? "left" : "right"}>
              <article className="rounded-xl bg-card border border-border p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.text}
                </p>
                <div className="rounded-xl border-2 border-dashed border-primary/35 bg-background/70 p-6 text-center">
                  <p className="text-foreground/80 font-medium">{area.photoPlaceholder}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapies;
