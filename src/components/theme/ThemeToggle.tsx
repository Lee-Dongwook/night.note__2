"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[132px]" aria-hidden="true" />;
  }

  return (
    <div
      role="group"
      aria-label="테마 선택"
      className="flex items-center gap-0.5 text-[11px] tracking-wide"
    >
      {themes.map((item) => {
        const isActive = theme === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setTheme(item.value)}
            aria-pressed={isActive}
            className={`min-h-[36px] px-2 py-1.5 transition-colors ${
              isActive
                ? "text-foreground underline decoration-foreground/50 underline-offset-4"
                : "text-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
