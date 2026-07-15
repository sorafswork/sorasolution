import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUp,
  Code2,
  PenTool,
  FileText,
  Sparkles,
  Megaphone,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Menu,
  X,
  Star,
  Rocket,
  Compass,
  Palette,
  Terminal,
  TestTube,
  Send,
  LifeBuoy,
} from "lucide-react";
import { Gift } from "lucide-react";
import logo from "@/assets/sora-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SoRa Innovative Solutions — Innovate • Create • Deliver" },
      {
        name: "description",
        content:
          "Premium digital agency crafting modern websites, branding, graphic design, and content that grows your business.",
      },
      { property: "og:title", content: "SoRa Innovative Solutions — Innovate • Create • Deliver" },
      {
        property: "og:description",
        content: "Premium digital agency crafting modern websites, branding, graphic design, and content that grows your business.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* ---------- Shared bits ---------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function BrandButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type,
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "gold";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";
  const styles = {
    primary:
      "bg-gradient-brand text-white shadow-[0_10px_30px_-10px_var(--primary)] hover:shadow-[0_20px_50px_-15px_var(--primary)] hover:-translate-y-0.5",
    gold: "bg-gold text-gold-foreground hover:glow-gold hover:-translate-y-0.5",
    ghost:
      "border border-white/15 bg-white/5 text-foreground backdrop-blur-md hover:border-gold/40 hover:bg-white/10",
  }[variant];
  const Cmp: any = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      type={type}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Cmp>
  );
}

/* ---------- Loading screen ---------- */

function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-70 bg-gradient-brand rounded-full" />
            <img src={logo} alt="SoRa" width={96} height={96} className="h-24 w-24" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Scroll progress + Back to top ---------- */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-gradient-brand"
    />
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_10px_30px_-10px_var(--primary)] hover:scale-110 transition-transform"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ---------- Nav ---------- */

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Works" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${
            scrolled ? "glass-card shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]" : "bg-transparent"
          }`}
          style={{
            border: "1px solid transparent",
            backgroundImage: scrolled
              ? "linear-gradient(var(--card), var(--card)), var(--gradient-brand)"
              : "linear-gradient(transparent, transparent), var(--gradient-brand)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <motion.img
              src={logo}
              alt="SoRa"
              width={36}
              height={36}
              className="h-9 w-9 drop-shadow-[0_0_12px_var(--primary)]"
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-display text-base font-semibold tracking-tight bg-gradient-brand bg-clip-text text-transparent">
              SoRa Innovative
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <motion.a
                key={n.href}
                href={n.href}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                {n.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => window.dispatchEvent(new CustomEvent("open-sora-offer"))}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative ml-1 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/20"
            >
              <Gift className="h-3.5 w-3.5" />
              Offer
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-gold" />
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold" />
            </motion.button>
          </nav>
          <div className="hidden md:block">
            <BrandButton href="#contact" variant="primary" className="!py-2.5 !px-5">
              Get Started <ArrowRight className="h-4 w-4" />
            </BrandButton>
          </div>
          <button
            className="md:hidden rounded-full p-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-3xl glass-card p-4 md:hidden"
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  window.dispatchEvent(new CustomEvent("open-sora-offer"));
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold"
              >
                <Gift className="h-4 w-4" /> View Offer
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-xl bg-gradient-brand px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        className="absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent,var(--background)_70%)]" />

      {/* Floating glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float-slow absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="animate-float-slower absolute -bottom-32 right-0 h-[460px] w-[460px] rounded-full bg-gold/25 blur-[130px]" />
        <div className="animate-float-slow absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Freelance • Video • Photography • Design
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-5 text-sm sm:text-base font-medium tracking-wide text-foreground/90"
          >
            👋 Welcome to{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent font-semibold">
              SoRa Innovative Solutions
            </span>
          </motion.p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Freelance{" "}
            <span className="text-gradient-brand">Video & Photo</span>{" "}
            Crafted Professionally.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            From cinematic edits and product photography to modern websites,
            branding, and content — SoRa Innovative Solutions turns your ideas
            into scroll-stopping visuals and digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BrandButton href="#contact" variant="primary">
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </BrandButton>
            <BrandButton href="#portfolio" variant="ghost">
              View Portfolio
            </BrandButton>
            <BrandButton
              variant="gold"
              onClick={() => window.dispatchEvent(new CustomEvent("open-sora-offer"))}
            >
              <Gift className="h-4 w-4" /> See SoRa Offer
            </BrandButton>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center sm:gap-12">
            {[
              ["150+", "Projects"],
              ["80+", "Happy Clients"],
              ["5★", "Avg. Rating"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-semibold text-gradient-brand sm:text-3xl">
                  {v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <Section id="about" eyebrow="About Us" title={<>Who <span className="text-gradient-brand">We Are</span></>}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            SoRa Innovative Solutions is a modern digital agency dedicated to
            helping businesses grow online through innovative technology and
            creative design. We specialize in responsive websites, impactful
            brand identities, attractive marketing materials, and engaging
            content that delivers measurable results.
          </p>
          <p>
            Our mission is to transform ideas into powerful digital experiences
            while maintaining quality, creativity, and customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["Startups", "SMBs", "Entrepreneurs", "Educators"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-25 blur-3xl" />
          <div className="glass-card grid grid-cols-2 gap-4 rounded-3xl p-8">
            {[
              { k: "5+", v: "Years crafting brands" },
              { k: "24/7", v: "Client support" },
              { k: "12+", v: "Industries served" },
              { k: "100%", v: "Custom design" },
            ].map(({ k, v }) => (
              <div
                key={v}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="text-3xl font-semibold text-gradient-brand">{k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- Services ---------- */

const SERVICES = [
  {
    icon: Code2,
    title: "Website Development",
    items: [
      "Business Website",
      "Company Website",
      "Portfolio Website",
      "Landing Page",
      "E-Commerce Website",
      "Educational Website",
      "Responsive Website",
      "Website Redesign",
      "Website Maintenance",
    ],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    items: [
      "Logo Design",
      "Posters",
      "Flyers",
      "Brochures",
      "Social Media Posts",
      "Business Cards",
      "Banner Design",
      "Certificates",
      "Invitation Designs",
    ],
  },
  {
    icon: FileText,
    title: "Content Writing",
    items: [
      "Website Content",
      "Company Profile",
      "Product Description",
      "SEO Content",
      "Blog Writing",
      "Social Media Captions",
      "Email Writing",
    ],
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    items: [
      "Logo",
      "Brand Guidelines",
      "Typography",
      "Color Palette",
      "Complete Business Branding",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    items: [
      "Social Media Management",
      "Instagram Branding",
      "Facebook Promotions",
      "LinkedIn Content",
      "Basic SEO",
    ],
  },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What We Do"
      title={<>Services built for <span className="text-gradient-brand">growth</span></>}
      subtitle="End-to-end digital services — from first concept to launch and beyond."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-gold/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-[0_10px_30px_-10px_var(--primary)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Why Choose Us ---------- */

const WHY = [
  "Professional Quality",
  "Affordable Pricing",
  "Fast Delivery",
  "Modern Designs",
  "Mobile Responsive",
  "SEO Friendly",
  "Unlimited Creativity",
  "Client Satisfaction",
  "Ongoing Support",
];

function WhyUs() {
  return (
    <Section
      id="why"
      eyebrow="Why Choose Us"
      title={<>A partner you can <span className="text-gradient-brand">trust</span></>}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w, i) => (
          <motion.div
            key={w}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-all hover:border-gold/30 hover:-translate-y-0.5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <span className="font-medium">{w}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Process ---------- */

const STEPS = [
  { icon: Compass, title: "Requirement Discussion", desc: "We listen, ask, and align on your goals." },
  { icon: FileText, title: "Planning", desc: "Scope, sitemap, timelines and deliverables." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive designs mapped to your brand." },
  { icon: Terminal, title: "Development", desc: "Clean, fast, scalable code with modern stacks." },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA across devices and browsers." },
  { icon: Rocket, title: "Launch", desc: "Smooth, confident go-live with full handover." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing care so you can focus on growing." },
];

function Process() {
  return (
    <Section
      id="process"
      eyebrow="Our Process"
      title={<>From idea to <span className="text-gradient-brand">launch</span></>}
      subtitle="A proven seven-step framework that keeps every project on track."
    >
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />
        <div className="space-y-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="md:w-1/2 md:px-10">
                  <div className="glass-card group rounded-3xl p-6 transition-all hover:border-gold/30">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-gold">Step {i + 1}</div>
                        <h3 className="text-lg font-semibold">{s.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_20px_var(--gold)] md:block" />
                <div className="md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Technologies ---------- */

const TECHS = [
  "HTML5", "CSS3", "JavaScript", "React", "Node.js", "PHP",
  "Python", "MySQL", "Git", "GitHub", "Figma", "Canva",
  "Photoshop", "WordPress", "VS Code",
];

function Technologies() {
  const row = [...TECHS, ...TECHS];
  return (
    <Section
      id="tech"
      eyebrow="Technologies"
      title={<>Built on a modern <span className="text-gradient-brand">stack</span></>}
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((t, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl px-8 py-5 text-sm font-semibold whitespace-nowrap"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Portfolio ---------- */

const PROJECTS = [
  { img: p1, name: "Aurora Commerce", desc: "Premium e-commerce experience with animated PDP.", tech: "React, Stripe, Tailwind", cat: "Website Development" },
  { img: p2, name: "Meridian Identity", desc: "Full brand identity system for a boutique studio.", tech: "Illustrator, Figma", cat: "Brand Identity" },
  { img: p3, name: "Nova Event Poster", desc: "Bold event campaign with gold-foil typography.", tech: "Photoshop, InDesign", cat: "Posters" },
  { img: p4, name: "Larra Monogram", desc: "Minimal luxury monogram for a fashion house.", tech: "Illustrator", cat: "Logo Designs" },
  { img: p5, name: "Prism Dashboard", desc: "Analytics platform for a SaaS startup.", tech: "React, TypeScript, Recharts", cat: "Website Development" },
  { img: p6, name: "Muse Social Kit", desc: "Cohesive 30-post Instagram content plan.", tech: "Canva, Copywriting", cat: "Graphic Design" },
];

const CATEGORIES = [
  "All",
  "Website Development",
  "Graphic Design",
  "Posters",
  "Logo Designs",
  "Brand Identity",
];

function Portfolio() {
  const [cat, setCat] = useState("All");
  const filtered = useMemo(
    () => (cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)),
    [cat],
  );
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title={<>Selected <span className="text-gradient-brand">work</span></>}
      subtitle="A glimpse into some of our recent projects across the digital spectrum."
    >
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              cat === c
                ? "border-transparent bg-gradient-brand text-white shadow-[0_10px_30px_-10px_var(--primary)]"
                : "border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 text-xs uppercase tracking-widest text-gold">{p.tech}</div>
                <div className="mt-5 flex gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Live Demo <ArrowRight className="h-3 w-3" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-foreground hover:border-gold/40"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

/* ---------- Testimonials ---------- */

const TESTIMONIALS = [
  { name: "Rohan Mehta", role: "Founder, Meridian Studio", quote: "SoRa delivered our brand identity ahead of schedule. Absolutely stunning work." },
  { name: "Aisha Verma", role: "CEO, Aurora Retail", quote: "Our new e-commerce site tripled conversions in the first month. Highly recommend." },
  { name: "Daniel Park", role: "CTO, Prism SaaS", quote: "Clean code, thoughtful design, and a team that actually cares. Rare combination." },
  { name: "Sana Iqbal", role: "Marketing Lead, Nova", quote: "Their social media content transformed our Instagram presence entirely." },
  { name: "Vikram Singh", role: "Owner, Larra Fashion", quote: "The monogram they crafted feels timeless. Every detail was intentional." },
  { name: "Emily Chen", role: "Product Manager", quote: "Responsive, fast, and creative. SoRa is our go-to design partner now." },
];

function Testimonials() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>Loved by <span className="text-gradient-brand">clients</span></>}
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6">
          {row.map((t, i) => (
            <div
              key={i}
              className="glass-card w-[360px] shrink-0 rounded-3xl p-7"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */

const FAQS = [
  { q: "How long does it take to build a website?", a: "Most business and portfolio websites take 2–4 weeks depending on complexity. E-commerce and custom platforms can take 4–8 weeks. We share clear timelines in the planning phase." },
  { q: "Can you redesign existing websites?", a: "Yes. We audit your current site, propose a modern design, and rebuild it with performance, SEO, and mobile responsiveness in mind — without losing your existing content or SEO value." },
  { q: "Do you provide hosting?", a: "We recommend and set up hosting on trusted providers (Vercel, Netlify, Hostinger, or your preferred host). We also handle domain configuration end-to-end." },
  { q: "Can you design logos?", a: "Absolutely. Logo design is one of our core services — from initial concept to a full brand identity system with typography, color palette, and guidelines." },
  { q: "Do you provide maintenance?", a: "Yes. We offer monthly maintenance packages including updates, backups, security patches, and small content changes so your site stays fast and secure." },
  { q: "How do we start?", a: "Simply fill the contact form or message us on WhatsApp/Instagram. We'll schedule a quick discovery call to understand your needs and share a tailored proposal within 48 hours." },
];

function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Frequently asked <span className="text-gradient-brand">questions</span></>}
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`i-${i}`}
              className="rounded-2xl glass-card border border-white/10 px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [service, setService] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setService("");
  };
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient-brand">remarkable</span></>}
      subtitle="Tell us about your project — we'll respond within 24 hours."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <Input required name="name" placeholder="Jane Doe" className="h-12 rounded-xl border-white/10 bg-white/5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input required type="email" name="email" placeholder="jane@company.com" className="h-12 rounded-xl border-white/10 bg-white/5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Phone Number</label>
              <Input required name="phone" placeholder="+91 00000 00000" className="h-12 rounded-xl border-white/10 bg-white/5" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">Service Required</label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="h-12 rounded-xl border-white/10 bg-white/5">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICES.map((s) => (
                    <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">Message</label>
              <Textarea required name="message" rows={5} placeholder="Tell us about your project…" className="rounded-xl border-white/10 bg-white/5" />
            </div>
          </div>
          <div className="mt-6">
            <BrandButton type="submit" variant="primary">
              Send Message <Send className="h-4 w-4" />
            </BrandButton>
          </div>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card flex flex-col justify-between rounded-3xl p-8 lg:col-span-2"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src={logo} alt="SoRa" width={44} height={44} className="h-11 w-11" />
              <div>
                <div className="text-base font-semibold">SoRa Innovative</div>
                <div className="text-xs text-muted-foreground">Innovate • Create • Deliver</div>
              </div>
            </div>
            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email" value="sorafs.work@gmail.com" href="mailto:sorafs.work@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 77087 04523" href="tel:+917708704523" />
              <ContactRow icon={MessageCircle} label="WhatsApp" value="+91 77087 04523" href="https://wa.me/917708704523" />
              <ContactRow icon={Instagram} label="Instagram" value="@sora_official_id" href="https://instagram.com/sora_official_id" />
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-muted-foreground">
            Prefer real-time? Ping us on WhatsApp — we usually reply within an hour during business hours.
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: any; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-gold/30 hover:-translate-y-0.5"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-brand" />
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-48 bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_60%)] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -z-10 h-48 bg-[radial-gradient(ellipse_at_center,var(--gold)_0%,transparent_60%)] opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <motion.img
                src={logo}
                alt="SoRa"
                width={44}
                height={44}
                className="h-11 w-11 drop-shadow-[0_0_16px_var(--primary)]"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div>
                <div className="font-display text-lg font-semibold bg-gradient-brand bg-clip-text text-transparent">
                  SoRa Innovative Solutions
                </div>
                <div className="text-xs text-muted-foreground">Innovate • Create • Deliver</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              A modern digital agency helping brands grow through design, code, and creativity.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Services", href: "#services" },
                { label: "Works", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <motion.a
                    href={l.href}
                    whileHover={{ x: 6, scale: 1.05 }}
                    className="inline-block hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-gold">Get in touch</div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li>sorafs.work@gmail.com</li>
              <li>+91 77087 04523</li>
              <li>@sora_official_id</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/sora_official_id" },
                { icon: MessageCircle, href: "https://wa.me/917708704523" },
                { icon: Mail, href: "mailto:sorafs.work@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.15, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-white shadow-[0_10px_25px_-10px_var(--primary)]"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-6 text-xs text-muted-foreground sm:flex-row" style={{ borderTop: "1px solid transparent", backgroundImage: "linear-gradient(var(--background), var(--background)), var(--gradient-brand)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
          <div>Copyright © 2026 SoRa Innovative Solutions. All Rights Reserved.</div>
          <div>Crafted with care.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function SoRaOfferModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-sora-offer", handler);
    return () => window.removeEventListener("open-sora-offer", handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const perks = [
    "30% OFF on your first project",
    "Free logo concept with any website",
    "Priority delivery & unlimited revisions",
    "Complimentary 1-month support",
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-card p-1"
            style={{
              backgroundImage:
                "linear-gradient(var(--card), var(--card)), var(--gradient-brand)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {/* Glow blobs */}
            <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative p-8 sm:p-10 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 12 }}
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand shadow-[0_10px_40px_-10px_var(--primary)]"
              >
                <Gift className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold"
              >
                <Sparkles className="h-3 w-3" /> Limited Time
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                Exclusive <span className="text-gradient-brand">SoRa Offer</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground sm:text-base"
              >
                Launch your brand with a premium package — built to make your business shine.
              </motion.p>

              <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
                {perks.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              >
                <BrandButton
                  variant="primary"
                  onClick={() => {
                    setOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Claim Offer <ArrowRight className="h-4 w-4" />
                </BrandButton>
                <BrandButton variant="ghost" onClick={() => setOpen(false)}>
                  Maybe later
                </BrandButton>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Technologies />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <SoRaOfferModal />
    </div>
  );
}
