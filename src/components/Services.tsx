import {
  Zap, Activity, Dumbbell, Hand, Target, Brain, BookOpen, Waves, MonitorSpeaker,
} from "lucide-react";

const services = [
  { icon: Zap, title: "Electropunción", desc: "Estimulación eléctrica para aliviar el dolor muscular." },
  { icon: Activity, title: "Kinesiotaping", desc: "Vendaje funcional para soporte y recuperación muscular." },
  { icon: Dumbbell, title: "Ejercicio Terapéutico", desc: "Programas de ejercicio para rehabilitación activa." },
  { icon: Hand, title: "Terapia Manual", desc: "Técnicas manuales especializadas para tratar disfunciones." },
  { icon: Target, title: "Punción Seca", desc: "Tratamiento de puntos gatillo para aliviar contracturas." },
  { icon: Brain, title: "Neuromodulación", desc: "Modulación del sistema nervioso para el control del dolor." },
  { icon: BookOpen, title: "Educación Terapéutica", desc: "Aprende a gestionar tu dolor y prevenir recaídas." },
  { icon: Waves, title: "EPTE", desc: "Electrólisis percutánea para tendinopatías." },
  { icon: MonitorSpeaker, title: "Ecografía", desc: "Diagnóstico por imagen para un tratamiento preciso." },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            ¿Qué ofrecemos?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Servicios de Fisioterapia
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
