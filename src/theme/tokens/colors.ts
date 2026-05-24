export const colors = {
  light: {
    bg: {
      primary: "#f5f5f7",
      secondary: "#ffffff",
      elevated: "#ffffff",
      overlay: "rgba(0, 0, 0, 0.04)",
    },
    text: {
      primary: "#1d1d1f",
      secondary: "#6e6e73",
      tertiary: "#86868b",
      inverse: "#ffffff",
    },
    accent: {
      blue: "#0071e3",
      blueHover: "#0077ed",
      purple: "#7b2ff7",
      gradient: "from-blue-500 to-purple-600",
    },
    border: {
      subtle: "rgba(0, 0, 0, 0.06)",
      default: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 113, 227, 0.3)",
    },
    surface: {
      card: "#ffffff",
      hover: "rgba(0, 0, 0, 0.04)",
      active: "rgba(0, 0, 0, 0.06)",
      success: "#e8f5e9",
      error: "#ffebee",
    },
    status: {
      success: "#2e7d32",
      error: "#d32f2f",
      warning: "#f57c00",
      available: "#34c759",
    },
  },
  dark: {
    bg: {
      primary: "#000000",
      secondary: "#1d1d1f",
      elevated: "#2d2d2f",
      overlay: "rgba(255, 255, 255, 0.04)",
    },
    text: {
      primary: "#f5f5f7",
      secondary: "#a1a1a6",
      tertiary: "#6e6e73",
      inverse: "#000000",
    },
    accent: {
      blue: "#2997ff",
      blueHover: "#40a9ff",
      purple: "#bf5af2",
      gradient: "from-blue-400 to-purple-500",
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.06)",
      default: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(41, 151, 255, 0.3)",
    },
    surface: {
      card: "rgba(255, 255, 255, 0.04)",
      hover: "rgba(255, 255, 255, 0.08)",
      active: "rgba(255, 255, 255, 0.12)",
      success: "rgba(46, 125, 50, 0.2)",
      error: "rgba(211, 47, 47, 0.2)",
    },
    status: {
      success: "#66bb6a",
      error: "#ef5350",
      warning: "#ffa726",
      available: "#34c759",
    },
  },
} as const;

export type ColorScheme = typeof colors.light;
