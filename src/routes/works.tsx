import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Check, X } from "lucide-react";
import { PageHero } from "@/components/site/section-header";
import { cn } from "@/lib/utils";
import w1 from "@/assets/w1.jpg";
import w2 from "@/assets/w2.jpg";
import w3 from "@/assets/w3.jpg";
import w4 from "@/assets/w4.jpg";
import w5 from "@/assets/w5.jpg";
import w6 from "@/assets/w6.jpg";
import w7 from "@/assets/w7.jpg";

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

const CATEGORIES = ["All", "Corporate", "Business", "Personalized Gifts", "Art & Creative", "Portfolio", "Productivity"] as const;

const PROJECTS = [
  {
    img: w1,
    title: "Skyfly International Pvt Ltd",
    cat: "Corporate",
    url: "https://www.skyflyintl.com/",
    points: [
      "Corporate website for an international travel & tour operator",
      "Holiday packages, destination guides and visa assistance pages",
      "Flight & hotel booking enquiry flow with lead capture",
      "WhatsApp and click-to-call CTAs on every section",
    ],
  },
  {
    img: w2,
    title: "VY Enterprises",
    cat: "Business",
    url: "https://www.vyenterprises.in/",
    points: [
      "B2B business website built for credibility and enquiries",
      "Categorised product catalogue with detail pages",
      "Quick enquiry forms and downloadable brochure",
      "Clear company profile and direct contact channels",
    ],
  },
  {
    img: w3,
    title: "Blush Theory Art",
    cat: "Personalized Gifts",
    url: "https://blush-theory-art-studio.lovable.app",
    points: [
      "A custom-built digital gift website created personally for couples",
      "Delivered through a unique private link that only the couple can open",
      "Holds their photos, videos, love messages and special memories in one place",
      "Interactive games and surprise reveals make the gift playful and memorable",
      "Designed as a one-of-a-kind keepsake surprise for anniversaries and proposals",
    ],
  },
  {
    img: w4,
    title: "Artika Gallery",
    cat: "Art & Creative",
    url: "https://artika-creations.vercel.app/",
    points: [
      "Online gallery website for a curated creative brand",
      "Collection pages with category filters and search",
      "Immersive lightbox detail views for every artwork",
      "Fast, smooth transitions with clear enquiry paths",
    ],
  },
  {
    img: w5,
    title: "Habit Flow",
    cat: "Productivity",
    url: "https://habit-track-w.netlify.app/",
    points: [
      "Habit tracking web app for building daily routines",
      "Create habits and mark completions in one tap",
      "Streak calendar and long-term progress charts",
      "Clean, distraction-free dashboard on any device",
    ],
  },
  {
    img: w6,
    title: "Client Portfolio — Ratthi",
    cat: "Portfolio",
    url: "https://ratthi-portfolio.lovable.app",
    points: [
      "Personal portfolio website that acts as a digital identity",
      "Animated hero with skills and achievements overview",
      "Project showcase with case-study style detail",
      "Direct contact section for opportunities and collaborations",
    ],
  },
  {
    img: w7,
    title: "Skyfly India",
    cat: "Corporate",
    url: "https://india-skyfly.lovable.app",
    points: [
      "Travel website focused on domestic Indian tour packages",
      "Destination pages for popular routes and seasonal offers",
      "Fast enquiry system with click-to-call and chat booking",
      "Conversion-first layout tuned for mobile travellers",
    ],
  },
];

function Works() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<string | null>(null);
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Our <span className="text-gradient-brand">works</span></>}
        subtitle="A curated selection of live client projects delivered by SoRa Innovative Solution."
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-12">
          {list.map((p, i) => {
            const isOpen = active === p.title;
            return (
              <motion.article
                key={p.title + i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 6) * 0.04 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-glow-blue cursor-pointer"
                onClick={() => setActive(isOpen ? null : p.title)}
                onMouseEnter={() => setActive(p.title)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={`${p.title} website mockup`}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-gold/15 border border-gold/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold backdrop-blur-md">
                    {p.cat}
                  </span>
                  <div
                    className={cn(
                      "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-card via-card/95 to-card/70 p-6 transition-all duration-500 ease-out md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-shimmer">{p.title}</h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(null);
                        }}
                        className="rounded-full bg-card/80 p-1.5 text-muted-foreground hover:text-foreground md:hidden"
                        aria-label="Close details"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-col gap-2">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-blue transition-transform hover:scale-[1.04]"
                      >
                        Live Website <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block text-center text-xs text-primary/90 break-all hover:text-gold"
                      >
                        {p.url}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
