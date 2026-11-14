export default function Testimonios() {
  return (
    <div
      id="testimonios"
      className="bg-zinc-950 py-24 px-6 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">
            LO QUE DICEN <span className="text-orange-400">NUESTROS CLIENTES</span>
          </h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition-colors shadow-lg"
          >
            <div className="text-orange-400 mb-4 text-xl">★★★★★</div>
            <p className="text-zinc-400 italic mb-6">
              "Me dejaron la facia como nueva después de un choque. El color
              quedó igualito, ni se nota la diferencia. Súper recomendados."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold border border-zinc-700">
                CM
              </div>
              <div>
                <h4 className="text-white font-bold">Carlos M.</h4>
                <span className="text-zinc-500 text-sm">
                  Hojalatería y Pintura
                </span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition-colors shadow-lg"
          >
            <div className="text-orange-400 mb-4 text-xl">★★★★★</div>
            <p className="text-zinc-400 italic mb-6">
              "Llevé mi moto para afinación y ajuste de frenos. Quedó al cien y
              me la entregaron el mismo día. Excelente trato."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold border border-zinc-700">
                JR
              </div>
              <div>
                <h4 className="text-white font-bold">Javier R.</h4>
                <span className="text-zinc-500 text-sm">Clínica de Motos</span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-red-600 transition-colors shadow-lg"
          >
            <div className="text-orange-400 mb-4 text-xl">★★★★★</div>
            <p className="text-zinc-400 italic mb-6">
              "Llevaba meses con el Check Engine prendido, le metieron el
              escáner y dieron con la falla electrónica rápido. Muy honestos."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-white font-bold border border-zinc-700">
                AL
              </div>
              <div>
                <h4 className="text-white font-bold">Ana L.</h4>
                <span className="text-zinc-500 text-sm">
                  Diagnóstico por Escáner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
