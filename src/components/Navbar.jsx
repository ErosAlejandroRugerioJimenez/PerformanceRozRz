import {
  Camera, CircleHelp, Images, MapPin, Menu, MessageCircle,
  Star, Wrench, X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import QuoteLink from "./QuoteLink";

const links = [
  { id: "servicios", label: "Servicios", icon: Wrench },
  { id: "testimonios", label: "Opiniones", icon: Star },
  { id: "contacto", label: "Contacto", icon: MapPin },
  { id: "galeria", label: "Galería", icon: Camera },
  { id: "galeria-general", label: "Más trabajos", icon: Images },
  { id: "faq", label: "Preguntas", icon: CircleHelp },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id));
    let frame = 0;

    function updateActiveSection() {
      frame = 0;
      const threshold = (header.current?.offsetHeight ?? 0) + 32;
      const visible = sections.findLast(
        (section) => section && section.getBoundingClientRect().top <= threshold,
      );
      setActive(visible?.id ?? "inicio");
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(updateActiveSection);
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 64rem)");

    function closeOutside(event) {
      if (!header.current?.contains(event.target)) setOpen(false);
    }

    function closeOnDesktop(event) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function handleKeyDown(event) {
    if (open && event.key === "Escape") {
      setOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <header ref={header} className="site-header" onKeyDown={handleKeyDown}>
      <div className="header-row">
        <a href="#inicio" onClick={() => setOpen(false)} className="header-brand" aria-label="PerformanceRozRz, inicio">
          <img src="/logoo.png" alt="" className="h-9 w-auto max-w-full object-contain sm:h-10" />
        </a>

        <nav aria-label="Navegación principal" className="desktop-nav hidden lg:flex">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <QuoteLink className="header-quote" aria-label="Cotizar por WhatsApp">
            <MessageCircle size={18} aria-hidden="true" />
            Cotizar
          </QuoteLink>
          <button
            ref={toggle}
            type="button"
            className="header-toggle inline-grid place-items-center lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Navegación móvil" hidden={!open} className="mobile-nav lg:hidden">
        <ul className="grid grid-cols-2 gap-2">
          {links.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? "location" : undefined}>
                <Icon size={19} aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
