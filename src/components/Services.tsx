import {
  Zap, Activity, Dumbbell, Hand, Target, Brain, BookOpen, Waves, MonitorSpeaker,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ComponentType } from "react";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "Electropunción",
    desc: "Estimulación eléctrica para aliviar el dolor muscular.",
    href: "/servicios/electropuncion",
  },
  {
    icon: Activity,
    title: "Kinesiotaping",
    desc: "Vendaje funcional para soporte y recuperación muscular.",
    href: "/servicios/kinesiotaping",
  },
  {
    icon: Dumbbell,
    title: "Ejercicio Terapéutico",
    desc: "Programas de ejercicio para rehabilitación activa.",
    href: "/servicios/ejercicio-terapeutico",
  },
  {
    icon: Hand,
    title: "Terapia Manual",
    desc: "Técnicas manuales especializadas para tratar disfunciones.",
    href: "/servicios/terapia-manual",
  },
  {
    icon: Target,
    title: "Punción Seca",
    desc: "Tratamiento de puntos gatillo para aliviar contracturas.",
    href: "/servicios/puncion-seca",
  },
  {
    icon: Brain,
    title: "Neuromodulación",
    desc: "Modulación del sistema nervioso para el control del dolor.",
    href: "/servicios/neuromodulacion",
  },
  {
    icon: BookOpen,
    title: "Educación Terapéutica",
    desc: "Aprende a gestionar tu dolor y prevenir recaídas.",
    href: "/servicios/educacion-terapeutica",
  },
  {
    icon: Waves,
    title: "EPTE",
    desc: "Electrólisis percutánea para tendinopatías.",
    href: "/servicios/epte",
  },
  {
    icon: MonitorSpeaker,
    title: "Ecografía",
    desc: "Diagnóstico por imagen para un tratamiento preciso.",
    href: "/servicios/ecografia",
  },
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
            <Link
              key={service.title}
              to={service.href}
              className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <article className="group h-52 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 rounded-xl bg-card border border-border p-6 shadow-sm [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-card border border-primary/30 p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
