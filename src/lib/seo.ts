/** Production domain used for canonical URLs, sitemap and social metadata. */
export const SITE_URL = "https://sorainnovativesolution.in";
export const SITE_NAME = "SoRa Innovative Solution";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export function canonicalUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type SeoInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

/** Builds a complete, non-duplicated head() config for a page. */
export function pageSeo({ path, title, description, image = DEFAULT_OG_IMAGE, type = "website" }: SeoInput) {
  const url = canonicalUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: `${SITE_NAME} brand mark` },
      { property: "og:locale", content: "en_IN" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
