import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/section-header";
import { WorksShowcase } from "@/components/site/works-showcase";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/works")({
  head: () =>
    pageSeo({
      path: "/works",
      title: "Our Works — Live Client Websites by SoRa Innovative Solution",
      description:
        "See live client projects delivered by SoRa Innovative Solution, including business websites, e-commerce stores, portfolios and product showcases.",
    }),
  component: Works,
});

function Works() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Our <span className="text-gradient-brand">works</span></>}
        subtitle="A curated selection of live client projects delivered by SoRa Innovative Solution."
      />
      <WorksShowcase />
    </>
  );
}
