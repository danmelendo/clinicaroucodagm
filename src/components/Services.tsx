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
  image?: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "Electropunción",
    desc: "Estimulación eléctrica para aliviar el dolor muscular.",
    href: "/servicios/electropuncion",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfwNOPxxPeX1G00mQCASwbKm5E4mEZXUj2Q&s",
  },
  {
    icon: Activity,
    title: "Kinesiotaping",
    desc: "Vendaje funcional para soporte y recuperación muscular.",
    href: "/servicios/kinesiotaping",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzqNfX_Fv3VoHVW_stxhDc1lZkyfWW_vPaQ&s"
  },
  {
    icon: Dumbbell,
    title: "Ejercicio Terapéutico",
    desc: "Programas de ejercicio para rehabilitación activa.",
    href: "/servicios/ejercicio-terapeutico",
    image: "https://clinicaigon.com/wp-content/uploads/2020/04/ejercicios-terapeuticos-fisioterapia.jpg",
  },
  {
    icon: Hand,
    title: "Terapia Manual",
    desc: "Técnicas manuales especializadas para tratar disfunciones.",
    href: "/servicios/terapia-manual",
    image: "https://www.clinicamayorantigua.com/wp-content/uploads/2025/01/TERAPIA-MANUAL.jpg",
  },
  {
    icon: Target,
    title: "Punción Seca",
    desc: "Tratamiento de puntos gatillo para aliviar contracturas.",
    href: "/servicios/puncion-seca",
    image: "https://fernandoarcofisioterapia.com/wp-content/uploads/2025/09/1.jpg",
  },
  {
    icon: Brain,
    title: "Neuromodulación",
    desc: "Modulación del sistema nervioso para el control del dolor.",
    href: "/servicios/neuromodulacion",
    image: "https://www.manuelcuencafisioterapia.com/wp-content/uploads/2021/09/02-Tratamientos-03-2.jpg",
  },
  {
    icon: BookOpen,
    title: "Educación Terapéutica",
    desc: "Aprende a gestionar tu dolor y prevenir recaídas.",
    href: "/servicios/educacion-terapeutica",
    image: "https://vitalclinic.es/wp-content/uploads/2024/04/fisioterapia-activa-736x414.jpg",
  },
  {
    icon: Waves,
    title: "EPTE",
    desc: "Electrólisis percutánea para tendinopatías.",
    href: "/servicios/epte",
    image: "https://davidgarciacatalina.es/wp-content/uploads/2018/10/Servicio-electrolisis-percutanea-terapeutica-en-clinica-ionclinics.jpg",
  },
  {
    icon: MonitorSpeaker,
    title: "Ecografía",
    desc: "Diagnóstico por imagen para un tratamiento preciso.",
    href: "/servicios/ecografia",
    image: "https://fisiobcn.eu/wp-content/uploads/2022/04/ECOGRAFIA-EN-FISIOTERAPIA-scaled.jpeg",
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
              <article className="group h-56 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 overflow-hidden rounded-xl border border-border shadow-sm [backface-visibility:hidden]">
                    {service.image ? (
                      <>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="relative z-10 h-full p-6 flex flex-col justify-end text-left">
                          <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-3">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-display text-lg font-semibold text-white">
                            {service.title}
                          </h3>
                        </div>
                      </>
                    ) : (
                      <div className="h-full w-full rounded-xl bg-card p-6 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    )}
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
