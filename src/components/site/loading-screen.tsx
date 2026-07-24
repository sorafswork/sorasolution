import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/sora-icon.jpeg.asset.json";
const logo = logoAsset.url;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setVisible(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/40 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <img
              src={logo}
              alt="SoRa"
              className="relative h-24 w-24 rounded-full ring-2 ring-primary/60 shadow-glow-blue"
            />
          </motion.div>
          <div className="mt-8 font-display text-lg">
            <span className="text-gradient-brand font-bold">SoRa</span>{" "}
            <span className="text-foreground/80">Innovative Solutions</span>
          </div>
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-gradient-brand"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-xs text-muted-foreground tabular-nums">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}