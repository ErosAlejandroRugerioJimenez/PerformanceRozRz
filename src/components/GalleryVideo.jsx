import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";

export default function GalleryVideo({ src, label, fit }) {
  const [status, setStatus] = useState("preview");
  const video = useRef(null);
  const poster = "/previews" + src.replace(/\.mp4$/, ".webp");

  useEffect(() => {
    if (status === "playing") video.current?.focus({ preventScroll: true });
  }, [status]);

  if (status === "playing") {
    return (
      <video
        ref={video}
        src={src}
        poster={poster}
        aria-label={label}
        className={`absolute inset-0 size-full ${fit === "cover" ? "object-cover" : "object-contain"}`}
        controls
        playsInline
        autoPlay
        onError={() => setStatus("error")}
      >
        Tu navegador no soporta videos.
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setStatus("playing")}
      aria-label={`${status === "error" ? "Reintentar" : "Reproducir"}: ${label}`}
      className="group/video absolute inset-0 grid size-full cursor-pointer place-items-center overflow-hidden focus-visible:outline-offset-[-5px]"
    >
      <img src={poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover/video:scale-105 motion-reduce:transition-none" />
      <span className="absolute inset-0 bg-linear-to-t from-black/90 via-black/5 to-black/15" />
      <span className="relative grid size-16 place-items-center rounded-full border border-white/40 bg-orange-600 text-white shadow-lg transition-colors group-hover/video:bg-orange-500">
        {status === "error" ? <RotateCcw size={23} /> : <Play size={23} fill="currentColor" />}
      </span>
      <span className="absolute inset-x-5 bottom-5 text-left text-lg font-bold text-white">
        {status === "error" ? "No se pudo cargar. Reintentar" : label}
      </span>
    </button>
  );
}
