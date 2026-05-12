import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politica de privacidad
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tratamiento de datos personales y derechos de los usuarios.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Responsable</h2>
              <p>
                El responsable del tratamiento es Rouco Fisioterapia. Los datos
                se tratan de forma confidencial y conforme a la normativa vigente.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Finalidad</h2>
              <p>
                La finalidad del tratamiento es gestionar consultas, citas y
                comunicaciones relacionadas con nuestros servicios.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Legitimacion</h2>
              <p>
                La base legal es el consentimiento del usuario y, en su caso, la
                relacion contractual derivada de la prestacion de servicios.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Conservacion</h2>
              <p>
                Los datos se conservaran el tiempo necesario para cumplir con la
                finalidad para la que fueron recabados y las obligaciones legales.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Derechos</h2>
              <p>
                Puedes ejercer tus derechos de acceso, rectificacion, supresion,
                oposicion, limitacion y portabilidad mediante solicitud al titular.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidad;
