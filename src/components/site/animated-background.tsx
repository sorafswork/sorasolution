export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-gold/15 blur-[130px] animate-float-slower" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
      <div className="absolute inset-0 bg-noise opacity-40" />
    </div>
  );
}