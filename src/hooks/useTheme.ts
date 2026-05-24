"use client";

import { useThemeStore } from "@/stores/theme/theme.store";

export function useTheme() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const isDark = theme === "dark";
  const isLight = theme === "light";

  return { theme, isDark, isLight, setTheme, toggleTheme };
}
