const phone = "5212463326807";

export function quoteUrl(service) {
  const request = service
    ? `me gustaría cotizar ${service}.`
    : "me gustaría cotizar un servicio para mi vehículo.";
  const message = `¡Hola, PerformanceRozRz! Vi tu página oficial y ${request}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function QuoteLink({ service, children, ...props }) {
  return (
    <a
      {...props}
      href={quoteUrl(service)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
