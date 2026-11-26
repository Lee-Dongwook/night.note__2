import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NODE_ENV !== "production") {
    return [];
  }

  const routes = ["", "/archive", "/about"];

  return routes.map((route) => ({
    url: new URL(route, SITE.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
