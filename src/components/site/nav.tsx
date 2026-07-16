import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Gift, ArrowRight } from "lucide-react";
import logo from "@/assets/sora-logo.png";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/works", label: "Works" },
  { to: "/process", label: "Process" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-4 md:px-6")}>
        <div
          className={cn(
            "glass-card flex items-center justify-between rounded-2xl border px-4 md:px-5 transition-all",
            scrolled ? "py-2 shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]" : "py-3",
          )}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <motion.img
              src={logo}
              alt="SoRa"
              className="h-9 w-9 rounded-full ring-1 ring-primary/40"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
            <span className="hidden sm:block font-display font-bold text-lg leading-none">
              <span className="text-gradient-brand">SoRa</span>
              <span className="text-foreground/90"> Solutions</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-sora-offer"))}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold hover:bg-gold/20 transition-colors"
            >
              <Gift className="h-3.5 w-3.5" />
              Offer
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-blue hover:scale-[1.03] transition-transform"
            >
              Get Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-border p-2"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-card rounded-2xl border p-3"
          >
            <div className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium",
                    pathname === l.to
                      ? "bg-primary/15 text-foreground"
                      : "text-muted-foreground hover:bg-muted",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new CustomEvent("open-sora-offer"));
                }}
                className="mt-1 flex items-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2 text-sm font-semibold text-gold"
              >
                <Gift className="h-4 w-4" /> View SoRa Offer
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-brand px-3 py-2 text-sm font-semibold text-white"
              >
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}