import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    lang: SITE.language,
  };
}
