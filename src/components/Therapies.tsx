const Therapies = () => {
  return (
    <section id="terapias" className="py-20 md:py-28 bg-warm-light">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
            Terapias
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Nuestros tratamientos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <article className="rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-2xl">🩺</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Sesiones de Fisioterapia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              En Rouco Fisioterapia, entendemos que cada cuerpo es único y que el bienestar
              no es solo la ausencia de dolor, sino un equilibrio entre salud física y
              emocional. Nuestras sesiones están diseñadas para ofrecerte un tratamiento
              personalizado que se adapte a tus necesidades específicas.
            </p>
          </article>
          <article className="rounded-xl bg-card border border-border p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Clases grupales de Pilates
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestras clases de Pilates están diseñadas para mejorar tu fuerza, flexibilidad
              y postura, mientras cultivas una conexión más profunda con tu cuerpo. Mediante
              movimientos controlados y técnicas de respiración, trabajamos desde el núcleo
              fortaleciendo los músculos estabilizadores.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Therapies;
