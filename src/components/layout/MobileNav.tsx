"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  items: readonly NavItem[];
  instagramUrl: string;
}

export function MobileNav({ items, instagramUrl }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        className="flex h-11 w-11 items-center justify-center text-foreground transition-colors hover:text-secondary"
      >
        <span className="flex w-5 flex-col items-end gap-1.5" aria-hidden="true">
          <span
            className={`h-px w-full bg-current transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px bg-current transition-all duration-200 ${
              open ? "w-full -translate-y-[3.5px] -rotate-45" : "w-3.5"
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-40 border-b border-border bg-background"
        >
          <div className="container flex flex-col py-4">
            {items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[44px] items-center text-xs tracking-[0.18em] transition-colors ${
                    isActive
                      ? "text-foreground underline underline-offset-4"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-[44px] items-center border-t border-border pt-2 text-xs tracking-[0.14em] text-secondary transition-colors hover:text-foreground"
            >
              INSTAGRAM ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
