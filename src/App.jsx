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
    const loader = document.getElementById("site-loader");
    if (!loader) return;

    let removalTimer;
    let disposed = false;
    const dismiss = () => {
      if (disposed || loader.hasAttribute("data-ready")) return;
      loader.setAttribute("data-ready", "");
      loader.setAttribute("aria-hidden", "true");
      removalTimer = window.setTimeout(() => loader.remove(), 220);
    };

    const poster = new Image();
    poster.src = "/previews/mecanica.webp";
    poster.decode().then(dismiss, dismiss);
    return () => {
      disposed = true;
      window.clearTimeout(removalTimer);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 400, once: true, offset: 45, disableMutationObserver: true });
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
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
