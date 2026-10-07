import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/graphic-design")({
  head: () =>
    pageSeo({
      path: "/graphic-design",
      title: "Graphic Design — SoRa Innovative Solution",
      description:
        "Eye-catching visuals for posts, ads, and print by SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="Graphic Design"
      desc="Eye-catching visuals for posts, ads, and print that make your brand impossible to ignore."
    />
  ),
});
