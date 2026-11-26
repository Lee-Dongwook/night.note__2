import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

const isProduction = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : undefined,
      disallow: isProduction ? ["/api/"] : "/",
    },
    sitemap: isProduction ? `${SITE.url}/sitemap.xml` : undefined,
  };
}
