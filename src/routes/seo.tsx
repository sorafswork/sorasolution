import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Compass,
  FileSearch,
  Gauge,
  Globe2,
  Layers3,
  LineChart,
  MapPin,
  MousePointer2,
  Search,
  Settings2,
  Sparkles,
  Target,
} from "lucide-react";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/seo")({
  head: () =>
    pageSeo({
      path: "/seo",
      title: "SEO Services — SoRa Innovative Solution",
      description:
        "Improve your search visibility and reach relevant customers with considered SEO services from SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: SeoExperience,
});

const sections = [
  ["overview", "Overview"],
  ["gain", "What You Gain"],
  ["services", "Services"],
  ["process", "Process"],
  ["visibility", "Visibility"],
  ["reporting", "Reporting"],
  ["faq", "FAQ"],
  ["seo-contact", "Contact"],
] as const;

const serviceItems = [
  { Icon: Target, title: "Keyword Research", desc: "Understand the words and questions your customers use to find solutions." },
  { Icon: FileSearch, title: "On-Page SEO", desc: "Make each page clearer for visitors and easier for search engines to understand." },
  { Icon: Settings2, title: "Technical SEO", desc: "Address crawlability, site structure, performance and technical foundations." },
  { Icon: MapPin, title: "Local SEO", desc: "Strengthen local discovery for the areas and communities you serve." },
  { Icon: Layers3, title: "Content SEO", desc: "Shape useful content around real search intent and business expertise." },
  { Icon: Search, title: "Google Search Console", desc: "Review search appearance, indexing signals and opportunities from your site." },
  { Icon: Activity, title: "Analytics", desc: "Connect search activity with meaningful visits and customer journeys." },
  { Icon: BarChart3, title: "SEO Reporting", desc: "See progress and priorities through clear, useful reporting." },
];

const gains = [
  "More visibility",
  "Relevant traffic",
  "Local discoverability",
  "More opportunities",
  "Long-term organic growth",
];

const processSteps = [
  ["AUDIT", "Understand the current website."],
  ["RESEARCH", "Find relevant search opportunities."],
  ["OPTIMIZE", "Improve technical and on-page elements."],
  ["CONTENT", "Build useful search-focused content."],
  ["MONITOR", "Track visibility and performance."],
  ["IMPROVE", "Continuously refine the strategy."],
];

const faqs = [
  ["What is SEO?", "Search engine optimization improves how clearly a website serves visitors and how easily search engines can discover and understand its pages."],
  ["How long does SEO take?", "SEO is an ongoing process. Timing varies with your website, competition, current visibility and the work required; meaningful changes are rarely immediate."],
  ["What is Local SEO?", "Local SEO helps businesses become more discoverable in location-related searches by improving relevant website and local business information."],
  ["Can SEO help small businesses?", "Yes. A focused strategy can help small businesses make their expertise, services and service areas easier to find online."],
  ["How do you measure SEO?", "We review relevant indicators such as clicks, impressions, search queries, landing pages and the quality of resulting enquiries."],
  ["Do you guarantee Google rankings?", "No. Search rankings are controlled by search engines and can change. We focus on clear, sustainable improvements and transparent reporting, never guaranteed positions."],
];

type BrowserMockupProps = {
  label: string;
  address: string;
  placeholder: string;
  caption?: string;
  dashboard?: boolean;
};

/** One reusable browser frame for all supplied-later screenshot placements. */
function BrowserMockup({ label, address, placeholder, caption, dashboard = false }: BrowserMockupProps) {
  return (
    <figure className="seo-browser-wrap">
      <div className="seo-browser" aria-label={label}>
        <div className="seo-browser-bar" aria-hidden="true">
          <span className="seo-browser-dots"><i /><i /><i /></span>
          <span className="seo-browser-address"><Search aria-hidden="true" />{address}</span>
          <span className="seo-browser-menu">•••</span>
        </div>
        {dashboard && <div className="seo-dashboard-tabs" aria-hidden="true"><span>Overview</span><span>Performance</span><span>Pages</span></div>}
        <div className={`seo-media-slot${dashboard ? " seo-media-slot-dashboard" : ""}`}>
          {dashboard ? (
            <>
              <div className="seo-metric-grid">
                {["Organic Traffic", "Clicks", "Impressions", "CTR", "Keywords", "Pages"].map((metric) => (
                  <div className="seo-metric" key={metric}><span>{metric}</span><strong>--</strong><small>Awaiting real data</small></div>
                ))}
              </div>
              <div className="seo-chart-placeholder" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            </>
          ) : (
            <div className="seo-placeholder-label"><span className="seo-placeholder-icon"><Globe2 aria-hidden="true" /></span><span>{placeholder}</span><small>Media will be added when supplied</small></div>
          )}
        </div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function SectionHeading({ eyebrow, children, body }: { eyebrow: string; children: React.ReactNode; body?: string }) {
  return (
    <div className="seo-section-heading">
      <span className="seo-eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function SeoExperience() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <div className="seo-experience">
      <style>{`
        .seo-experience{--seo-night:color-mix(in oklab,var(--background) 94%,black);--seo-panel:color-mix(in oklab,var(--card) 72%,transparent);--seo-line:color-mix(in oklab,var(--accent) 23%,var(--border));--seo-glow:color-mix(in oklab,var(--accent) 20%,transparent);--seo-dim:color-mix(in oklab,var(--foreground) 57%,transparent);position:relative;overflow:clip;background:var(--seo-night);color:var(--foreground);font-family:var(--font-sans)}
        .seo-experience *{box-sizing:border-box}
        .seo-experience a{color:inherit;text-decoration:none}
        .seo-experience section[id]{scroll-margin-top:8rem}
        .seo-experience .seo-container{width:min(1160px,calc(100% - 48px));margin-inline:auto}
        .seo-experience .seo-hero{min-height:100svh;display:grid;align-items:center;position:relative;isolation:isolate;padding:7rem 0 5rem;background:radial-gradient(ellipse at 72% 45%,color-mix(in oklab,var(--primary) 23%,transparent),transparent 38%),radial-gradient(ellipse at 23% 82%,color-mix(in oklab,var(--accent) 13%,transparent),transparent 30%),linear-gradient(125deg,var(--seo-night),color-mix(in oklab,var(--background) 75%,var(--primary)) 58%,var(--seo-night))}
        .seo-experience .seo-hero::before{content:"";position:absolute;inset:0;z-index:-1;opacity:.32;background-image:linear-gradient(var(--seo-line) 1px,transparent 1px),linear-gradient(90deg,var(--seo-line) 1px,transparent 1px);background-size:76px 76px;mask-image:linear-gradient(to bottom,transparent,black 30%,black 75%,transparent)}
        .seo-experience .seo-hero::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,var(--seo-night) 3%,color-mix(in oklab,var(--seo-night) 72%,transparent) 57%,color-mix(in oklab,var(--seo-night) 40%,transparent)),linear-gradient(0deg,var(--seo-night),transparent 34%,transparent 72%,var(--seo-night))}
        .seo-experience .seo-video-placeholder{position:absolute;inset:0;z-index:-2;display:grid;place-items:center;color:color-mix(in oklab,var(--accent) 30%,transparent);font-family:var(--font-display);font-size:clamp(1.5rem,4vw,3.5rem);font-weight:700;letter-spacing:0;pointer-events:none}
        .seo-experience .seo-hero-content{max-width:900px;position:relative;animation:seo-rise .8s ease both}
        .seo-experience .seo-kicker,.seo-experience .seo-eyebrow{display:inline-flex;align-items:center;gap:.7rem;color:var(--accent);font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.16em}
        .seo-experience .seo-kicker::before{content:"";width:25px;height:1px;background:var(--accent);box-shadow:0 0 12px var(--accent)}
        .seo-experience .seo-hero h1{max-width:840px;margin:1.7rem 0 1.25rem;font-family:var(--font-display);font-size:clamp(3.35rem,9vw,7.8rem);line-height:.91;font-weight:700;letter-spacing:0}
        .seo-experience .seo-hero h1 span{display:block;color:var(--accent);text-shadow:0 0 42px var(--seo-glow)}
        .seo-experience .seo-hero-copy{max-width:620px;color:var(--seo-dim);font-size:clamp(1rem,2vw,1.18rem);line-height:1.75}
        .seo-experience .seo-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:2rem}
        .seo-experience .seo-button{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:.7rem;padding:.85rem 1.2rem;border:1px solid var(--seo-line);border-radius:4px;background:linear-gradient(135deg,var(--primary),color-mix(in oklab,var(--accent) 68%,var(--primary)));color:var(--primary-foreground);font-size:.77rem;font-weight:800;letter-spacing:.07em;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
        .seo-experience .seo-button:hover{transform:translateY(-3px);box-shadow:0 10px 34px var(--seo-glow);border-color:var(--accent)}
        .seo-experience .seo-button-secondary{background:color-mix(in oklab,var(--background) 65%,transparent);color:var(--foreground)}
        .seo-experience .seo-button svg{width:16px;height:16px}
        .seo-experience .seo-scroll-cue{position:absolute;bottom:1.6rem;left:50%;display:grid;justify-items:center;gap:.55rem;color:var(--seo-dim);font-size:.62rem;text-transform:uppercase;letter-spacing:.14em;transform:translateX(-50%)}
        .seo-experience .seo-scroll-cue svg{width:17px;height:17px;color:var(--accent);animation:seo-bob 1.7s ease-in-out infinite}
        .seo-experience .seo-subnav{position:sticky;top:5rem;z-index:25;border-block:1px solid var(--seo-line);background:color-mix(in oklab,var(--seo-night) 88%,transparent);backdrop-filter:blur(14px)}
        .seo-experience .seo-subnav-inner{width:min(1160px,calc(100% - 32px));margin:auto;display:flex;align-items:center;gap:1.5rem;min-height:54px;overflow-x:auto;scrollbar-width:thin}
        .seo-experience .seo-subnav-brand{flex:none;color:var(--accent)!important;font-family:var(--font-display);font-size:.76rem;font-weight:800;letter-spacing:.08em}
        .seo-experience .seo-subnav a:not(.seo-subnav-brand){flex:none;padding:.95rem .2rem;color:var(--seo-dim);font-size:.7rem;font-weight:650;transition:color .2s ease}
        .seo-experience .seo-subnav a:hover{color:var(--foreground)}
        .seo-experience .seo-section{position:relative;padding:clamp(4.7rem,9vw,8rem) 0}
        .seo-experience .seo-section:nth-of-type(even){background:linear-gradient(180deg,color-mix(in oklab,var(--primary) 5%,transparent),transparent 42%,color-mix(in oklab,var(--accent) 3%,transparent))}
        .seo-experience .seo-section-heading{max-width:760px;margin:0 auto 3rem;text-align:center}
        .seo-experience .seo-section-heading h2{margin:.8rem 0 1rem;font-family:var(--font-display);font-size:clamp(2rem,5.5vw,4.2rem);line-height:1.04;font-weight:700;letter-spacing:0}
        .seo-experience .seo-section-heading p{max-width:640px;margin:0 auto;color:var(--seo-dim);font-size:1rem;line-height:1.75}
        .seo-experience .seo-eyebrow{font-size:.68rem}
        .seo-experience .seo-search-panel{max-width:850px;margin:0 auto 2.4rem;padding:14px;border:1px solid var(--seo-line);border-radius:7px;background:linear-gradient(135deg,color-mix(in oklab,var(--card) 76%,transparent),color-mix(in oklab,var(--primary) 9%,transparent));box-shadow:0 22px 70px color-mix(in oklab,var(--seo-night) 45%,transparent),0 0 44px color-mix(in oklab,var(--primary) 8%,transparent)}
        .seo-experience .seo-searchbar{min-height:62px;display:flex;align-items:center;gap:15px;padding:0 18px;border:1px solid var(--seo-line);border-radius:4px;background:color-mix(in oklab,var(--seo-night) 85%,transparent)}
        .seo-experience .seo-searchbar svg{flex:none;color:var(--accent)}
        .seo-experience .seo-searchbar span{color:var(--foreground);font-size:clamp(.87rem,2vw,1.05rem)}
        .seo-experience .seo-flow{display:grid;grid-template-columns:repeat(5,1fr);align-items:center;gap:10px}
        .seo-experience .seo-flow-step{display:flex;align-items:center;justify-content:center;gap:9px;color:var(--accent);font-size:.68rem;font-weight:750;letter-spacing:.08em;text-align:center;animation:seo-pulse 3s ease-in-out infinite}
        .seo-experience .seo-flow-step:nth-child(2){animation-delay:.35s}.seo-experience .seo-flow-step:nth-child(3){animation-delay:.7s}.seo-experience .seo-flow-step:nth-child(4){animation-delay:1.05s}.seo-experience .seo-flow-step:nth-child(5){animation-delay:1.4s}
        .seo-experience .seo-flow-step svg{width:14px;height:14px;color:var(--seo-dim)}
        .seo-experience .seo-two-col{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(2rem,6vw,5rem)}
        .seo-experience .seo-two-col .seo-section-heading{text-align:left;margin:0}
        .seo-experience .seo-two-col .seo-section-heading p{margin:0}
        .seo-experience .seo-browser-wrap{width:100%;margin:0}
        .seo-experience .seo-browser{overflow:hidden;border:1px solid var(--seo-line);border-radius:8px;background:color-mix(in oklab,var(--card) 73%,var(--seo-night));box-shadow:0 20px 65px color-mix(in oklab,var(--seo-night) 57%,transparent),0 0 34px color-mix(in oklab,var(--primary) 10%,transparent);animation:seo-rise .7s ease both}
        .seo-experience .seo-browser-bar{min-height:48px;display:grid;grid-template-columns:58px minmax(0,1fr) 45px;align-items:center;gap:10px;padding:0 13px;border-bottom:1px solid var(--seo-line);background:color-mix(in oklab,var(--card) 83%,var(--seo-night))}
        .seo-experience .seo-browser-dots{display:flex;gap:5px}.seo-experience .seo-browser-dots i{display:block;width:8px;height:8px;border-radius:50%;background:var(--primary)}.seo-experience .seo-browser-dots i:nth-child(2){background:var(--accent)}.seo-experience .seo-browser-dots i:nth-child(3){background:var(--muted-foreground)}
        .seo-experience .seo-browser-address{min-width:0;display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid var(--seo-line);border-radius:4px;color:var(--seo-dim);font-size:.69rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .seo-experience .seo-browser-address svg{width:13px;height:13px;flex:none;color:var(--accent)}.seo-experience .seo-browser-menu{color:var(--seo-dim);text-align:right}
        .seo-experience .seo-media-slot{aspect-ratio:16/9;min-height:230px;display:grid;place-items:center;padding:20px;background:radial-gradient(ellipse at 50% 50%,color-mix(in oklab,var(--primary) 10%,transparent),transparent 65%),linear-gradient(145deg,color-mix(in oklab,var(--seo-night) 82%,var(--primary)),var(--seo-night))}
        .seo-experience .seo-placeholder-label{display:grid;justify-items:center;gap:10px;color:var(--seo-dim);font-size:.85rem;text-align:center}.seo-experience .seo-placeholder-label>span:nth-child(2){color:var(--foreground);font-size:1rem;font-weight:700}.seo-experience .seo-placeholder-label small{font-size:.72rem}
        .seo-experience .seo-placeholder-icon{width:44px;height:44px;display:grid;place-items:center;border:1px solid var(--seo-line);border-radius:50%;color:var(--accent);background:color-mix(in oklab,var(--primary) 11%,transparent)}.seo-experience .seo-placeholder-icon svg{width:19px;height:19px}
        .seo-experience figcaption{margin-top:13px;color:var(--seo-dim);font-size:.78rem;line-height:1.6}
        .seo-experience .seo-discovery-list{display:grid;gap:0;margin:1.6rem 0 0;padding:0;list-style:none;border-top:1px solid var(--seo-line)}
        .seo-experience .seo-discovery-list li{display:grid;grid-template-columns:42px 1fr;align-items:center;gap:12px;padding:17px 0;border-bottom:1px solid var(--seo-line)}
        .seo-experience .seo-discovery-list strong{color:var(--accent);font-family:var(--font-display);font-size:.85rem}.seo-experience .seo-discovery-list span{font-size:.81rem;font-weight:750;letter-spacing:.08em}
        .seo-experience .seo-gains{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}
        .seo-experience .seo-gain{min-height:190px;display:flex;flex-direction:column;justify-content:space-between;padding:19px;border:1px solid var(--seo-line);border-radius:5px;background:linear-gradient(145deg,var(--seo-panel),color-mix(in oklab,var(--primary) 4%,transparent));transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}
        .seo-experience .seo-gain:hover{transform:translateY(-5px);border-color:var(--accent);box-shadow:0 12px 38px var(--seo-glow)}.seo-experience .seo-gain>span:first-child{color:var(--accent);font-family:var(--font-display);font-size:.76rem;font-weight:800}.seo-experience .seo-gain strong{max-width:170px;font-family:var(--font-display);font-size:1.03rem;line-height:1.3;text-transform:uppercase;letter-spacing:0}.seo-experience .seo-gain svg{width:20px;height:20px;color:var(--accent)}
        .seo-experience .seo-service-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
        .seo-experience .seo-service{min-height:208px;padding:20px;border:1px solid var(--seo-line);border-radius:5px;background:linear-gradient(145deg,var(--seo-panel),color-mix(in oklab,var(--primary) 4%,transparent));transition:transform .3s ease,border-color .3s ease,background .3s ease}.seo-experience .seo-service:hover{transform:translateY(-4px);border-color:var(--accent);background:linear-gradient(145deg,color-mix(in oklab,var(--primary) 14%,var(--card)),var(--seo-panel))}.seo-experience .seo-service-top{display:flex;align-items:center;justify-content:space-between;color:var(--accent);font-family:var(--font-display);font-size:.73rem;font-weight:800}.seo-experience .seo-service-top svg{width:20px;height:20px}.seo-experience .seo-service h3{margin:1.4rem 0 .6rem;font-family:var(--font-display);font-size:1.03rem;letter-spacing:0}.seo-experience .seo-service p{margin:0;color:var(--seo-dim);font-size:.8rem;line-height:1.65}
        .seo-experience .seo-timeline{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));position:relative;gap:16px}.seo-experience .seo-timeline::before{content:"";position:absolute;top:22px;left:4%;right:4%;height:1px;background:linear-gradient(90deg,var(--primary),var(--accent),var(--primary));opacity:.6}.seo-experience .seo-time-step{position:relative;padding-top:54px}.seo-experience .seo-time-dot{position:absolute;top:13px;left:0;width:18px;height:18px;border:4px solid var(--seo-night);border-radius:50%;background:var(--accent);box-shadow:0 0 0 1px var(--accent),0 0 19px var(--seo-glow)}.seo-experience .seo-time-step strong{display:block;color:var(--accent);font-family:var(--font-display);font-size:.77rem;letter-spacing:.08em}.seo-experience .seo-time-step p{margin:.55rem 0 0;color:var(--seo-dim);font-size:.82rem;line-height:1.6}
        .seo-experience .seo-dashboard-tabs{display:flex;gap:22px;padding:11px 16px;border-bottom:1px solid var(--seo-line);color:var(--seo-dim);font-size:.67rem}.seo-experience .seo-dashboard-tabs span:first-child{color:var(--accent)}.seo-experience .seo-media-slot-dashboard{display:block;aspect-ratio:auto;min-height:365px;padding:18px}.seo-experience .seo-metric-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px}.seo-experience .seo-metric{min-height:88px;display:flex;flex-direction:column;justify-content:center;gap:5px;padding:11px;border:1px solid var(--seo-line);border-radius:4px;background:color-mix(in oklab,var(--card) 62%,transparent)}.seo-experience .seo-metric span,.seo-experience .seo-metric small{color:var(--seo-dim);font-size:.65rem}.seo-experience .seo-metric strong{font-size:1.15rem;color:var(--foreground)}.seo-experience .seo-metric small{font-size:.59rem}
        .seo-experience .seo-chart-placeholder{height:105px;display:flex;align-items:end;gap:8px;margin-top:12px;padding:10px;border:1px solid var(--seo-line);background:linear-gradient(180deg,color-mix(in oklab,var(--primary) 6%,transparent),transparent)}.seo-experience .seo-chart-placeholder span{flex:1;height:35%;border-top:1px solid var(--accent);opacity:.4}.seo-experience .seo-chart-placeholder span:nth-child(2n){height:58%}.seo-experience .seo-chart-placeholder span:nth-child(3n){height:76%}
        .seo-experience .seo-console-layout{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,6vw,5rem);align-items:center}.seo-experience .seo-metric-list{display:grid;gap:0;margin:1rem 0 0;padding:0;list-style:none;border-top:1px solid var(--seo-line)}.seo-experience .seo-metric-list li{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--seo-line);font-size:.84rem}.seo-experience .seo-metric-list li span:last-child{color:var(--accent);font-family:var(--font-display);font-weight:700}
        .seo-experience .seo-before-after{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--seo-line);border-radius:6px;overflow:hidden}.seo-experience .seo-visibility-panel{min-height:260px;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(20px,4vw,38px);background:radial-gradient(ellipse at 75% 42%,color-mix(in oklab,var(--primary) 18%,transparent),transparent 52%),var(--seo-night)}.seo-experience .seo-visibility-panel+ .seo-visibility-panel{border-left:1px solid var(--seo-line);background:radial-gradient(ellipse at 75% 42%,color-mix(in oklab,var(--accent) 19%,transparent),transparent 52%),color-mix(in oklab,var(--primary) 8%,var(--seo-night))}.seo-experience .seo-visibility-label{color:var(--seo-dim);font-size:.68rem;font-weight:750;letter-spacing:.1em}.seo-experience .seo-visibility-panel strong{font-family:var(--font-display);font-size:clamp(1.15rem,3vw,2rem);line-height:1.2;text-transform:uppercase}.seo-experience .seo-visibility-symbol{align-self:flex-start;width:44px;height:44px;display:grid;place-items:center;border:1px solid var(--seo-line);border-radius:50%;color:var(--accent)}
        .seo-experience .seo-opportunity{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));align-items:center;gap:8px}.seo-experience .seo-opportunity-step{min-height:92px;display:grid;place-items:center;padding:12px;border:1px solid var(--seo-line);border-radius:4px;background:var(--seo-panel);color:var(--foreground);font-size:.68rem;font-weight:800;letter-spacing:.05em;text-align:center}.seo-experience .seo-opportunity-step:nth-child(odd){border-color:color-mix(in oklab,var(--accent) 46%,var(--border));box-shadow:0 0 24px color-mix(in oklab,var(--primary) 8%,transparent)}.seo-experience .seo-opportunity-step svg{width:15px;height:15px;margin-bottom:6px;color:var(--accent)}
        .seo-experience .seo-future-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.seo-experience .seo-future-grid .seo-media-slot{min-height:210px;aspect-ratio:4/3}.seo-experience .seo-future-grid .seo-placeholder-label>span:nth-child(2){font-size:.8rem}
        .seo-experience .seo-faq-list{max-width:850px;margin:auto;border-top:1px solid var(--seo-line)}.seo-experience .seo-faq-item{border-bottom:1px solid var(--seo-line)}.seo-experience .seo-faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 2px;border:0;background:transparent;color:var(--foreground);font:600 1rem var(--font-sans);text-align:left;cursor:pointer}.seo-experience .seo-faq-question svg{width:17px;height:17px;flex:none;color:var(--accent);transition:transform .2s ease}.seo-experience .seo-faq-question[aria-expanded=true] svg{transform:rotate(180deg)}.seo-experience .seo-faq-answer{padding:0 35px 19px 2px;color:var(--seo-dim);font-size:.9rem;line-height:1.75}
        .seo-experience .seo-final-cta{position:relative;overflow:hidden;padding:clamp(4.5rem,10vw,8rem) 0;text-align:center;background:radial-gradient(ellipse at 50% 100%,color-mix(in oklab,var(--primary) 26%,transparent),transparent 60%),linear-gradient(180deg,var(--seo-night),color-mix(in oklab,var(--background) 82%,var(--primary)))}.seo-experience .seo-final-cta h2{max-width:780px;margin:1rem auto;font-family:var(--font-display);font-size:clamp(2.8rem,8vw,6.7rem);line-height:.98;letter-spacing:0}.seo-experience .seo-final-cta p{margin:0 auto;color:var(--seo-dim);font-size:1.05rem}.seo-experience .seo-final-cta .seo-actions{justify-content:center}
        @keyframes seo-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes seo-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}@keyframes seo-pulse{0%,100%{opacity:.68}50%{opacity:1}}
        @media(max-width:900px){.seo-experience .seo-service-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.seo-experience .seo-gains{grid-template-columns:repeat(3,minmax(0,1fr))}.seo-experience .seo-gain{min-height:155px}.seo-experience .seo-timeline{grid-template-columns:repeat(3,minmax(0,1fr));row-gap:30px}.seo-experience .seo-timeline::before{display:none}.seo-experience .seo-time-step{padding-top:35px}.seo-experience .seo-time-dot{top:0}}
        @media(max-width:640px){.seo-experience .seo-container{width:min(100% - 32px,1160px)}.seo-experience .seo-hero{min-height:calc(100svh - 5rem);padding:6rem 0 5rem}.seo-experience .seo-hero h1{font-size:clamp(3rem,15vw,5.2rem)}.seo-experience .seo-scroll-cue{bottom:1rem}.seo-experience .seo-subnav{top:4.5rem}.seo-experience .seo-subnav-inner{gap:1.15rem}.seo-experience .seo-section{padding:4.5rem 0}.seo-experience .seo-section-heading{margin-bottom:2rem}.seo-experience .seo-two-col,.seo-experience .seo-console-layout{grid-template-columns:1fr;gap:2rem}.seo-experience .seo-two-col .seo-section-heading{text-align:left}.seo-experience .seo-flow{grid-template-columns:1fr;gap:9px}.seo-experience .seo-flow-step{justify-content:flex-start}.seo-experience .seo-flow-step svg{transform:rotate(90deg)}.seo-experience .seo-search-panel{padding:9px}.seo-experience .seo-searchbar{min-height:54px;padding:0 12px}.seo-experience .seo-gains{grid-template-columns:repeat(2,minmax(0,1fr))}.seo-experience .seo-gain{min-height:145px;padding:14px}.seo-experience .seo-service-grid{gap:9px}.seo-experience .seo-service{min-height:210px;padding:15px}.seo-experience .seo-service h3{font-size:.94rem}.seo-experience .seo-timeline{grid-template-columns:1fr;gap:0}.seo-experience .seo-timeline::before{display:block;top:6px;bottom:5px;left:8px;right:auto;width:1px;height:auto}.seo-experience .seo-time-step{min-height:98px;padding:0 0 20px 35px}.seo-experience .seo-time-dot{top:2px;left:0;width:17px;height:17px}.seo-experience .seo-media-slot-dashboard{min-height:310px;padding:12px}.seo-experience .seo-metric-grid{gap:6px}.seo-experience .seo-metric{min-height:80px;padding:8px}.seo-experience .seo-metric span{font-size:.58rem}.seo-experience .seo-metric small{font-size:.52rem}.seo-experience .seo-before-after{grid-template-columns:1fr}.seo-experience .seo-visibility-panel{min-height:200px}.seo-experience .seo-visibility-panel+.seo-visibility-panel{border-left:0;border-top:1px solid var(--seo-line)}.seo-experience .seo-opportunity{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.seo-experience .seo-future-grid{grid-template-columns:1fr}.seo-experience .seo-future-grid .seo-media-slot{min-height:190px}.seo-experience .seo-final-cta .seo-actions{align-items:stretch;flex-direction:column}.seo-experience .seo-final-cta .seo-button{width:100%}}
        @media(prefers-reduced-motion:reduce){.seo-experience *, .seo-experience *::before,.seo-experience *::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
      `}</style>

      <section id="overview" className="seo-hero">
        <div className="seo-video-placeholder" aria-hidden="true">[SEO CINEMATIC VIDEO]</div>
        <div className="seo-container">
          <div className="seo-hero-content">
            <span className="seo-kicker">SEARCH · DISCOVERY · GROWTH</span>
            <h1>GET FOUND.<span>GET CHOSEN.</span></h1>
            <p className="seo-hero-copy">We help businesses improve their visibility on search, attract relevant visitors and turn online discovery into meaningful business opportunities.</p>
            <div className="seo-actions">
              <Link to="/contact" className="seo-button">GET YOUR SEO AUDIT <ArrowUpRight aria-hidden="true" /></Link>
              <a href="#search-flow" className="seo-button seo-button-secondary">EXPLORE SEO <ArrowDown aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <a href="#search-flow" className="seo-scroll-cue" aria-label="Scroll to explore SEO"><span>Scroll to explore</span><ArrowDown aria-hidden="true" /></a>
      </section>

      <nav className="seo-subnav" aria-label="SEO page sections">
        <div className="seo-subnav-inner">
          <a className="seo-subnav-brand" href="#overview">SEO</a>
          {sections.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div>
      </nav>

      <section id="search-flow" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="The discovery path" body="A clear path connects the question someone asks with the business ready to help.">SEARCH BECOMES DISCOVERY</SectionHeading>
          <div className="seo-search-panel">
            <div className="seo-searchbar"><Search aria-hidden="true" /><span>website development company near me</span></div>
          </div>
          <div className="seo-flow" aria-label="Search to enquiry: Search, Discovery, Visibility, Traffic, Enquiry">
            {["SEARCH", "DISCOVERY", "VISIBILITY", "TRAFFIC", "ENQUIRY"].map((step, index) => <div className="seo-flow-step" key={step}>{index > 0 && <ArrowRight aria-hidden="true" />}<span>{step}</span></div>)}
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container seo-two-col">
          <SectionHeading eyebrow="How your business appears" body="Search visibility starts with being discoverable. Use this space for your real search screenshot when it is ready.">MAKE THE FIRST DISCOVERY COUNT</SectionHeading>
          <BrowserMockup label="Browser frame reserved for a real Google search screenshot" address="Search / Browser" placeholder="[GOOGLE SEARCH SCREENSHOT]" caption="Search visibility starts with being discoverable." />
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container seo-two-col">
          <BrowserMockup label="Browser frame reserved for a real search result screenshot" address="Search results" placeholder="[SEARCH RESULT SCREENSHOT]" caption="SEO helps improve how your business can be discovered through relevant searches." />
          <div>
            <SectionHeading eyebrow="When your customers search" body="Each part of the journey helps turn a useful search into a possible next step.">WHEN YOUR CUSTOMERS SEARCH, WILL THEY FIND YOU?</SectionHeading>
            <ol className="seo-discovery-list">{["DISCOVERABILITY", "RELEVANCE", "VISIBILITY", "ACTION"].map((item, i) => <li key={item}><strong>0{i + 1}</strong><span>{item}</span></li>)}</ol>
          </div>
        </div>
      </section>

      <section id="gain" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="A stronger search presence" body="Organic search can support sustainable discovery by helping the right people find useful answers and services.">WHAT SEO CAN HELP YOU GAIN</SectionHeading>
          <div className="seo-gains">{gains.map((gain, i) => <article className="seo-gain" key={gain}><span>0{i + 1}</span><strong>{gain}</strong><ArrowUpRight aria-hidden="true" /></article>)}</div>
        </div>
      </section>

      <section id="services" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="The SEO system" body="A considered set of practices, matched to your website and the people you want to reach.">THE SEO SYSTEM</SectionHeading>
          <div className="seo-service-grid">{serviceItems.map(({ Icon, title, desc }, i) => <article className="seo-service" key={title}><div className="seo-service-top"><span>0{i + 1}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section id="process" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="A clear, continuous cycle" body="Each stage informs the next, with priorities shaped by your goals and real performance data.">SEO PROCESS</SectionHeading>
          <ol className="seo-timeline">{processSteps.map(([title, description], i) => <li className="seo-time-step" key={title}><span className="seo-time-dot" aria-hidden="true" /><strong>0{i + 1} — {title}</strong><p>{description}</p></li>)}</ol>
        </div>
      </section>

      <section id="visibility" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="A concept, not a ranking claim" body="SEO is an ongoing journey from less discoverable to better prepared for relevant searches.">FROM INVISIBLE TO DISCOVERABLE</SectionHeading>
          <div className="seo-before-after">
            <div className="seo-visibility-panel"><span className="seo-visibility-label">CURRENT VISIBILITY</span><span className="seo-visibility-symbol"><Search aria-hidden="true" /></span><strong>Start with what exists.</strong></div>
            <div className="seo-visibility-panel"><span className="seo-visibility-label">OPTIMIZED VISIBILITY</span><span className="seo-visibility-symbol"><Compass aria-hidden="true" /></span><strong>Make the next step clearer.</strong></div>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="Connected opportunities" body="A lightweight view of how the key parts of a search journey work together.">A SEARCH OPPORTUNITY MAP</SectionHeading>
          <div className="seo-opportunity">{[[Search, "SEARCH"], [Globe2, "WEBSITE"], [Layers3, "CONTENT"], [MapPin, "LOCAL"], [LineChart, "VISIBILITY"], [MousePointer2, "ENQUIRY"]].map(([Icon, label], i) => { const ItemIcon = Icon as typeof Search; return <div className="seo-opportunity-step" key={label as string}><span><ItemIcon aria-hidden="true" /></span>{label as string}{i < 5 && <ChevronDown className="seo-mobile-flow" aria-hidden="true" />}</div>; })}</div>
        </div>
      </section>

      <section id="reporting" className="seo-section">
        <div className="seo-container seo-console-layout">
          <BrowserMockup label="SEO dashboard placeholder without invented metrics" address="Analytics / Overview" placeholder="" dashboard caption="Clear reporting. Better decisions." />
          <div>
            <SectionHeading eyebrow="Measure what matters" body="Use your real Search Console data to understand where discovery is happening and what to improve next.">MEASURE WHAT MATTERS.</SectionHeading>
            <ul className="seo-metric-list">{["Clicks", "Impressions", "CTR", "Search Queries", "Top Pages"].map((metric) => <li key={metric}><span>{metric}</span><span>--</span></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="Ready for your real materials" body="Replace these reserved spaces with your screenshots and reports when available.">REAL SEO. REAL VISIBILITY.</SectionHeading>
          <div className="seo-future-grid">
            <BrowserMockup label="Reserved browser frame for a Google search screenshot" address="Search / Browser" placeholder="[GOOGLE SEARCH SCREENSHOT]" caption="Search appearance" />
            <BrowserMockup label="Reserved browser frame for an SEO dashboard" address="Analytics / Dashboard" placeholder="[SEO DASHBOARD]" caption="Performance dashboard" />
            <BrowserMockup label="Reserved browser frame for an SEO report" address="Reports / SEO" placeholder="[SEO REPORT]" caption="SEO report" />
          </div>
        </div>
      </section>

      <section id="faq" className="seo-section">
        <div className="seo-container">
          <SectionHeading eyebrow="Straight answers" body="A few things worth knowing before starting an SEO journey.">SEO FAQ</SectionHeading>
          <div className="seo-faq-list">{faqs.map(([question, answer], i) => <div className="seo-faq-item" key={question}><button type="button" className="seo-faq-question" aria-expanded={activeFaq === i} aria-controls={`seo-faq-${i}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>{question}<ChevronDown aria-hidden="true" /></button>{activeFaq === i && <div id={`seo-faq-${i}`} className="seo-faq-answer">{answer}</div>}</div>)}</div>
        </div>
      </section>

      <section id="seo-contact" className="seo-final-cta">
        <div className="seo-container">
          <span className="seo-eyebrow"><Sparkles aria-hidden="true" /> SoRa Innovative Solution</span>
          <h2>READY TO BE FOUND?</h2>
          <p>Let’s build a search strategy around your business.</p>
          <div className="seo-actions"><Link to="/contact" className="seo-button">START YOUR SEO JOURNEY <ArrowUpRight aria-hidden="true" /></Link><Link to="/contact" className="seo-button seo-button-secondary">TALK TO SORA <Check aria-hidden="true" /></Link></div>
        </div>
      </section>
    </div>
  );
}