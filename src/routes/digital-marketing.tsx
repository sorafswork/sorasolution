import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/digital-marketing")({
  head: () =>
    pageSeo({
      path: "/digital-marketing",
      title: "Digital Marketing — SoRa Innovative Solution",
      description:
        "Paid and organic digital marketing strategy that scales revenue — by SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="Digital Marketing"
      desc="Paid and organic marketing strategy — ads, funnels, and analytics that scale your revenue."
    />
  ),
});
