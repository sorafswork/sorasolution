import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/seo")({
  head: () =>
    pageSeo({
      path: "/seo",
      title: "SEO Services — SoRa Innovative Solution",
      description:
        "Rank higher and get discovered by the right audience with SEO services from SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="SEO"
      desc="Rank higher on Google and get discovered by the right audience with on-page and technical SEO."
    />
  ),
});
