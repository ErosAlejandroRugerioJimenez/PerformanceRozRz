import { ChevronDown } from "lucide-react";
export default function Faq() {
  return (
    <div id="faq" className="bg-zinc-950 py-24 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">
            PREGUNTAS <span className="text-orange-400">FRECUENTES</span>
          </h2>
          <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 text-lg">
            Resolvemos tus dudas antes de que metas tu auto al taller.
          </p>
        </div>

        <div className="space-y-4">
          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                ¿Tiene costo el diagnóstico si mi coche hace un ruido extraño?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              La inspección visual y la asesoría inicial no tienen costo. Si
              requerimos meter escáner especializado o desmontar piezas del
              motor para encontrar una falla oculta, te cotizamos primero el
              diagnóstico. Si decides hacer la reparación con nosotros, el costo
              del diagnóstico se descuenta del total.
            </div>
          </details>

          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                Mi coche no arranca, ¿cuentan con servicio a domicilio o grúa?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              ¡No te quedes tirado! Contáctanos por WhatsApp y evaluamos la
              situación. Dependiendo de la falla y tu ubicación, podemos acudir
              para un diagnóstico rápido o coordinar una grúa de confianza para
              traer tu vehículo seguro hasta nuestro taller.
            </div>
          </details>

          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                ¿Cuánto tiempo se quedan mi auto para un servicio o afinación?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              Sabemos que necesitas tu coche. Las afinaciones mayores y
              mantenimientos preventivos programados se entregan **el mismo
              día**. Para trabajos de hojalatería, pintura o reparaciones de
              motor (diésel/gasolina), te damos una fecha de entrega exacta.
            </div>
          </details>

          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                ¿Trabajan con seguros de auto si tuve un choque?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              Por el momento trabajamos únicamente de manera particular para
              garantizar la rapidez y calidad de nuestros servicios sin depender
              de los tiempos de autorización de las aseguradoras. Sin embargo,
              te entregamos un reporte detallado y tu factura en caso de que tú
              gestiones el reembolso por tu cuenta.
            </div>
          </details>

          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                ¿Ofrecen garantía por escrito en sus trabajos?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              Claro. Todo servicio, desde una afinación hasta un detallado
              estético premium o un ajuste completo de motor, lleva garantía
              tanto en mano de obra como en las refacciones instaladas. No
              entregamos el vehículo hasta que superamos nuestras propias
              pruebas de calidad.
            </div>
          </details>

          <details className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <h3 className="text-white font-bold text-lg pr-4">
                ¿Atienden camionetas de carga, diésel o flotillas de empresas?
              </h3>
              <ChevronDown className="size-5 shrink-0 text-orange-400 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800/50 leading-relaxed">
              Totalmente. Tenemos la herramienta y la capacidad para trabajar
              con vehículos de carga ligera y motores diésel. Además, ofrecemos
              planes de mantenimiento preventivo especiales si cuentas con una
              flotilla para tu negocio.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
