import { useState } from "react";
import GalleryVideo from "./GalleryVideo";

export default function Galeria() {
  const [comparison, setComparison] = useState(50);

  return (
    <div
      id="galeria"
      className="bg-zinc-950 py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-down" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">
            NUESTRO <span className="text-orange-400">TRABAJO</span>
          </h2>
          <div className="h-1 w-20 md:w-24 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-4 md:mt-6 text-sm md:text-base max-w-2xl mx-auto">
            Resultados reales. Echa un vistazo a nuestros mejores proyectos de
            estética automotriz y mecánica especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Hojalatería
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/hojalateria.jpeg"
              alt="Hojalatería"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Pintura Premium
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/pintura.jpeg"
              alt="Pintura Premium"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Mecánica Diésel
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/disell.jpeg"
              alt="Mecánica Diésel"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Clínica de Motos
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/motos.jpeg"
              alt="Clínica de Motos"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Detallado
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/detallado.jpeg"
              alt="Detallado"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="aspect-square bg-black rounded-xl overflow-hidden group relative cursor-pointer shadow-lg border border-zinc-800"
          >
            <div className="absolute inset-0 bg-red-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white font-bold tracking-widest uppercase text-lg md:text-xl text-center px-4">
                Afinaciones
              </span>
            </div>
            <img
              loading="lazy"
              decoding="async"
              src="/afinacion.jpeg"
              alt="Afinaciones"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-16 md:mt-24 border-t border-zinc-900 pt-12 md:pt-16"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white italic tracking-tight">
              TRANSFORMACIONES <span className="text-orange-400">REALES</span>
            </h3>
            <p className="text-zinc-400 text-sm md:text-lg mt-2 md:mt-4">
              Desliza la barra para ver la restauración.
            </p>
          </div>

          <div className="comparison relative w-full max-w-xl sm:max-w-2xl mx-auto aspect-[3/4] sm:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-zinc-800 bg-black shadow-[0_0_35px_rgba(220,38,38,0.15)] select-none">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-zinc-950/80 text-white text-[10px] md:text-xs font-bold px-3 py-2 rounded-full uppercase tracking-widest backdrop-blur-md border border-zinc-800 pointer-events-none shadow-lg whitespace-nowrap">
              Desliza para comparar
            </div>

            <img
              loading="lazy"
              decoding="async"
              src="/despues.jpeg"
              alt="Coche Restaurado"
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />

            <img
              loading="lazy"
              decoding="async"
              src="/antes.jpeg"
              alt="Coche Chocado"
              className="absolute inset-0 w-full h-full object-cover object-center z-10 pointer-events-none"
              style={{
                clipPath: "inset(0 " + (100 - comparison) + "% 0 0)",
                filter: "grayscale(10%)",
              }}
            />

            <div
              className="absolute top-0 bottom-0 w-1 bg-orange-600 z-10 pointer-events-none shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              style={{ left: comparison + "%" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-full border-2 md:border-4 border-white flex items-center justify-center shadow-lg">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={comparison}
              onChange={(event) => setComparison(Number(event.target.value))}
              aria-label="Comparar antes y después de la reparación"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 border-t border-zinc-900 pt-12 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
          >
            <GalleryVideo
                src="/videouno.mp4"
                label="Diagnóstico eléctrico"
                fit="cover"
              />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
          >
            <GalleryVideo
                src="/videodos.mp4"
                label="Válvula de alivio"
                fit="contain"
              />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
          >
            <GalleryVideo
                src="/videotres.mp4"
                label="Pintura premium"
                fit="cover"
              />
          </div>
        </div>
      </div>
    </div>
  );
}
