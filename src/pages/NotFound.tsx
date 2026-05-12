import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Señal para el hosting: esta ruta no existe.
    // Con pre-rendering / SSR esto se convierte en un HTTP 404 real.
    document.title = "404 – Página no encontrada | Rouco Fisioterapia";
    console.error("404: ruta no encontrada →", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center bg-background">
        <div className="text-center px-4">
          <p className="text-sm uppercase tracking-wider text-primary font-medium mb-3">
            Error 404
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Página no encontrada
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            La página que buscas no existe o ha sido eliminada.
          </p>
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
