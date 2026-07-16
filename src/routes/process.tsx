import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "@/components/site/section-header";
import { PROCESS } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — SoRa Innovative Solutions" },
      { name: "description", content: "A transparent 9-step process from discovery to launch and ongoing support." },
      { property: "og:title", content: "Our Process — SoRa Innovative Solutions" },
      { property: "og:description", content: "Discovery, research, design, development, launch, and beyond." },
    ],
  }),
  component: Process,
});

function Process() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title={<>A <span className="text-gradient-brand">clear process</span>, from idea to launch.</>}
        subtitle="Nine focused steps that keep every project on track and every client in the loop."
      />
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="space-y-5">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl border p-5 flex items-start gap-4"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow-blue">
                <step.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}