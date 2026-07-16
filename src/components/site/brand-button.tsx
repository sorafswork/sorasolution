import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline";

export function BrandLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    primary: "bg-gradient-brand text-white shadow-glow-blue",
    gold: "bg-gradient-gold text-gold-foreground shadow-glow-gold",
    outline: "border border-border bg-card/50 text-foreground hover:border-primary/60",
  };
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link
        to={to}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all",
          styles[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}