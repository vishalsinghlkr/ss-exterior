"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { siteConfig } from "@/config/site";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Materials", href: "#materials" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Estimator", href: "#estimator" },
    { label: "Process", href: "#process" },
    { label: "Credentials", href: "#credentials" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#080B11]/92 backdrop-blur-xl transition-colors">
        <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Editorial Typography */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
            {/* Architectural Champagne Gold & Obsidian Frame */}
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-xl bg-gradient-to-br from-[#25334D] via-[#162033] to-[#0A0F1A] p-1.5 border-2 border-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.35)] group-hover:border-[#FDE68A] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.5)] transition-all shrink-0 flex items-center justify-center">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10">
                <Image
                  src="/images/logo-icon.png"
                  alt="SS Exterior Emblem"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)]"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#FDE68A] transition-colors">
                  SS <span className="text-metallic-gold">EXTERIOR</span>
                </span>
                <VerifiedIcon className="text-[#D4AF37] text-sm" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#FDE68A]">
                Façades & Architectural Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase font-semibold tracking-[0.14em] text-slate-300 hover:text-[#E5BD68] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & CTAs */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Instagram Profile */}
              <Tooltip title="Instagram (@ssexteri_or)">
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-pink-400 hover:border-pink-500/30 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon fontSize="small" />
                </a>
              </Tooltip>

                {/* Quick Call Icon Button */}
                <Tooltip title={`Direct Call: ${siteConfig.contact.displayPhone}`}>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E5BD68] hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all"
                    aria-label="Call Mobile"
                  >
                    <PhoneIcon fontSize="small" />
                  </a>
            </Tooltip>

            {/* WhatsApp Consultation Button */}
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all shrink-0"
            >
              <WhatsAppIcon fontSize="small" />
              <span>Free Consultation</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:text-white"
              aria-label="Open mobile menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        PaperProps={{
          sx: {
            width: "82%",
            maxWidth: 360,
            backgroundColor: "#080B11",
            color: "#FFFFFF",
            borderLeft: "1px solid rgba(212, 175, 55, 0.25)",
            padding: 0,
          },
        }}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Drawer Top Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-[#25334D] to-[#0E1524] border-2 border-[#D4AF37] p-1 flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                  <div className="relative h-8 w-8">
                    <Image
                      src="/images/logo-icon.png"
                      alt="SS Exterior"
                      fill
                      className="object-contain drop-shadow-[0_2px_6px_rgba(212,175,55,0.4)]"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base font-black tracking-tight text-white">SS <span className="text-metallic-gold">EXTERIOR</span></p>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#FDE68A]">Façades & Architectural Design</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="h-8 w-8 flex items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-white/10"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className="px-3 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-[#E5BD68] flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowForwardIcon fontSize="inherit" className="opacity-40" />
                </Link>
              ))}
            </nav>

            {/* Verified GST Card */}
            <div className="p-3.5 rounded-xl bg-[#121927] border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <VerifiedIcon fontSize="inherit" />
                <span>GST Registered Business</span>
              </div>
              <p className="text-[11px] font-mono text-slate-300 tracking-wider">
                {siteConfig.contact.gst}
              </p>
              <p className="text-[11px] text-slate-400">
                Sector 67, Gurugram, Haryana - 122101
              </p>
            </div>
          </div>

          {/* Drawer Bottom Actions: Both Partners */}
          <div className="space-y-2.5 pt-4 border-t border-white/10">
            <p className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">
              Call / WhatsApp Partners
            </p>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:7905080922"
                className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold text-[#E5BD68] border border-[#D4AF37]/30 bg-[#D4AF37]/10"
              >
                <PhoneIcon fontSize="inherit" />
                <span>Satyajeet</span>
              </a>
              <a
                href="https://wa.me/917905080922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10"
              >
                <WhatsAppIcon fontSize="inherit" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:7982522313"
                className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold text-[#E5BD68] border border-[#D4AF37]/30 bg-[#D4AF37]/10"
              >
                <PhoneIcon fontSize="inherit" />
                <span>Shubham</span>
              </a>
              <a
                href="https://wa.me/917982522313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 py-2.5 rounded-lg text-xs font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10"
              >
                <WhatsAppIcon fontSize="inherit" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
