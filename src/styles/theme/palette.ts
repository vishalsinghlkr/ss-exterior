import type { PaletteOptions } from "@mui/material/styles";
import { COLORS } from "@/config/color-constants";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: COLORS.gold[600],
    light: COLORS.gold[400],
    dark: COLORS.gold[800],
    contrastText: "#080B11",
  },
  secondary: {
    main: COLORS.cobalt[600],
    light: COLORS.cobalt[400],
    dark: COLORS.cobalt[800],
    contrastText: "#FFFFFF",
  },
  background: {
    default: COLORS.platinum.bg,
    paper: COLORS.platinum.surface,
  },
  text: {
    primary: COLORS.platinum.textDark,
    secondary: COLORS.platinum.textMuted,
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: COLORS.gold[500],
    light: COLORS.gold[400],
    dark: COLORS.gold[700],
    contrastText: "#080B11",
  },
  secondary: {
    main: COLORS.cobalt[500],
    light: COLORS.cobalt[400],
    dark: COLORS.cobalt[700],
    contrastText: "#FFFFFF",
  },
  background: {
    default: COLORS.obsidian[950],
    paper: COLORS.obsidian[850],
  },
  text: {
    primary: "#F8FAFC",
    secondary: "#94A3B8",
  },
};
