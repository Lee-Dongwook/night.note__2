import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description = SITE.description,
  path = "",
  image = "/images/og/default.png",
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;

  const canonicalUrl = new URL(path, SITE.url).toString();
  const imageUrl = new URL(image, SITE.url).toString();

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
      images: [
        {
          url: imageUrl,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: pageTitle,
        },
      ],
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
