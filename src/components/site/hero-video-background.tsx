import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/media/sora-client-journey.mp4";
const POSTER_SRC = "/media/sora-client-journey-poster.jpg";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    void video.play().catch(() => setCanPlay(false));
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 bg-background">
      <img
        src={POSTER_SRC}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster={POSTER_SRC}
        onCanPlay={() => setCanPlay(true)}
        onError={() => setCanPlay(false)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:hidden ${
          canPlay ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}