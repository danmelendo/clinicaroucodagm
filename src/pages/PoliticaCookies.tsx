import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24 bg-warm-light">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Politica de cookies
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Informacion sobre el uso de cookies en este sitio web.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Que son las cookies</h2>
              <p>
                Las cookies son pequenos archivos que se almacenan en tu
                navegador y permiten recordar informacion sobre tu visita.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Tipos de cookies</h2>
              <p>
                Utilizamos cookies tecnicas necesarias para el funcionamiento del
                sitio y cookies de analitica para medir el uso y mejorar el
                contenido.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-foreground">Gestion y configuracion</h2>
              <p>
                Puedes aceptar, rechazar o configurar las cookies desde tu
                navegador en cualquier momento. La desactivacion puede afectar
                a algunas funcionalidades del sitio.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaCookies;
