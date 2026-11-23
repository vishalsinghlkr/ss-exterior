"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";

// Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ConstructionIcon from "@mui/icons-material/Construction";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LayersIcon from "@mui/icons-material/Layers";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessIcon from "@mui/icons-material/Business";
import CalculateIcon from "@mui/icons-material/Calculate";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import { siteConfig } from "@/config/site";
import {
  StyledPulseBadge,
  StyledGlassCard,
  StyledLogoDisplay,
} from "@/components/styled/StyledElements";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: "exterior" | "interior";
  image: string;
  location: string;
  materials: string;
  highlight: string;
  tag: string;
  desc: string;
}

export default function HomePage() {
  const [activeMaterial, setActiveMaterial] = useState<number>(0);
  const [copiedGst, setCopiedGst] = useState(false);

  // Portfolio State
  const [portfolioFilter, setPortfolioFilter] = useState<"all" | "exterior" | "interior">("all");
  const [activeLightbox, setActiveLightbox] = useState<ProjectItem | null>(null);

  // Estimator State
  const [estimatorArea, setEstimatorArea] = useState<number>(1500);
  const [estimatorService, setEstimatorService] = useState<string>("ACP Exterior Cladding");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyGst = () => {
    navigator.clipboard.writeText(siteConfig.contact.gst);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  const materialsData = [
    {
      id: "acp",
      title: "ACP (Aluminium Composite Panels)",
      category: "Exterior Facade Cladding",
      desc: "Architectural-grade composite panels engineered with mineral-filled fire-retardant cores and fluoropolymer PVDF coatings. Designed for corporate towers, retail elevations, and weather-critical building envelopes.",
      metrics: [
        { label: "Coating", val: "PVDF Kynar 500" },
        { label: "Fire Rating", val: "FR Grade / Class A" },
        { label: "Thickness", val: "3mm, 4mm, 6mm" },
        { label: "Durability", val: "15+ Years Life" },
      ],
      applications: "High-rise commercial facades, exterior canopies, soffits, column casing",
      badgeColor: "text-[#E5BD68] border-[#D4AF37]/40 bg-[#D4AF37]/10",
    },
    {
      id: "hpl",
      title: "HPL (High Pressure Laminates)",
      category: "Architectural Rain-Screen Panels",
      desc: "Thermosetting resin exterior cladding panels manufactured under extreme pressure. Highly resistant to intense UV radiation, monsoons, and thermal expansion while delivering authentic natural timber, rust, and stone aesthetics.",
      metrics: [
        { label: "Surface Finish", val: "Natural Wood / Stone" },
        { label: "UV Protection", val: "Certified Weather-Shield" },
        { label: "Thickness", val: "6mm, 8mm, 10mm, 12mm" },
        { label: "Maintenance", val: "Zero Polish Required" },
      ],
      applications: "Luxury villa elevations, modern bungalows, residential balconies & louvers",
      badgeColor: "text-[#FB923C] border-[#EA580C]/40 bg-[#EA580C]/10",
    },
    {
      id: "wpc",
      title: "WPC Louvers & Exterior Fins",
      category: "Sun-Shading & Linear Elevation",
      desc: "Heavy-density wood-plastic composite architectural tubes and vertical fins. 100% waterproof, rot-proof, and termite-proof, creating bold linear shadow-lines, thermal regulation, and architectural privacy screens.",
      metrics: [
        { label: "Polymer Base", val: "High-Density WPC" },
        { label: "Weather Shield", val: "100% Waterproof" },
        { label: "Sizes", val: "50x50mm to 100x200mm" },
        { label: "Termite Proof", val: "Lifetime Guarantee" },
      ],
      applications: "Exterior elevation fins, terrace pergolas, boundary screening, facade depth",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    },
    {
      id: "c-channel",
      title: "C-Channel Sub-Structure Framing",
      category: "Structural Load-Bearing Support",
      desc: "Heavy-gauge extruded aluminium and hot-dip galvanized steel C-channel support systems. Engineered to resist positive and negative wind pressures, seismic expansion, and dead-load stresses behind modern facades.",
      metrics: [
        { label: "Alloy", val: "6063-T6 / Heavy GI" },
        { label: "Alignment", val: "Laser Plumb True" },
        { label: "Fasteners", val: "Grade 304/316 SS" },
        { label: "Corrosion Res.", val: "Hot-Dip Galvanized" },
      ],
      applications: "Substructure framing behind ACP, HPL, glass glazing, and heavy stone panels",
      badgeColor: "text-slate-300 border-slate-600 bg-slate-800/40",
    },
    {
      id: "wooden-flooring",
      title: "Luxury Engineered Wooden Flooring",
      category: "Luxury Interior Flooring",
      desc: "Commercial and residential grade European engineered and laminated hardwood flooring. Features moisture-resistant multi-ply cores, acoustic underlays, and scratch-resistant aluminum oxide coatings.",
      metrics: [
        { label: "Wear Rating", val: "AC4 / AC5 Heavy Duty" },
        { label: "Core", val: "Moisture Shield HDF" },
        { label: "Edge", val: "4-Sided V-Groove Click" },
        { label: "Texture", val: "Embossed Wood Grain" },
      ],
      applications: "Master bedrooms, living lounges, luxury penthouses, corporate executive suites",
      badgeColor: "text-[#FDBA74] border-[#FB923C]/40 bg-[#FB923C]/10",
    },
    {
      id: "wallpaper-aluminium",
      title: "Acoustic Wallpapers & Aluminium Systems",
      category: "Interior Finishes & Glazing",
      desc: "Designer acoustic wall coverings combined with custom architectural slimline aluminium partitions, casement windows, structural glass partitions, and frameless toughened glass installations.",
      metrics: [
        { label: "Glass Specs", val: "10mm / 12mm Toughened" },
        { label: "Profiles", val: "Architectural Slimline" },
        { label: "Wallpapers", val: "Imported Textured Vinyl" },
        { label: "Acoustics", val: "Noise Dampening" },
      ],
      applications: "Conference rooms, luxury living walls, office cabins, sliding glass enclosures",
      badgeColor: "text-[#38BDF8] border-[#0284C7]/40 bg-[#0284C7]/10",
    },
    {
      id: "elevation",
      title: "Turnkey Elevation Works",
      category: "Complete Architectural Elevation",
      desc: "Full turnkey building facade transformation: from 3D CAD visualization and structural substructure engineering to millimeter-accurate material fabrication and on-time site handover.",
      metrics: [
        { label: "Scope", val: "Complete Turnkey" },
        { label: "Leveling", val: "3D Laser Calibration" },
        { label: "Milestones", val: "On-Time Handover" },
        { label: "Invoicing", val: "Official GST Billing" },
      ],
      applications: "Residential villa elevations, commercial complexes, retail showrooms, hospitals",
      badgeColor: "text-[#E5BD68] border-[#D4AF37]/40 bg-[#D4AF37]/10",
    },
  ];

  // Authentic Executed Projects
  const portfolioProjects: ProjectItem[] = [
    {
      id: "curved-facade",
      title: "Curved Architectural Façade & Cove Lighting",
      category: "Exterior Façade Cladding",
      type: "exterior",
      image: "/images/projects/project-curved-facade-lighting.jpg",
      location: "Sohna Road, Gurugram",
      materials: "Curved Exterior Panels + WPC Soffit Louvers + Integrated LED Warm Strips",
      highlight: "Custom Curved Profiles & Seamless Fluted Balcony Fascia",
      tag: "Curved Architecture",
      desc: "Architectural masterpiece featuring custom curved exterior wall cladding, warm recessed cove lighting strips, dark stone boundary plinth, and structural glass balustrades.",
    },
    {
      id: "villa-dark-soffits",
      title: "Luxury 3-Tier Villa with Timber Soffits",
      category: "Residential Exterior Elevation",
      type: "exterior",
      image: "/images/projects/project-villa-dark-soffits.jpg",
      location: "Golf Course Extension, Gurugram",
      materials: "Exterior HPL Wood Cladding + Dark Textured Stone + Toughened Glass",
      highlight: "Zero-Maintenance Timber Look & Millimeter Leveling",
      tag: "Luxury Villa",
      desc: "Contemporary residential facade featuring rich dark timber ceiling soffits, textured stone pillars, architectural fan pergola roofline, and frameless glass railings.",
    },
    {
      id: "bungalow-wood-louvers",
      title: "Modern Bungalow with Vertical Louver Tower",
      category: "Exterior Façade & Louvers",
      type: "exterior",
      image: "/images/projects/project-bungalow-wood-louvers.jpg",
      location: "DLF Phase 2, Gurugram",
      materials: "Vertical WPC Louver Fins + Stone Tile Veneer + High-Performance Glazing",
      highlight: "Thermal Sun-Shading & Deep Linear Shadow-Lines",
      tag: "Modern Bungalow",
      desc: "Striking vertical architectural louver fin tower paired with horizontal wooden soffit cantilevers, stone veneer cladding, and acoustic exterior window frames.",
    },
    {
      id: "villa-cantilever",
      title: "Cantilevered Elevation & Louver Screen",
      category: "Turnkey Elevation Works",
      type: "exterior",
      image: "/images/projects/project-modern-villa-cantilever.jpg",
      location: "South City, Gurugram",
      materials: "Vertical Louver Screen Tower + Wood Compound Gate & Balcony Overhangs",
      highlight: "Minimalist Geometry & Weather-Sealed C-Channel Framing",
      tag: "Turnkey Facade",
      desc: "Minimalist geometric villa facade with vertical architectural louver screen, integrated wooden boundary gate, planter recesses, and precision expansion joints.",
    },
    {
      id: "residential-3story",
      title: "3-Story Elevation with Accent Wood Flutes",
      category: "Residential Architecture",
      type: "exterior",
      image: "/images/projects/project-residential-elevation-3story.jpg",
      location: "Vaishnav Enclave, Gurugram",
      materials: "Vertical Wood Accent Flutes + Exterior Spotlights + Stone Plinth",
      highlight: "Linear Vertical Lighting & Weatherproof Polymer Finish",
      tag: "Residential Elevation",
      desc: "Multi-level modern home elevation featuring vertical wood feature bands with embedded linear lighting, crisp white parapet frames, and composite boundary accents.",
    },
    {
      id: "interior-fluted-wall",
      title: "Luxury Fluted Louver TV Media Wall",
      category: "Luxury Interior Louvers",
      type: "interior",
      image: "/images/projects/project-interior-fluted-wall.jpg",
      location: "Executive Residence, Gurugram",
      materials: "Full-Height Natural Oak WPC Louvers + Warm Ceiling Cove Lighting",
      highlight: "Acoustic Dampening & Seamless Fluted Wood Rhythm",
      tag: "Interior Louvers",
      desc: "Full-height vertical fluted wooden wall feature integrated with warm ceiling cove lighting, stone textured wall tiles, and polished marble flooring.",
    },
    {
      id: "interior-dualtone-louvers",
      title: "Dual-Tone Fluted Master Headboard Wall",
      category: "Luxury Interior Design",
      type: "interior",
      image: "/images/projects/project-interior-dualtone-louvers.jpg",
      location: "Master Suite, Gurugram",
      materials: "Walnut Wood Louvers + Ivory Fluted Center Panels + Brass Fixtures",
      highlight: "Architectural Symmetry & Acoustic Isolation",
      tag: "Acoustic Wall",
      desc: "Symmetrical master bedroom headboard installation combining rich walnut vertical flutes, ivory acoustic center panels, and warm designer brass lighting sconces.",
    },
  ];

  const filteredProjects = portfolioProjects.filter((p) => {
    if (portfolioFilter === "all") return true;
    return p.type === portfolioFilter;
  });

  const pillars = [
    {
      title: "Architectural Façade Solutions",
      subtitle: "High-Performance Exterior Envelopes",
      desc: "Supply and execution of weather-resistant, impact-proof façades engineered to elevate curb appeal and energy performance.",
      icon: <ArchitectureIcon className="text-[#E5BD68]" fontSize="large" />,
    },
    {
      title: "Premium Exterior Cladding",
      subtitle: "HPL, WPC & Metal Paneling",
      desc: "State-of-the-art exterior wall claddings and louvers built to endure heavy storms and sun exposure without fading or warping.",
      icon: <LayersIcon className="text-[#E5BD68]" fontSize="large" />,
    },
    {
      title: "Luxury Interior Solutions",
      subtitle: "Flooring, Glazing & Wallpapers",
      desc: "Sophisticated interior environments tailored for luxury residential estates, corporate headquarters, and high-end retail.",
      icon: <ViewQuiltIcon className="text-[#E5BD68]" fontSize="large" />,
    },
    {
      title: "Precision Engineering & Execution",
      subtitle: "Laser Calibrated Accuracy",
      desc: "Certified installation technicians adhering to strict structural safety codes, 3D laser alignment, and on-time site handover.",
      icon: <ConstructionIcon className="text-[#E5BD68]" fontSize="large" />,
    },
  ];

  const comparisonData = [
    {
      feature: "Fire Safety Rating",
      acp: "Class A / FR Mineral Core (Certified)",
      hpl: "Self-Extinguishing / High Density",
      wpc: "Standard Outdoor Flame-Retardant",
    },
    {
      feature: "UV & Monsoon Weather Life",
      acp: "15+ Years (Kynar 500 PVDF)",
      hpl: "20+ Years (Thermosetting Resin)",
      wpc: "20+ Years (100% Rot-Proof)",
    },
    {
      feature: "Aesthetic Texture",
      acp: "Metallic, Solid, Brushed, Gloss",
      hpl: "Deep Wood Grain, Natural Stone, Rust",
      wpc: "Linear Louver Fins & Wood Flutes",
    },
    {
      feature: "Maintenance Need",
      acp: "Zero (Periodic Rain-Wash)",
      hpl: "Zero (No Varnishing Required)",
      wpc: "Zero (Termite & Water Immune)",
    },
    {
      feature: "Ideal Application",
      acp: "Corporate Towers, Commercial Fronts",
      hpl: "Luxury Bungalows, Balconies, Villas",
      wpc: "Elevation Fins, Pergolas, Privacy Walls",
    },
  ];

  const executionSteps = [
    {
      num: "01",
      title: "Site Laser Survey & 3D Drafting",
      desc: "We perform digital laser leveling, measure structural dimensions, and model 3D layout blueprints tailored to your architect's plans.",
    },
    {
      num: "02",
      title: "Certified Material Procurement",
      desc: "We source certified, batch-tested ACP, HPL, and WPC directly from verified tier-1 manufacturers with full warranty documentation.",
    },
    {
      num: "03",
      title: "Sub-Framing & Millimeter Fitting",
      desc: "Heavy-gauge C-channel framing is mounted with expansion joints and structural anchors, ensuring precision panel alignment.",
    },
    {
      num: "04",
      title: "Weather-Sealing & Final Handover",
      desc: "Joints are sealed with structural weather-seal silicone, inspected for rain penetration, and handed over with official GST invoicing.",
    },
  ];

  const faqs = [
    {
      q: "What is the primary difference between ACP and HPL for building facades?",
      a: "ACP (Aluminium Composite Panels) offers an ultra-flat metallic, solid, or glossy finish with lightweight rigidity, making it ideal for modern commercial facades. HPL (High Pressure Laminates) provides an authentic wood, stone, or rust finish with dense surface hardness and exceptional warmth, favored heavily for luxury residential elevations and villas.",
    },
    {
      q: "How durable are WPC louvers in the extreme Delhi NCR climate?",
      a: "Our architectural WPC louvers are engineered specifically to withstand heavy sun exposure (45°C+ summers) and monsoon downpours without warping, fading, or rotting. They require zero painting or varnishing throughout their 20+ year lifespan.",
    },
    {
      q: "Do you supply both the materials and the complete installation service?",
      a: "Yes. SS Exterior provides full end-to-end turnkey contracts. We supply the certified materials, fabricate custom dimensions, erect the structural framing, and carry out millimeter-accurate laser installation with our in-house technicians.",
    },
    {
      q: "Can you provide official GST invoices for commercial contracts?",
      a: "Yes, SS Exterior is an officially registered business with GST identification number 06DQEPK3236F1Z3. All supplies and turnkey contracts are backed by official tax invoices with input tax credit (ITC) eligibility.",
    },
    {
      q: "What is your typical project execution timeline?",
      a: "Timeline depends on total square footage. For a typical residential villa (1,500 – 3,500 sq. ft.), sub-framing and panel installation takes approximately 10 to 18 working days. Commercial projects follow strict phased delivery schedules with dedicated site supervisors.",
    },
  ];

  const getEstimatorWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello SS Exterior! I would like to get an official architectural quotation.\n- Selected Service: ${estimatorService}\n- Estimated Area: ${estimatorArea} sq. ft.\n- Office Location: Sohna, Gurugram\nPlease share your technical material catalog and pricing breakdown.`
    );
    return `https://wa.me/917905080922?text=${text}`;
  };

  return (
    <div className="relative min-h-screen bg-[#080B11] text-slate-100 selection:bg-[#D4AF37] selection:text-[#080B11] architectural-grid">
      {/* Subtle Ambient Radial Lighting */}
      <div className="ambient-glow-gold top-10 left-1/4 w-80 sm:w-[32rem] h-80 sm:h-[32rem] -translate-x-1/2 opacity-70" />
      <div className="ambient-glow-cobalt top-72 right-6 sm:right-20 w-80 sm:w-[30rem] h-80 sm:h-[30rem] opacity-55" />

      {/* 1. HERO SECTION */}
      <section id="overview" className="relative z-10 pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-24 lg:pb-36 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                <StyledPulseBadge $variant="gold">
                  Architectural Façade & Interior Engineering
                </StyledPulseBadge>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <VerifiedIcon fontSize="inherit" /> GST: {siteConfig.contact.gst}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.12] text-white">
                Engineering Architectural Masterpieces.{" "}
                <span className="text-metallic-gold block mt-1">
                  Redefining Façades & Living Spaces.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {siteConfig.subHeadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all w-full sm:w-auto"
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>Request Site Consultation</span>
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 border border-[#D4AF37]/40 bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#E5BD68] transition-colors w-full sm:w-auto"
                >
                  <PhotoCameraIcon fontSize="small" />
                  <span>View Real Projects (7)</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-[#E5BD68] hover:bg-white/5 transition-colors w-full sm:w-auto"
                >
                  <PhoneIcon fontSize="small" />
                  <span>Call: {siteConfig.contact.displayPhone}</span>
                </a>
              </div>

              {/* Engineering Metrics Strip */}
              <div className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/[0.08] text-left">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Specification</p>
                  <p className="text-xl font-extrabold text-white">Class A / PVDF</p>
                  <p className="text-[11px] text-slate-400">Certified ACP & HPL</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Accuracy</p>
                  <p className="text-xl font-extrabold text-white">Laser Aligned</p>
                  <p className="text-[11px] text-slate-400">Millimeter Tolerances</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Head Office</p>
                  <p className="text-xl font-extrabold text-white">Gurugram</p>
                  <p className="text-[11px] text-slate-400">Delhi NCR Facility</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Commercial</p>
                  <p className="text-xl font-extrabold text-white">GST Verified</p>
                  <p className="text-[11px] text-slate-400">B2B & Residential Tax</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Insignia Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm sm:max-w-md">
                <StyledLogoDisplay>
                  <div className="w-full space-y-4 text-center p-2 sm:p-4">
                    {/* Transparent Full Logo */}
                    <div className="relative mx-auto h-52 sm:h-64 w-full flex items-center justify-center">
                      <Image
                        src="/images/logo-full.png"
                        alt="SS Exterior Architectural Insignia"
                        fill
                        className="object-contain drop-shadow-[0_12px_28px_rgba(212,175,55,0.35)]"
                        priority
                      />
                    </div>

                    <div className="pt-2 border-t border-white/[0.08] space-y-1">
                      <p className="text-xs italic text-slate-300 font-medium">
                        "Where Architectural Vision Meets Precision Execution"
                      </p>
                      <span className="inline-block text-[11px] uppercase tracking-widest text-[#E5BD68] font-bold">
                        Sohna • Gurugram • Delhi NCR
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-3 pt-2">
                      <a
                        href={siteConfig.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:text-pink-400 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <InstagramIcon fontSize="small" />
                        Instagram
                      </a>
                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors border border-emerald-500/30"
                      >
                        <WhatsAppIcon fontSize="small" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </StyledLogoDisplay>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL PROJECT GALLERY SHOWCASE (7 REAL IMAGES) */}
      <section id="portfolio" className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08] bg-[#0A0E17]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                <PhotoCameraIcon fontSize="small" /> Authentic Site Handover Photos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Executed Architectural Projects
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Explore our real-world turnkey exterior elevations and luxury interior wall louvers executed across Delhi NCR with millimeter precision.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 bg-[#121927] p-1.5 rounded-xl border border-white/10 shrink-0">
              <button
                onClick={() => setPortfolioFilter("all")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  portfolioFilter === "all"
                    ? "bg-[#D4AF37] text-[#080B11] shadow-md shadow-[#D4AF37]/20"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                All Projects (7)
              </button>
              <button
                onClick={() => setPortfolioFilter("exterior")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  portfolioFilter === "exterior"
                    ? "bg-[#D4AF37] text-[#080B11] shadow-md shadow-[#D4AF37]/20"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Façades (5)
              </button>
              <button
                onClick={() => setPortfolioFilter("interior")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  portfolioFilter === "interior"
                    ? "bg-[#D4AF37] text-[#080B11] shadow-md shadow-[#D4AF37]/20"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Interiors (2)
              </button>
            </div>
          </div>

          {/* Project Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveLightbox(project)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-[#121927] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-[#080B11]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#080B11]/80 backdrop-blur-md text-[#E5BD68] border border-[#D4AF37]/40 shadow-sm">
                      {project.tag}
                    </span>
                    <span className="h-8 w-8 rounded-full bg-[#080B11]/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomInIcon fontSize="small" />
                    </span>
                  </div>

                  {/* Bottom Text in Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#E5BD68] font-semibold">
                      <LocationOnIcon fontSize="inherit" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Info */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-[#E5BD68] transition-colors tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                    <div>
                      <span className="text-[#D4AF37] font-semibold">Materials: </span>
                      <span className="text-slate-400 line-clamp-1">{project.materials}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                        <DoneAllIcon fontSize="inherit" /> Site Handover Verified
                      </span>
                      <span className="text-xs font-bold text-[#E5BD68] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        <span>Details</span>
                        <ChevronRightIcon fontSize="small" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR HIGH-RES PROJECT VIEW */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0F1420] border border-[#D4AF37]/50 shadow-2xl p-4 sm:p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="space-y-0.5">
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold">
                  {activeLightbox.category} • {activeLightbox.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            {/* High-Resolution Project Photo */}
            <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-inner">
              <Image
                src={activeLightbox.image}
                alt={activeLightbox.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Project Technical Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <p className="font-bold text-[#D4AF37] uppercase tracking-wider text-[11px]">Material Scope</p>
                <p className="text-slate-200">{activeLightbox.materials}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1">
                <p className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">Engineering Performance</p>
                <p className="text-slate-200">{activeLightbox.highlight}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeLightbox.desc}
            </p>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <span className="text-xs text-slate-400">
                Turnkey Execution by <strong className="text-white">SS Exterior</strong> • Sohna, Gurugram
              </span>
              <a
                href={`https://wa.me/917905080922?text=Hello%20SS%20Exterior!%20I%20am%20interested%20in%20a%20project%20like:%20${encodeURIComponent(
                  activeLightbox.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-md shadow-[#D4AF37]/25 transition-all"
              >
                <WhatsAppIcon fontSize="small" />
                <span>Inquire for Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. THE 4 PILLARS OF ARCHITECTURAL EXCELLENCE */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Architectural Solutions Engineered to Perfection
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              We provide end-to-end consulting, material supply, and turnkey execution across residential villas, corporate offices, and commercial high-rises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <StyledGlassCard key={idx} $accent="gold" className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#1C263A] to-[#0A0E17] border border-[#D4AF37]/30 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight">{pillar.title}</h3>
                    <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">{pillar.subtitle}</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              </StyledGlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE ARCHITECTURAL MATERIALS SHOWCASE */}
      <section id="materials" className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08] bg-[#0A0E17]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Certified Materials & Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Architectural Product Specifications
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              We source and supply certified exterior and interior materials tested for harsh thermal fluctuations, UV exposure, and structural wind resistance.
            </p>
          </div>

          {/* Interactive Material Selection Tabs */}
          <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 touch-pan-x scrollbar-none">
            {materialsData.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveMaterial(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  activeMaterial === idx
                    ? "bg-[#D4AF37] text-[#080B11] border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
                    : "bg-[#121927] text-slate-300 border-white/10 hover:border-[#D4AF37]/40"
                }`}
              >
                {m.title.split("(")[0].trim()}
              </button>
            ))}
          </div>

          {/* Active Material Technical Detail Card */}
          <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#121927] to-[#0A0E17] p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${materialsData[activeMaterial].badgeColor}`}>
                  {materialsData[activeMaterial].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {materialsData[activeMaterial].title}
                </h3>
              </div>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all shrink-0"
              >
                <WhatsAppIcon fontSize="small" />
                <span>Request Sample & Specs</span>
              </a>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {materialsData[activeMaterial].desc}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {materialsData[activeMaterial].metrics.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{item.label}</p>
                  <p className="text-base sm:text-lg font-bold text-white">{item.val}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#080B11]/70 border border-[#D4AF37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <DoneAllIcon className="text-[#D4AF37]" fontSize="small" />
                <span className="font-semibold text-white">Recommended Applications:</span>
                <span>{materialsData[activeMaterial].applications}</span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 shrink-0">
                In-Stock for Immediate Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MATERIAL COMPARISON MATRIX */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Architectural Guide
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Material Comparison Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Compare primary exterior cladding systems to select the optimum material for your building's structural and aesthetic goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#121927]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A0E17]">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-slate-400">Parameter</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#E5BD68]">ACP (Aluminium Composite)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#FB923C]">HPL (High Pressure Laminate)</th>
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-emerald-400">WPC Louver Fins</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-slate-300">{row.acp}</td>
                    <td className="p-4 sm:p-5 text-slate-300">{row.hpl}</td>
                    <td className="p-4 sm:p-5 text-slate-300">{row.wpc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE TURNKEY PROJECT ESTIMATOR */}
      <section id="estimator" className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08] bg-[#0A0E17]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Budget Planning
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Instant Project Area & Cost Estimator
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Calculate an estimated range for your residential or commercial facade project and send it directly to our engineering team for a detailed itemized quote.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#121927] to-[#0A0E17] p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-xs uppercase font-bold tracking-wider text-slate-300 block">
                  Select Architectural Service
                </label>
                <div className="space-y-2">
                  {[
                    "ACP Exterior Cladding",
                    "HPL Rain-Screen Facade",
                    "WPC Architectural Louvers",
                    "Luxury Engineered Wooden Flooring",
                    "Complete Turnkey Elevation",
                  ].map((srv) => (
                    <button
                      key={srv}
                      onClick={() => setEstimatorService(srv)}
                      className={`w-full p-3.5 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${
                        estimatorService === srv
                          ? "bg-[#D4AF37] text-[#080B11] border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
                          : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <span>{srv}</span>
                      {estimatorService === srv && <CheckCircleIcon fontSize="small" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase font-bold tracking-wider text-slate-300">
                      Approximate Surface Area
                    </label>
                    <span className="text-xl font-extrabold text-[#E5BD68]">
                      {estimatorArea.toLocaleString()} sq. ft.
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={estimatorArea}
                    onChange={(e) => setEstimatorArea(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />

                  <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                    <span>500 sq. ft. (Boutique)</span>
                    <span>7,500 sq. ft.</span>
                    <span>15,000+ sq. ft. (High-Rise)</span>
                  </div>
                </div>

                {/* Estimate Summary Box */}
                <div className="p-5 rounded-xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Selected Solution:</span>
                    <span className="font-bold text-white">{estimatorService}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Sub-Framing & Anchorage:</span>
                    <span className="font-bold text-emerald-400">Included (Heavy GI/Aluminium)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Tax Invoice:</span>
                    <span className="font-bold text-[#E5BD68]">Official GST Bill Eligible</span>
                  </div>
                </div>

                <a
                  href={getEstimatorWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all"
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>Send Estimate to WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE 4-STEP TURNKEY EXECUTION PROCESS */}
      <section id="process" className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              The 4-Step Turnkey Execution Process
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              From the initial laser survey to the final weather-seal inspection, our workflow guarantees safety, compliance, and millimeter-level accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-[#121927] p-6 space-y-4 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="text-4xl font-extrabold text-[#D4AF37]/40 tracking-tight">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VERIFIED FACILITY & OFFICIAL OFFICE PLAQUE */}
      <section id="credentials" className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08] bg-[#0A0E17]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Registered Office & Plaque
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Verified Corporate Identity & GST
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              SS Exterior is an officially registered enterprise operating from our Gurugram facility, offering full corporate accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Office Plaque Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/signboard.jpg"
                    alt="SS Exterior Official Registered Plaque in Sohna Gurugram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 bg-[#080B11] border-t border-white/10 text-center">
                  <span className="text-[11px] text-slate-300 font-medium">
                    Official Head Office Plaque • Sohna, Gurugram (Haryana)
                  </span>
                </div>
              </div>
            </div>

            {/* Credential Details & Copyable GST */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121927] space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider">
                      Business Entity
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">SS EXTERIOR</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <VerifiedIcon fontSize="inherit" /> Verified Active
                  </span>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Goods & Services Tax Identification Number (GSTIN)
                  </label>
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-black/60 border border-[#D4AF37]/30">
                    <span className="text-base sm:text-lg font-mono font-bold text-[#E5BD68] tracking-wider">
                      {siteConfig.contact.gst}
                    </span>
                    <button
                      onClick={handleCopyGst}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <ContentCopyIcon fontSize="inherit" />
                      <span>{copiedGst ? "Copied!" : "Copy GST"}</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <LocationOnIcon fontSize="small" className="text-[#D4AF37] mt-0.5 shrink-0" />
                    <span>{siteConfig.contact.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon fontSize="small" className="text-[#D4AF37] shrink-0" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                      {siteConfig.contact.displayPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <EmailIcon fontSize="small" className="text-[#D4AF37] shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ARCHITECTURAL & COMMERCIAL FAQS */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
              Architectural Knowledge
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Got questions about facade engineering, material warranties, or commercial billing? Here are detailed answers from our technical team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#121927] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#E5BD68] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ExpandMoreIcon
                    className={`transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#D4AF37]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#1A2438] via-[#0E1522] to-[#080B11] p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="ambient-glow-gold top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-40 pointer-events-none" />

            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37] block">
              Start Your Landmark Project
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
              Ready to Redefine Your Building's Façade & Interior?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect with our principal facade engineers today for a complimentary site visit, 3D laser survey, and full technical cost proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-110 shadow-xl shadow-[#D4AF37]/30 transition-all"
              >
                <WhatsAppIcon fontSize="small" />
                <span>Chat on WhatsApp (+91 7905080922)</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-[#E5BD68] border border-[#D4AF37]/40 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <PhoneIcon fontSize="small" />
                <span>Direct Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-white/10 bg-[#080B11]/95 backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs font-bold text-[#E5BD68]"
        >
          <PhoneIcon fontSize="inherit" />
          <span>Call Now</span>
        </a>

        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] text-xs font-bold text-[#080B11] shadow-md shadow-[#D4AF37]/20"
        >
          <WhatsAppIcon fontSize="inherit" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#estimator"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-slate-200"
        >
          <CalculateIcon fontSize="inherit" />
          <span>Estimate</span>
        </a>
      </div>
    </div>
  );
}
