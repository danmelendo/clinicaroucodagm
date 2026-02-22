import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Clínica", href: "/#clinica" },
  { label: "Galería", href: "/#galeria" },
  { label: "Sobre nosotros", href: "/#sobre-nosotros" },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="hidden md:flex items-center justify-center gap-6 py-2 bg-primary text-primary-foreground text-sm">
        <a href="tel:604899279" className="flex items-center gap-1.5 hover:underline">
          <Phone className="w-3.5 h-3.5" /> 604 899 279
        </a>
        <a href="mailto:info@roucofisioterapia.es" className="flex items-center gap-1.5 hover:underline">
          <Mail className="w-3.5 h-3.5" /> info@roucofisioterapia.es
        </a>
        <a
          href="https://instagram.com/roucofisioterapia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline"
        >
          <Instagram className="w-3.5 h-3.5" /> @roucofisioterapia
        </a>
      </div>
      <nav className="container flex items-center justify-between py-4">
        <a href="/#inicio" className="font-display text-2xl font-bold text-foreground">
          Rouco<span className="text-primary">Fisioterapia</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isRoute ? (
                <Link to={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link to={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-2 border-t border-border">
              <a href="tel:604899279" className="flex items-center gap-2 py-2 text-sm text-primary font-medium">
                <Phone className="w-4 h-4" /> 604 899 279
              </a>
              <a
                href="https://instagram.com/roucofisioterapia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-sm text-primary font-medium"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
