import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#05070B] text-slate-300 pt-16 pb-24 sm:pb-14 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#25334D] to-[#0E1524] border-2 border-[#D4AF37] p-1 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.3)]">
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
                <h3 className="font-black text-xl text-white tracking-tight">
                  SS <span className="text-metallic-gold">EXTERIOR</span>
                </h3>
                <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#FDE68A]">
                  Façades & Architectural Design
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Where Architectural Vision Meets Precision Execution. Premier turnkey provider for high-performance exterior claddings, architectural building elevations, and luxury interior finishes across Delhi NCR and India.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:text-pink-400 hover:border-pink-500/30 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon fontSize="small" />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E5BD68] hover:bg-[#D4AF37]/20 transition-all"
                aria-label="Phone"
              >
                <PhoneIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Specialized Services from Visiting Card */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • Wooden Flooring
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • HPL Cladding
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • ACP Work
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • WPC Louvers & Decking
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • All Elevation Work
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  • MS Structural & Fabrication Work
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#overview" className="hover:text-[#E5BD68] transition-colors">
                  Overview & Value Proposition
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-[#E5BD68] transition-colors">
                  Technical Material Specifications
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#E5BD68] transition-colors">
                  Signature Project Portfolio
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#E5BD68] transition-colors">
                  Instant Project Cost Estimator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#E5BD68] transition-colors">
                  Turnkey Execution Framework
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[#E5BD68] transition-colors">
                  Verified Office Plaque & GSTIN
                </a>
              </li>
            </ul>
          </div>

          {/* Official Registered Facility */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
              Corporate Office & Contacts
            </h4>
            <div className="rounded-xl border border-white/10 bg-[#0C111C] p-3.5 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                <VerifiedIcon fontSize="inherit" />
                <span>GSTIN: {siteConfig.contact.gst}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <LocationOnIcon fontSize="inherit" className="mt-0.5 text-[#D4AF37] shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  {siteConfig.contact.address.full}
                </span>
              </div>

                {/* Both Direct Contacts */}
                <div className="pt-1 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Satyajeet Kumar:</span>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-[#E5BD68] hover:text-white transition-colors font-mono">
                        +91 {siteConfig.contact.phone}
                      </a>
                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300"
                        aria-label="WhatsApp Satyajeet"
                      >
                        <WhatsAppIcon sx={{ fontSize: 14 }} />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">Shubham Tiwari:</span>
                    <div className="flex items-center gap-2">
                      <a href={`tel:${siteConfig.contact.secondaryPhone}`} className="text-[#E5BD68] hover:text-white transition-colors font-mono">
                        +91 {siteConfig.contact.secondaryPhone}
                      </a>
                      <a
                        href={siteConfig.contact.whatsappSecondary}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300"
                        aria-label="WhatsApp Shubham"
                      >
                        <WhatsAppIcon sx={{ fontSize: 14 }} />
                      </a>
                    </div>
                  </div>
                </div>

                  <div className="flex items-center gap-2 pt-1 text-slate-300">
                    <EmailIcon fontSize="inherit" className="text-[#D4AF37] shrink-0" />
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors truncate text-[11px]">
                        {siteConfig.contact.email}
                      </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-slate-500">
              <p>© {currentYear} SS Exterior. All architectural specifications and trademarks reserved.</p>
              <div className="flex items-center gap-4">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <VerifiedIcon fontSize="inherit" /> Official GST Verified
                </span>
                <span>•</span>
                <span className="text-[#D4AF37] font-medium">Sector 67, Gurugram (Delhi NCR)</span>
              </div>
            </div>
          </div>
        </footer>
        );
}
