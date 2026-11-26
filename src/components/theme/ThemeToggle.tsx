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
    return <div className="h-9 w-[120px]" aria-hidden="true" />;
  }

  return (
    <div
      role="group"
      aria-label="테마 선택"
      className="flex items-center gap-1 rounded-full border border-border bg-surface p-1"
    >
      {themes.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setTheme(item.value)}
          aria-pressed={theme === item.value}
          className={`rounded-full px-3 py-2 text-[10px] tracking-wide transition-colors ${
            theme === item.value
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
