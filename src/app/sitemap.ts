import type { MetadataRoute } from "next";

import { postRepository } from "@/domains/post/repositories";
import { SITE } from "@/lib/constants/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (process.env.NODE_ENV !== "production") {
    return [];
  }

  const posts = await postRepository.getAll();

  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/archive",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about",
      priority: 0.5,
      changeFrequency: "monthly" as const,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: new URL(route.path, SITE.url).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: new URL(`/archive/${post.slug}`, SITE.url).toString(),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
