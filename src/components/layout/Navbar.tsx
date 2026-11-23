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
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm transition-colors">
        <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo & Editorial Typography */}
          <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
            {/* Architectural Champagne Gold & Ivory Frame */}
            <div className="relative h-12 w-12 sm:h-13 sm:w-13 rounded-xl bg-gradient-to-br from-[#FAF9F6] via-white to-[#F1F5F9] p-1.5 border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.25)] group-hover:border-[#B48608] group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all shrink-0 flex items-center justify-center">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10">
                <Image
                  src="/images/logo-icon.png"
                  alt="SS Exterior Emblem"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#B48608] transition-colors">
                  SS <span className="text-metallic-gold">EXTERIOR</span>
                </span>
                <VerifiedIcon className="text-[#D4AF37] text-sm" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#926A06]">
                Facades & Architectural Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase font-semibold tracking-[0.14em] text-slate-600 hover:text-[#B48608] transition-colors"
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
                className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:text-pink-600 hover:border-pink-300 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </a>
            </Tooltip>

            {/* Quick Call Icon Button */}
            <Tooltip title={`Direct Call: ${siteConfig.contact.displayPhone}`}>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#926A06] hover:bg-[#D4AF37]/25 hover:border-[#D4AF37] transition-all"
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-md shadow-[#D4AF37]/20 transition-all shrink-0"
            >
              <WhatsAppIcon fontSize="small" />
              <span>Free Consultation</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950"
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
            backgroundColor: "#FAF9F6",
            color: "#0F172A",
            borderLeft: "1px solid rgba(212, 175, 55, 0.35)",
            padding: 0,
          },
        }}
      >
        <div className="flex flex-col h-full justify-between p-6">
          {/* Drawer Top Header */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-xl bg-white border-2 border-[#D4AF37] p-1 flex items-center justify-center shadow-md">
                  <div className="relative h-8 w-8">
                    <Image
                      src="/images/logo-icon.png"
                      alt="SS Exterior"
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base font-black tracking-tight text-slate-900">SS <span className="text-metallic-gold">EXTERIOR</span></p>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#926A06]">Facades & Architectural Design</p>
                </div>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="h-8 w-8 flex items-center justify-center rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
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
                  className="px-3 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#B48608] flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowForwardIcon fontSize="inherit" className="opacity-40" />
                </Link>
              ))}
            </nav>

            {/* Verified GST Card */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <VerifiedIcon fontSize="inherit" />
                <span>GST Registered Business</span>
              </div>
              <p className="text-[11px] font-mono text-slate-800 font-semibold tracking-wider">
                {siteConfig.contact.gst}
              </p>
              <p className="text-[11px] text-slate-500">
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
