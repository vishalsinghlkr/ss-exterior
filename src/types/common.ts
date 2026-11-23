import type { ReactNode } from "react";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export type ThemeMode = "light" | "dark" | "system";

export interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
  disabled?: boolean;
}
