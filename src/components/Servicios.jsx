import { ArrowUpRight, Bike, ScanLine, SprayCan, Wrench } from "lucide-react";
import QuoteLink from "./QuoteLink";

const services = [
  {
    title: "Mecánica diésel y gasolina",
    description:
      "Mantenimiento preventivo y correctivo, afinaciones mayores, ajuste de motores y servicios especializados.",
    image: "/disell.jpeg",
    icon: Wrench,
    quote: "un servicio de mecánica diésel o gasolina",
  },
  {
    title: "Hojalatería y pintura",
    description:
      "Reparación de colisiones, igualación de pintura por computadora y acabados para tu carrocería.",
    image: "/hojalateria.jpeg",
    icon: SprayCan,
    quote: "un trabajo de hojalatería y pintura",
  },
  {
    title: "Clínica de motos",
    description:
      "Afinación, frenos, sistema eléctrico y suspensión para scooters y motos de alto cilindraje.",
    image: "/motos.jpeg",
    icon: Bike,
    quote: "un servicio para mi moto",
  },
  {
    title: "Diagnóstico por escáner",
    description:
      "Detección de fallas electrónicas, revisión del Check Engine y reprogramación.",
    image: "/afinacion.jpeg",
    icon: ScanLine,
    quote: "un diagnóstico por escáner",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="service-section">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-white italic sm:text-4xl md:text-5xl">
          SERVICIOS DEL <span className="text-orange-400">TALLER</span>
        </h2>
        <div className="mx-auto h-1 w-20 rounded-full bg-orange-600 md:w-24" />
      </div>
      <div className="service-grid">
        {services.map(({ title, description, image, quote, icon: Icon }) => (
          <article key={title} className="service-card">
            <img src={image} alt="" loading="lazy" decoding="async" />
            <div className="service-content">
              <h3 className="flex items-center gap-3"><Icon size={22} className="shrink-0 text-orange-400" aria-hidden="true" />{title}</h3>
              <p>{description}</p>
              <QuoteLink
                service={quote}
                aria-label={`Cotizar ${title.toLowerCase()} por WhatsApp`}
              >
                <span className="inline-flex items-center gap-2">Cotizar servicio <ArrowUpRight size={17} aria-hidden="true" /></span>
              </QuoteLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
