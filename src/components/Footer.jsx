import { ArrowUp, ArrowUpRight, Clock, MapPin, MessageCircle } from "lucide-react";
import QuoteLink from "./QuoteLink";

const links = [
  ["servicios", "Servicios del taller"],
  ["testimonios", "Opiniones"],
  ["galeria", "Galería de trabajos"],
  ["faq", "Preguntas frecuentes"],
];

export default function Footer() {
  return (
    <footer className="border-t border-orange-400/25 bg-linear-to-b from-zinc-900 to-zinc-950 pb-6 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-x-10 gap-y-9 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_1.15fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img src="/logoo.png" alt="" loading="lazy" className="h-11 w-auto" />
              <span className="text-xl font-black tracking-tight text-white">
                Performance<span className="text-orange-400">RozRz</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Taller automotriz en Tlaxcala.
            </p>
            <QuoteLink className="button-primary mt-5 inline-flex min-h-11 gap-2 text-sm">
              <MessageCircle size={18} aria-hidden="true" /> Cotizar por WhatsApp
            </QuoteLink>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <h2 className="mb-3 text-sm font-bold text-white">Explora el sitio</h2>
            <ul className="grid gap-1 text-sm text-zinc-300">
              {links.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-flex min-h-10 items-center gap-2 hover:text-orange-300 focus-visible:text-orange-300">
                    {label}
                    <ArrowUpRight size={14} aria-hidden="true" className="text-orange-400" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-location">
            <h2 id="footer-location" className="mb-4 text-sm font-bold text-white">Visítanos</h2>
            <address className="flex gap-3 text-sm leading-relaxed text-zinc-300 not-italic">
              <MapPin size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-orange-400" />
              <span>C. Cuahutémoc 254, Santa Cruz Matlacahuacan, San Francisco Tetlanohcan, Tlaxcala.</span>
            </address>
            <p className="mt-4 flex gap-3 text-sm leading-relaxed text-zinc-300">
              <Clock size={19} aria-hidden="true" className="mt-0.5 shrink-0 text-orange-400" />
              <span>Lun a vie · 9:00 a. m. a 6:00 p. m.<br />Sáb · 9:00 a. m. a 2:00 p. m.</span>
            </p>
            <a href="#contacto" className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-300 hover:underline">
              Ver ubicación <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </section>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-xs text-zinc-400">
          <p className="font-serif text-sm italic text-zinc-300">
            Desarrollado por{" "}
            <span className="font-semibold not-italic text-orange-200">Biglat Technologies</span>
          </p>
          <a href="#inicio" className="inline-flex min-h-11 items-center gap-2 font-semibold text-zinc-200 hover:text-orange-300">
            Volver arriba <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
