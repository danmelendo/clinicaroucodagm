import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-warm-dark text-warm-light py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-xl font-bold">
              Rouco<span className="text-primary">Fisioterapia</span>
            </p>
            <p className="text-sm opacity-70 mt-1">
              Clinica de Fisioterapia en San Fernando de Henares
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-70">
            <Link to="/politica-cookies" className="hover:text-warm-light transition-colors">
              Politica de Cookies
            </Link>
            <span>&middot;</span>
            <Link to="/politica-privacidad" className="hover:text-warm-light transition-colors">
              Politica de Privacidad
            </Link>
            <span>&middot;</span>
            <Link to="/aviso-legal" className="hover:text-warm-light transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-xs opacity-50">
          (c) {new Date().getFullYear()} roucofisioterapia.es &middot; Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
