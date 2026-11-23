/**
 * SS Exterior - Elite Architectural Studio Color System
 * Engineered with Deep Carbon Obsidian (#080B11),
 * Architectural Champagne Gold (#D4AF37),
 * Glazing Sapphire/Cobalt (#0284C7 / #38BDF8),
 * and Warm Facade Bronze (#EA580C).
 * 
 * Harmonizes directly with the SS Exterior official 3D insignia
 * and verified industrial standards for high-end facade engineering.
 */

export const COLORS = {
  // Primary Luxury Champagne Gold & Architectural Brass (Primary Identity)
  gold: {
    50: "#FDFBF7",
    100: "#FBF4E4",
    200: "#F6E6C0",
    300: "#EED295",
    400: "#E4BD67",
    500: "#D4AF37", // Signature Architectural Champagne Gold
    600: "#BD9422",
    700: "#957319",
    800: "#745717",
    900: "#574114",
    gradient: "linear-gradient(135deg, #FDE68A 0%, #D4AF37 50%, #996515 100%)",
    glow: "rgba(212, 175, 55, 0.35)",
  },

  // Glazing Sapphire & Sky Cobalt (Facade Glass Curtain Walls & Logo Center)
  cobalt: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7", // Core Architectural Azure
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
    gradient: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #075985 100%)",
    glow: "rgba(14, 165, 233, 0.35)",
  },

  // Backwards compatibility alias for azure
  azure: {
    50: "#F0F9FF",
    100: "#E0F2FE",
    200: "#BAE6FD",
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
    600: "#0284C7",
    700: "#0369A1",
    800: "#075985",
    900: "#0C4A6E",
    gradient: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #075985 100%)",
    glow: "rgba(14, 165, 233, 0.35)",
  },

  // Warm Facade Bronze / Terracotta (Secondary Warm Accent)
  copper: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#EA580C",
    600: "#C2410C",
    700: "#9A3412",
    gradient: "linear-gradient(135deg, #FED7AA 0%, #EA580C 50%, #9A3412 100%)",
  },
  bronze: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#EA580C",
    600: "#C2410C",
    700: "#9A3412",
    gradient: "linear-gradient(135deg, #FED7AA 0%, #EA580C 50%, #9A3412 100%)",
  },

  // Deep Obsidian Charcoal & Onyx Graphite (Canvas & High-End Dark Surfaces)
  obsidian: {
    950: "#080B11", // Deepest canvas - velvety dark
    900: "#0D131D", // Section background
    850: "#121927", // Card container
    800: "#1A2337", // Elevated hover state
    700: "#243048", // Structural hairline borders
    border: "rgba(255, 255, 255, 0.08)",
    borderGold: "rgba(212, 175, 55, 0.35)",
    borderCobalt: "rgba(14, 165, 233, 0.3)",
  },
  navy: {
    950: "#080B11",
    900: "#0D131D",
    850: "#121927",
    800: "#1A2337",
    700: "#243048",
    border: "rgba(255, 255, 255, 0.08)",
    borderBlue: "rgba(14, 165, 233, 0.3)",
    borderCopper: "rgba(234, 88, 12, 0.3)",
  },

  // Crisp Platinum & Titanium Slate
  platinum: {
    bg: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceMuted: "#F1F5F9",
    border: "#E2E8F0",
    textDark: "#0F172A",
    textMuted: "#475569",
  },

  // Commercial Verification & Social Badges
  status: {
    verified: "#10B981", // Govt GST Emerald
    verifiedBg: "rgba(16, 185, 129, 0.12)",
    whatsapp: "#25D366",
    instagram: "#E1306C",
  },
} as const;

export type ColorsType = typeof COLORS;
export default COLORS;
