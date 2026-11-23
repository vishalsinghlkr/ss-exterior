/**
 * Application environment configuration
 * Validates and exposes type-safe environment variables
 */
export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "SS Exterior",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://jsonplaceholder.typicode.com",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
} as const;

export type Env = typeof env;
