import Link from "next/link";

import { ThemeToggle } from "@/components/theme";
import { SITE } from "@/lib/constants/site";

import { MobileNav } from "./MobileNav";

const navigation = [
  { label: "HOME", href: "/" },
  { label: "ARCHIVE", href: "/archive" },
  { label: "ABOUT", href: "/about" },
] as const;

export function Header() {
  return (
    <header className="relative">
      <div className="container">
        <nav
          aria-label="주요 메뉴"
          className="flex h-20 items-center justify-between border-b border-border"
        >
          <Link
            href="/"
            className="font-serif text-lg font-normal tracking-[0.14em]"
          >
            감성글
          </Link>

          <div className="flex items-center gap-2 md:gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-xs tracking-[0.16em] text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href={SITE.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.12em] text-secondary transition-colors hover:text-foreground"
              >
                INSTAGRAM ↗
              </a>
            </div>

            <ThemeToggle />

            <MobileNav items={navigation} instagramUrl={SITE.instagram.url} />
          </div>
        </nav>
      </div>
    </header>
  );
}
