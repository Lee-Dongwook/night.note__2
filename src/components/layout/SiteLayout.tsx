import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
