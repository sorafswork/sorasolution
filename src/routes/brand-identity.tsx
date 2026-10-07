import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/brand-identity")({
  head: () =>
    pageSeo({
      path: "/brand-identity",
      title: "Brand Identity — SoRa Innovative Solution",
      description:
        "Logos, typography, and brand guidelines that stick — by SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="Brand Identity"
      desc="Logos, typography, and brand guidelines that make your business instantly recognizable."
    />
  ),
});
