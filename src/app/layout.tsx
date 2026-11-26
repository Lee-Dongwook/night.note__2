import type { Metadata } from "next";
import { SITE } from "@/lib/constants/site";
import { createMetadata, createWebsiteStructuredData } from "@/lib/seo";
import { ThemeProvider } from "@/components/theme";
import "./globals.css";

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
    <html lang={SITE.language} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
