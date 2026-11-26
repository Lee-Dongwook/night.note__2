import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_NAME = "감성글";
const SITE_DESCRIPTION =
  "하루 끝, 마음에 남는 한 문장 🌙. 이별과 그리움, 일상 속 작은 위로. 당신의 마음을 대신 적어드립니다. 매일 밤, 마음 한 페이지.";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
