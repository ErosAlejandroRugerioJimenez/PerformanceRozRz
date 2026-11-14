import { useEffect, useRef, useState } from "react";
import { ArrowDown, MapPin, MessageCircle, Pause, Play } from "lucide-react";
import QuoteLink from "./QuoteLink";

export default function Hero() {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      if (preference.matches) video.current?.pause();
      else video.current?.play().catch(() => {});
    };
    applyPreference();
    preference.addEventListener("change", applyPreference);
    return () => preference.removeEventListener("change", applyPreference);
  }, []);

  function togglePlayback() {
    const player = video.current;
    if (player.paused) player.play().catch(() => {});
    else player.pause();
  }

  return (
    <section className="hero relative isolate grid min-h-[min(48rem,84svh)] items-center overflow-hidden border-b border-white/10 bg-zinc-950">
      <video
        ref={video}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src="/mecanica-portada.mp4"
        poster="/previews/mecanica.webp"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setPlaying(false)}
      />
      <div className="hero-copy">
        <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-orange-200">
          <MapPin size={16} aria-hidden="true" /> Taller automotriz en Tlaxcala
        </p>
        <h1 className="hero-title">Performance<span>RozRz</span></h1>
        <p className="mt-5 max-w-lg border-l-2 border-orange-500 pl-4 text-base text-zinc-200 sm:text-xl">
          Mecánica diésel y gasolina, hojalatería, pintura y servicio para motos.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <QuoteLink className="button-primary inline-flex gap-2">
            <MessageCircle size={18} aria-hidden="true" /> Cotizar por WhatsApp
          </QuoteLink>
          <a className="button-secondary inline-flex gap-2" href="#servicios">
            Ver servicios <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={playing ? "Pausar video de portada" : "Reproducir video de portada"}
        className="absolute right-4 bottom-5 grid size-11 place-items-center rounded-full border border-white/40 bg-black/60 text-white hover:bg-black sm:right-9"
      >
        {playing ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </section>
  );
}
