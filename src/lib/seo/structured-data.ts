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
  const articleUrl = new URL(path, SITE.url).toString();

  const imageUrl = image ? new URL(image, SITE.url).toString() : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: title,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
    author: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: SITE.language,
    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },
  };
}
