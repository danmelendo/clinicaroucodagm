import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Contacto
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu bienestar es nuestra prioridad
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Valoramos la atención individualizada, el uso de técnicas avanzadas y la
              calidez humana en cada sesión. Te acompañamos en cada paso hacia una
              recuperación completa y sostenible.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="tel:604899279"
              className="flex flex-col items-center gap-3 rounded-xl bg-card border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Teléfono</h3>
              <p className="text-sm text-muted-foreground">604 899 279</p>
            </a>
            <a
              href="mailto:info@roucofisioterapia.es"
              className="flex flex-col items-center gap-3 rounded-xl bg-card border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground">info@roucofisioterapia.es</p>
            </a>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-card border border-border p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Ubicación</h3>
              <p className="text-sm text-muted-foreground">San Fernando de Henares, Madrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
