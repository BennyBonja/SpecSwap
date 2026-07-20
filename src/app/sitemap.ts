import type { MetadataRoute } from "next";

const SITE_URL = "https://www.specswap.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/china-trip", "/contact", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
