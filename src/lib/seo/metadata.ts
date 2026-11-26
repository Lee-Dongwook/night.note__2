import type { Metadata } from "next";
import { SITE } from "../constants/site";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = SITE.description,
  path = "",
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;

  const canonicalUrl = new URL(path, SITE.url).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: pageTitle,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: "summary",
      title: pageTitle,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
