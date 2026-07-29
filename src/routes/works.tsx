import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
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

const CATEGORIES = ["All", "Corporate", "Business", "Art & Creative", "Portfolio", "Productivity"] as const;

const PROJECTS = [
  {
    img: p1,
    title: "Skyfly International Pvt Ltd",
    cat: "Corporate",
    url: "https://www.skyflyintl.com/",
    desc: "A polished corporate website for an international travel and tour operator. Delivers a curated showcase of holiday packages, destination guides, visa assistance, and flight & hotel booking enquiries, with a strong lead-capture flow, WhatsApp/call CTAs, and a modern responsive layout that builds instant trust for global travellers.",
  },
  {
    img: p2,
    title: "VY Enterprises",
    cat: "Business",
    url: "https://www.vyenterprises.in/",
    desc: "A professional B2B business site presenting the company profile, product catalogue, and service offerings in a clean, credibility-first layout. Features include categorised product pages, quick enquiry forms, downloadable brochures, and direct contact channels — engineered to convert first-time visitors into qualified leads.",
  },
  {
    img: p3,
    title: "Blush Theory Art Studio",
    cat: "Art & Creative",
    url: "https://blush-theory-art-studio.lovable.app",
    desc: "An elegant art studio website showcasing original paintings and commissioned artworks in a rich, gallery-style presentation. Includes an interactive portfolio, artist story, commission enquiry form, and social integrations designed to help the studio attract collectors and grow bookings.",
  },
  {
    img: p4,
    title: "Artika Gallery",
    cat: "Art & Creative",
    url: "https://artika-creations.vercel.app/",
    desc: "A refined online gallery for a creative brand, featuring curated artwork collections, category filters, and immersive detail views. The site balances aesthetics with performance — smooth transitions, lightbox previews, and clear enquiry paths that turn browsers into buyers.",
  },
  {
    img: p5,
    title: "Habit Flow",
    cat: "Productivity",
    url: "https://habit-track-w.netlify.app/",
    desc: "A minimal, focus-driven habit tracker web app that helps users build consistent routines. Users can create daily habits, mark completions, visualise streaks, and monitor long-term progress on a clean dashboard — perfect for anyone serious about self-improvement and productivity.",
  },
  {
    img: p6,
    title: "Client Portfolio — Ratthi",
    cat: "Portfolio",
    url: "https://ratthi-portfolio.lovable.app",
    desc: "A modern personal portfolio built to spotlight the client's professional journey, skills, projects, and achievements. Includes an animated hero, project showcase, about story, testimonials, and a direct contact section — a polished digital identity for career opportunities and collaborations.",
  },
  {
    img: p1,
    title: "Skyfly India",
    cat: "Corporate",
    url: "https://india-skyfly.lovable.app",
    desc: "A destination-focused travel website for domestic Indian tours. Highlights curated packages, popular routes, seasonal offers, and a fast enquiry system with click-to-call and WhatsApp booking — designed to convert traffic into confirmed trips with a warm, premium feel.",
  },
];

function Works() {
  const [filter, setFilter] = useState<string>("All");
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
          {list.map((p, i) => (
            <motion.a
              key={p.title + i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.04 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-glow-gold"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gold/15 border border-gold/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                  {p.cat}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-shimmer">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <span className="mt-4 text-xs text-primary/90 break-all">{p.url.replace(/^https?:\/\//, "")}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}