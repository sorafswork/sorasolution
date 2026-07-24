import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Instagram, Mail, Phone, MessageCircle, Github, ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/sora-icon.jpeg.asset.json";
const logo = logoAsset.url;
import { NAV_LINKS } from "./nav";

const SERVICES = [
  "Website Development",
  "Graphic Design",
  "Brand Identity",
  "Content Writing",
  "Digital Marketing",
  "SEO",
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-brand" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <motion.img
                src={logo}
                alt="SoRa"
                className="h-10 w-10 rounded-full ring-1 ring-primary/40"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              />
              <span className="font-display font-bold text-xl">
                <span className="text-gradient-brand">SoRa</span>
                <span className="text-foreground/90"> Innovative Solutions</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              A premium digital agency crafting websites, branding, graphic design, and
              content that drives measurable growth for startups and businesses.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Instagram, href: "https://instagram.com/sora_official_id", label: "Instagram" },
                { Icon: MessageCircle, href: "https://wa.me/917708704523", label: "WhatsApp" },
                { Icon: Mail, href: "mailto:sorafs.work@gmail.com", label: "Email" },
                { Icon: Phone, href: "tel:+917708704523", label: "Phone" },
                { Icon: Github, href: "https://github.com/sorafswork", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card hover:border-primary/60 hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-semibold text-sm text-gold">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-semibold text-sm text-gold">Services</div>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© 2026 SoRa Innovative Solutions. All rights reserved.</p>
          <p className="tracking-widest uppercase">
            <span className="text-gradient-brand font-semibold">Innovate</span> ·{" "}
            <span className="text-gradient-gold font-semibold">Create</span> ·{" "}
            <span className="text-gradient-brand font-semibold">Deliver</span>
          </p>
        </div>
      </div>
    </footer>
  );
}