"use client";

import React from "react";
import ReduxProvider from "./ReduxProvider";
import MuiThemeProvider from "./MuiThemeProvider";
import StyledComponentsRegistry from "./StyledRegistry";

interface AppProvidersProps {
  children: React.ReactNode;
}

/**
 * Unified application provider tree:
 * 1. ReduxProvider (Redux Toolkit store + Redux Persist)
 * 2. MuiThemeProvider (Emotion cache + MUI Theme + CssBaseline)
 * 3. StyledComponentsRegistry (Styled-Components SSR stylesheet collection)
 */
export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ReduxProvider>
      <MuiThemeProvider>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </MuiThemeProvider>
    </ReduxProvider>
  );
}
