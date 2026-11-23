import { createTheme, type Theme } from "@mui/material/styles";
import { lightPalette, darkPalette } from "./palette";
import { COLORS } from "@/config/color-constants";

export const getAppTheme = (mode: "light" | "dark"): Theme => {
  const palette = mode === "dark" ? darkPalette : lightPalette;
  const isDark = mode === "dark";

  return createTheme({
    palette,
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontWeight: 800,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontWeight: 800,
        letterSpacing: "-0.025em",
      },
      h3: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      button: {
        textTransform: "none",
        fontWeight: 700,
        letterSpacing: "0.015em",
      },
    },
    shape: {
      borderRadius: 10,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: "9px 20px",
            boxShadow: "none",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: isDark
                ? "0 8px 20px -4px rgba(14, 165, 233, 0.3)"
                : "0 8px 16px -4px rgba(2, 132, 199, 0.2)",
            },
          },
          containedPrimary: {
            background: COLORS.azure.gradient,
            color: "#FFFFFF",
            fontWeight: 700,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            backgroundImage: "none",
            border: isDark
              ? `1px solid ${COLORS.navy.border}`
              : `1px solid ${COLORS.platinum.border}`,
            boxShadow: isDark
              ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
              : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
  });
};
