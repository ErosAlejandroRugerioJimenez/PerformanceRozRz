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
import QuoteLink from "./components/QuoteLink";

export default function App() {
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
      <footer className="border-t border-zinc-800 px-5 py-7 text-center text-sm text-zinc-400">
        <p>PerformanceRozRz · San Francisco Tetlanohcan, Tlaxcala</p>
        <p className="mt-2 text-xs">© 2026 Biglat Technologies</p>
      </footer>
      <QuoteLink className="floating-quote" aria-label="Cotizar por WhatsApp">
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </QuoteLink>
    </>
  );
}
