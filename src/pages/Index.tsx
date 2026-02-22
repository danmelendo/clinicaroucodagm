import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Therapies from "@/components/Therapies";
import Gallery from "@/components/Gallery";
import SobreNosotros from "@/components/SobreNosotros";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: "Rouco Fisioterapia",
  description:
    "Clínica de fisioterapia especializada en tratamiento del dolor en San Fernando de Henares, Madrid.",
  telephone: "+34604899279",
  email: "info@roucofisioterapia.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Fernando de Henares",
    addressRegion: "Madrid",
    addressCountry: "ES",
  },
  url: "https://roucofisioterapia.es",
};

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
  }, [hash]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Therapies />
        <Gallery />
        <SobreNosotros />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
