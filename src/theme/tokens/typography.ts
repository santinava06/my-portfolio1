export const typography = {
  fontFamily: {
    sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
    mono: ["Geist Mono", "SF Mono", "Fira Code", "monospace"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
    sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.006em" }],
    base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "-0.011em" }],
    lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.014em" }],
    xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.017em" }],
    "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.019em" }],
    "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.021em" }],
    "4xl": ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.025em" }],
    "5xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-0.032em" }],
    "6xl": ["3.75rem", { lineHeight: "4.25rem", letterSpacing: "-0.035em" }],
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
} as const;
