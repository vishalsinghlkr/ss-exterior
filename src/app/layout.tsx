import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import AppProviders from "@/providers/AppProviders";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Architectural3DBackground from "@/components/3d/Architectural3DBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Interiors, Exteriors & Architectural Facades`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SS Exterior",
    "ACP Paneling",
    "HPL Cladding",
    "WPC Louvers",
    "Architectural Facades Gurugram",
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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-slate-900 antialiased selection:bg-[#D4AF37] selection:text-slate-950">
        <AppProviders>
          <Architectural3DBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
