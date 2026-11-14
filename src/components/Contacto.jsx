import { Clock, CreditCard, MapPin, MessageCircle } from "lucide-react";
import QuoteLink from "./QuoteLink";

export default function Contacto() {
  return (
    <div
      id="contacto"
      className="bg-zinc-950 py-16 md:py-24 px-4 sm:px-6 border-t border-zinc-900 pt-20 md:pt-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic tracking-tight mb-4">
            UBICACIÓN Y <span className="text-orange-400">CONTACTO</span>
          </h2>
          <div className="h-1 w-20 md:w-24 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-4 md:mt-6 text-sm md:text-base max-w-2xl mx-auto">
            ¿Tu motor necesita atención o quieres cotizar un trabajo de pintura?
            Tráelo con los expertos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-zinc-900 p-5 sm:p-8 rounded-2xl border border-zinc-800 shadow-2xl">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-600/10 text-orange-400 rounded-xl flex items-center justify-center shrink-0 border border-orange-900/30">
                <MapPin className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                  Visítanos
                </h4>
                <p className="text-zinc-400 text-sm md:text-base">
                  C. Cuahutémoc 254, Santa Cruz Matlacahuacan
                  <br /> San Francisco Tetlanohcan, Tlaxcala.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-600/10 text-orange-400 rounded-xl flex items-center justify-center shrink-0 border border-orange-900/30">
                <Clock className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                  Horarios de Atención
                </h4>
                <p className="text-zinc-400 text-sm md:text-base">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábados: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-5 mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-zinc-900/50 border border-orange-900/30 flex items-center justify-center shrink-0">
                <CreditCard className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                  Métodos de Pago
                </h4>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Efectivo, Transferencia.
                </p>
              </div>
            </div>

            <div className="pt-2 md:pt-4">
              <QuoteLink className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(22,163,74,0.3)] flex items-center justify-center gap-3 cursor-pointer text-sm md:text-base">
                <MessageCircle className="size-6" aria-hidden="true" />
                Cotizar por WhatsApp
              </QuoteLink>
            </div>
          </div>

          <div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 h-[300px] md:h-auto md:min-h-[400px] relative mt-4 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6085459550363!2d-98.1599381890276!3d19.255884781910872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfddbd3489f0ed%3A0x9dac79d755e96236!2sC.%20Cuahut%C3%A9moc%20259-254%2C%20Santa%20Cruz%20Matlacahuacan%2C%2090843%20San%20Francisco%20Tetlanohcan%2C%20Tlax.!5e0!3m2!1sen!2smx!4v1785893396955!5m2!1sen!2smx"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              title="Ubicación de PerformanceRozRz"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
