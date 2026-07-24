import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHero } from "@/components/site/section-header";
import { cn } from "@/lib/utils";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Works — SoRa Innovative Solutions" },
      { name: "description", content: "Selected websites, branding, and design work from SoRa Innovative Solutions." },
      { property: "og:title", content: "Works — SoRa Innovative Solutions" },
      { property: "og:description", content: "A gallery of premium websites, brands, and design work." },
    ],
  }),
  component: Works,
});

const CATEGORIES = ["All", "Websites", "Branding", "Logo", "Posters", "Graphics", "Content"] as const;

const PROJECTS = [
  { img: p1, title: "Kairo Studio", cat: "Websites" },
  { img: p2, title: "BrewNest", cat: "Branding" },
  { img: p3, title: "LumenTech", cat: "Websites" },
  { img: p4, title: "Bloom & Vine", cat: "Logo" },
  { img: p5, title: "FinNova", cat: "Graphics" },
  { img: p6, title: "@byananya", cat: "Content" },
  { img: p1, title: "Nordic Skate", cat: "Posters" },
  { img: p2, title: "Solaris", cat: "Websites" },
  { img: p3, title: "Cinder Cafe", cat: "Branding" },
];

function Works() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Our <span className="text-gradient-brand">works</span></>}
        subtitle="A curated selection of recent projects across web, brand, and design."
      />
      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all border",
                filter === c
                  ? "bg-gradient-brand text-primary-foreground border-transparent shadow-glow-blue"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 pb-12">
          {list.map((p, i) => (
            <motion.div
              key={p.title + i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold">{p.cat}</div>
                  <div className="mt-1 font-display text-lg font-bold">{p.title}</div>
                </div>
                <span className="rounded-full bg-primary/20 border border-primary/40 px-2.5 py-1 text-[10px] font-semibold text-primary">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}