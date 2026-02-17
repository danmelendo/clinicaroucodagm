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
              Clínica de Fisioterapia en San Fernando de Henares
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm opacity-70">
            <span>Política de Cookies</span>
            <span>·</span>
            <span>Política de Privacidad</span>
            <span>·</span>
            <span>Aviso Legal</span>
          </div>
        </div>
        <div className="border-t border-primary/20 mt-8 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} roucofisioterapia.es · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
