import { SITE } from "@/lib/constants/site";

export function createWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        sameAs: [SITE.instagram.url],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        inLanguage: SITE.language,
        publisher: {
          "@id": `${SITE.url}/#organization`,
        },
      },
    ],
  };
}

interface ArticleStructuredDataOptions {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
}

export function createArticleStructuredData({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
  image,
}: ArticleStructuredDataOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: new URL(path, SITE.url).toString(),
    datePublished: publishedAt,
    ...(updatedAt && { dateModified: updatedAt }),
    ...(image && { image: new URL(image, SITE.url).toString() }),
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: SITE.language,
  };
}
