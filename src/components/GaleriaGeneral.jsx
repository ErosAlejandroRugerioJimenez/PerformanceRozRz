import GalleryVideo from "./GalleryVideo";

export default function GaleriaGeneral() {
  return (
    <section
      id="galeria-general"
      className="py-16 md:py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <h2 className="text-xs font-bold text-orange-400 tracking-widest uppercase mb-2">
            Portafolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-white italic tracking-tight">
            GALERÍA <span className="text-orange-400">GENERAL</span>
          </h3>
          <p className="text-zinc-400 text-sm md:text-base mt-2">
            Un vistazo al nivel de detalle y precisión en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/11.jpeg"
              alt="Diagnóstico Eléctrico"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 pointer-events-none bg-gradient-to-t from-zinc-950/90 to-transparent pt-6 pb-2 px-2">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                Diagnóstico Eléctrico
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Sistema
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/22.jpeg"
              alt="Mecánica Especializada"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 pointer-events-none bg-gradient-to-t from-zinc-950/90 to-transparent pt-6 pb-2 px-2">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                Mecánica Especializada
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Motor
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <GalleryVideo
                src="/55.mp4"
                label="Proceso en vivo"
                fit="contain"
              />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/33.jpeg"
              alt="Afinación y Sensores"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 pointer-events-none bg-gradient-to-t from-zinc-950/90 to-transparent pt-6 pb-2 px-2">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                Afinación y Sensores
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Mecánica
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/44.jpeg"
              alt="Interior y Electrónica"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 pointer-events-none bg-gradient-to-t from-zinc-950/90 to-transparent pt-6 pb-2 px-2">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                Interior y Electrónica
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Cabina
              </span>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-lg flex items-center justify-center"
          >
            <img
              loading="lazy"
              decoding="async"
              src="/66.jpeg"
              alt="Clínica de Motos"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 pointer-events-none bg-gradient-to-t from-zinc-950/90 to-transparent pt-6 pb-2 px-2">
              <span className="text-white font-bold text-base md:text-lg tracking-wide">
                Clínica de Motos
              </span>
              <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                Motos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
