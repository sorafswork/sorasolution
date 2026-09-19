import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import introVideo from "@/assets/sora-intro-silver.mp4.asset.json";
const logo = "/logo.png";

const SPLASH_SEEN_KEY = "sora-intro-silver-seen";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [brandVisible, setBrandVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const exitTimerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_SEEN_KEY) || prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const brandTimer = window.setTimeout(() => setBrandVisible(true), 1400);
    const fallbackTimer = window.setTimeout(() => {
      sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
      setVisible(false);
    }, 7000);
    const video = videoRef.current;
    if (video) {
      void video.play().catch(() => {
        sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
        setVisible(false);
      });
    }

    return () => {
      window.clearTimeout(brandTimer);
      window.clearTimeout(fallbackTimer);
      if (exitTimerRef.current !== null) window.clearTimeout(exitTimerRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden bg-background"
        >
          <video
            ref={videoRef}
            src={introVideo.url}
            muted
            playsInline
            preload="auto"
            aria-hidden
            onEnded={() => {
              sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
              setBrandVisible(true);
              exitTimerRef.current = window.setTimeout(() => setVisible(false), 900);
            }}
            onError={() => {
              sessionStorage.setItem(SPLASH_SEEN_KEY, "true");
              setVisible(false);
            }}
            onTimeUpdate={(event) => {
              if (event.currentTarget.currentTime >= 1.4) setBrandVisible(true);
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/5 to-background/20" />
          <AnimatePresence>
            {brandVisible && (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-5 bottom-[9vh] flex flex-col items-center text-center"
              >
                <img
                  src={logo}
                  alt="SoRa Innovative Solution"
                  className="h-16 w-16 object-contain drop-shadow-2xl md:h-20 md:w-20"
                />
                <h1 className="mt-4 font-display text-2xl font-bold text-foreground md:text-4xl">
                  SoRa Innovative Solution
                </h1>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-gold md:text-base">
                  Building Digital Growth. Creating Smart Solutions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          {!brandVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-7 left-1/2 h-px w-28 -translate-x-1/2 overflow-hidden bg-border/50"
            >
              <motion.div
                className="h-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}