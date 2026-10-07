import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/site/service-placeholder";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/content-writing")({
  head: () =>
    pageSeo({
      path: "/content-writing",
      title: "Content Writing — SoRa Innovative Solution",
      description:
        "Copy that converts across web and social — by SoRa Innovative Solution, Tamil Nadu.",
    }),
  component: () => (
    <ServicePlaceholder
      title="Content Writing"
      desc="Copy that converts — website content, blogs, captions, and scripts written for your audience."
    />
  ),
});
