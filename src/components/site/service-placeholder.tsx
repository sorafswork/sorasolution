import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrandLink } from "./brand-button";

export function ServicePlaceholder({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 md:px-6 pt-40 pb-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          SoRa Service
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
          <span className="text-gradient-brand">{title}</span>
        </h1>
        <p className="mt-4 text-muted-foreground">{desc}</p>
        <p className="mt-2 text-sm text-muted-foreground/70">
          More content coming soon.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <BrandLink to="/" variant="outline">
            <ArrowLeft className="h-4 w-4" /> Back to SoRa
          </BrandLink>
          <BrandLink to="/contact">
            Contact Us <ArrowRight className="h-4 w-4" />
          </BrandLink>
        </div>
      </motion.div>
    </section>
  );
}
