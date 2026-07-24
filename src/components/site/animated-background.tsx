export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/4 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-[140px] animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.26 310 / 0.35), transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 h-[540px] w-[540px] rounded-full blur-[130px] animate-float-slower"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.20 200 / 0.30), transparent 60%)" }} />
      <div className="absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full bg-gold/20 blur-[120px] animate-float-slow" />
      <div className="absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px] animate-float-slower" />
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
}