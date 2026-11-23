import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AppProviders from "@/providers/AppProviders";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Interiors, Exteriors & Architectural Façades`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SS Exterior",
    "ACP Paneling",
    "HPL Cladding",
    "WPC Louvers",
    "Architectural Façades Gurugram",
    "Wooden Flooring Sohna",
    "Aluminium Work Delhi NCR",
    "Elevation Works",
  ],
  authors: [{ name: "SS Exterior" }],
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang="en" className="dark" suppressHydrationWarning>
          <body className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
            <AppProviders>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </AppProviders>
          </body>
        </html>
        );
}
