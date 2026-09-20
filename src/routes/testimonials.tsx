import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/section-header";
import { TESTIMONIALS } from "@/lib/site-data";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () =>
    pageSeo({
      path: "/testimonials",
      title: "Client Testimonials — SoRa Innovative Solution Reviews",
      description:
        "Read honest feedback from founders, marketers and creators about working with SoRa Innovative Solution on websites, branding and content projects.",
    }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Kind words"
        title={<>Clients <span className="text-gradient-gold">love</span> working with us.</>}
        subtitle="A few notes from the founders, creators, and teams we've partnered with."
      />
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl border p-6"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}