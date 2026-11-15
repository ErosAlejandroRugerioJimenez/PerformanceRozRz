import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marcas from "./components/Marcas";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import GaleriaGeneral from "./components/GaleriaGeneral";
import Contacto from "./components/Contacto";
import Testimonios from "./components/Testimonios";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import QuoteLink from "./components/QuoteLink";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 400, once: true, offset: 45, disableMutationObserver: true });
    const initialSection = document.getElementById(window.location.hash.slice(1));
    if (initialSection) {
      initialSection.scrollIntoView();
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
    }

    function scrollToSection(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href^="#"]');
      const section = link && document.getElementById(link.hash.slice(1));
      if (!section) return;
      event.preventDefault();
      if (document.activeElement === link) {
        if (!section.hasAttribute("tabindex")) section.tabIndex = -1;
        section.focus({ preventScroll: true });
      }
      section.scrollIntoView();
    }

    document.addEventListener("click", scrollToSection);
    return () => document.removeEventListener("click", scrollToSection);
  }, []);

  return (
    <>
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="inicio" tabIndex={-1}>
        <Hero />
        <Marcas />
        <Servicios />
        <Testimonios />
        <Contacto />
        <Galeria />
        <GaleriaGeneral />
        <Faq />
      </main>
      <Footer />
      <QuoteLink className="floating-quote" aria-label="Cotizar por WhatsApp">
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </QuoteLink>
    </>
  );
}
