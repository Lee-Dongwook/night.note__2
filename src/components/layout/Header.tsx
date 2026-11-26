import Link from "next/link";

import { SITE } from "@/lib/constants/site";
import { ThemeToggle } from "@/components/theme";

const navigation = [
  { label: "HOME", href: "/" },
  { label: "ARCHIVE", href: "/archive" },
  { label: "ABOUT", href: "/about" },
];

export function Header() {
  return (
    <header className="container">
      <nav className="flex h-20 items-center justify-between border-b border-border">
        <Link href="/" className="text-lg font-medium tracking-[0.12em]">
          감성글
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
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
              className="text-xs tracking-[0.12em] text-foreground-secondary transition-colors hover:text-foreground"
            >
              INSTAGRAM ↗
            </a>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
