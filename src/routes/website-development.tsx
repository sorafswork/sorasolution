import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/website-development")({
  head: () =>
    pageSeo({
      path: "/website-development",
      title: "Website Development — SoRa Innovative Solution",
      description:
        "Fast, SEO-ready websites built with modern frameworks by SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="Website Development"
      desc="Fast, SEO-ready websites built with modern frameworks — from landing pages to full business sites."
    />
  ),
});
