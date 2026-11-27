import type { Metadata } from "next";
import { Gowun_Batang, Noto_Sans_KR } from "next/font/google";

import { SiteLayout } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";
import { SITE } from "@/lib/constants/site";
import { createMetadata, createWebsiteStructuredData } from "@/lib/seo";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans-kr",
  display: "swap",
});

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gowun-batang",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = createWebsiteStructuredData();

  return (
    <html
      lang={SITE.language}
      className={`${notoSansKr.variable} ${gowunBatang.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
