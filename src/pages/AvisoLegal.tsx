import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Aviso legal
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informacion general sobre el sitio web, condiciones de uso y
              responsabilidades.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Titularidad</h2>
              <p>
                Este sitio web es titularidad de Rouco Fisioterapia. El acceso y
                la navegacion por la web atribuyen la condicion de usuario e
                implican la aceptacion de las condiciones aqui recogidas.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Condiciones de uso</h2>
              <p>
                El usuario se compromete a hacer un uso diligente de los
                contenidos y a no utilizarlos con fines ilicitos o contrarios a
                la buena fe. Nos reservamos el derecho a actualizar o modificar
                los contenidos sin previo aviso.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Propiedad intelectual</h2>
              <p>
                Los textos, imagenes y elementos de este sitio son propiedad de
                Rouco Fisioterapia o de terceros autorizados. Queda prohibida su
                reproduccion sin autorizacion expresa.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Responsabilidad</h2>
              <p>
                La informacion publicada es de caracter informativo y no
                sustituye una valoracion profesional. Rouco Fisioterapia no se
                responsabiliza del uso que los usuarios puedan hacer de los
                contenidos.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AvisoLegal;
