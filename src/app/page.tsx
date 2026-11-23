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
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WeekendIcon from "@mui/icons-material/Weekend";

import { siteConfig } from "@/config/site";
import {
  StyledPulseBadge,
  StyledGlassCard,
} from "@/components/styled/StyledElements";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import Tilt3DCard from "@/components/3d/Tilt3DCard";
import Material3DViewer from "@/components/3d/Material3DViewer";

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
  const [heroVisualTab, setHeroVisualTab] = useState<"3d" | "emblem">("3d");

  // User-Friendly Matchmaker Tab
  const [projectType, setProjectType] = useState<"villa" | "commercial" | "interior">("villa");

  // Portfolio State
  const [portfolioFilter, setPortfolioFilter] = useState<"all" | "exterior" | "interior">("all");
  const [activeLightbox, setActiveLightbox] = useState<ProjectItem | null>(null);

  // Estimator State
  const [estimatorArea, setEstimatorArea] = useState<number>(1500);
  const [estimatorService, setEstimatorService] = useState<string>("ACP Exterior Cladding");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const materialsData = [
    {
      id: "acp",
      title: "ACP (Aluminium Composite Panels)",
      category: "Exterior Facade Cladding",
      desc: "Sleek, ultra-modern aluminium panels engineered with fire-retardant cores and UV-proof PVDF coating. Perfect for giving corporate buildings, showrooms, and modern villas a clean, high-end metallic or high-gloss finish that never fades or stains in rain.",
      metrics: [
        { label: "Surface Look", val: "Metallic / High Gloss" },
        { label: "Fire Safety", val: "FR Class A Certified" },
        { label: "Thickness", val: "3mm, 4mm, 6mm" },
        { label: "Lifespan", val: "15+ Years Warranty" },
      ],
      applications: "Showroom fronts, high-rise office towers, residential canopies & column wraps",
      badgeColor: "text-[#E5BD68] border-[#D4AF37]/40 bg-[#D4AF37]/10",
      userBenefit: "Gives a spotless 5-star commercial look with zero maintenance required.",
    },
    {
      id: "hpl",
      title: "HPL (High Pressure Laminates)",
      category: "Architectural Rain-Screen Panels",
      desc: "Heavy-duty exterior wall panels that look exactly like luxury natural wood or rich stone, but without any of the rotting, termite damage, or regular polishing. Built to handle harsh summer heat (45°C+) and heavy monsoons year after year.",
      metrics: [
        { label: "Natural Look", val: "Authentic Timber / Stone" },
        { label: "Weather Proof", val: "100% Rain & UV Shield" },
        { label: "Thickness", val: "6mm, 8mm, 10mm" },
        { label: "Maintenance", val: "Zero Polish Needed" },
      ],
      applications: "Luxury villa facades, bungalow balconies, terrace accents & boundary walls",
      badgeColor: "text-[#FB923C] border-[#EA580C]/40 bg-[#EA580C]/10",
      userBenefit: "Real luxury wood aesthetic that stays brand new for 20+ years without varnishing.",
    },
    {
      id: "wpc",
      title: "WPC Louvers & Exterior Fins",
      category: "Sun-Shading & Linear Elevation",
      desc: "Waterproof and termite-proof wood-composite vertical fins and fluted tubes. They create beautiful modern shadow-lines, keep your house cool by cutting direct harsh sunlight, and give total architectural privacy to balconies and windows.",
      metrics: [
        { label: "Water Resistance", val: "100% Waterproof" },
        { label: "Termite Proof", val: "Lifetime Guarantee" },
        { label: "Available Sizes", val: "50x50mm to 100x200mm" },
        { label: "Thermal Effect", val: "Blocks Sun & Lowers Heat" },
      ],
      applications: "Vertical elevation fins, terrace pergolas, balcony privacy screens & boundary slats",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      userBenefit: "Adds modern depth and privacy while naturally keeping building interiors cooler.",
    },
    {
      id: "c-channel",
      title: "C-Channel Sub-Structure Framing",
      category: "Structural Load-Bearing Support",
      desc: "The invisible backbone of every great facade. Heavy-duty galvanized steel and extruded aluminium channels laser-aligned behind your panels to protect against high wind storms, earthquakes, and loose fittings.",
      metrics: [
        { label: "Material Grade", val: "Heavy GI / 6063-T6" },
        { label: "Laser Leveling", val: "Millimeter Plumb True" },
        { label: "Fasteners", val: "Grade 304/316 SS" },
        { label: "Rust Protection", val: "Hot-Dip Galvanized" },
      ],
      applications: "Substructure framing behind ACP, HPL, stone cladding, and structural glazing",
      badgeColor: "text-slate-300 border-slate-600 bg-slate-800/40",
      userBenefit: "Guarantees your exterior panels stay 100% safe, laser-straight, and storm-proof.",
    },
    {
      id: "wooden-flooring",
      title: "Luxury Engineered Wooden Flooring",
      category: "Luxury Interior Flooring",
      desc: "European-crafted engineered hardwood and AC5-grade laminate flooring. Designed with moisture-resistant multi-layer cores, scratch-proof top coats, and acoustic underlays for a warm, quiet, and timeless feel underfoot.",
      metrics: [
        { label: "Wear Durability", val: "AC4 / AC5 Heavy Duty" },
        { label: "Core Layer", val: "Moisture Shield HDF" },
        { label: "Installation", val: "Seamless Click Joint" },
        { label: "Surface Feel", val: "Real Embossed Grain" },
      ],
      applications: "Master bedrooms, living rooms, penthouses, executive corporate cabins",
      badgeColor: "text-[#FDBA74] border-[#FB923C]/40 bg-[#FB923C]/10",
      userBenefit: "Warm, scratch-resistant luxury feel that makes every room feel cozy and premium.",
    },
    {
      id: "wallpaper-aluminium",
      title: "Acoustic Wallpapers & Aluminium Systems",
      category: "Interior Finishes & Glazing",
      desc: "Imported textured 3D wall coverings paired with slimline architectural aluminium partitions and toughened glass windows. Perfect for creating sound-softening feature walls and elegant room divisions.",
      metrics: [
        { label: "Glass Options", val: "10mm / 12mm Toughened" },
        { label: "Frames", val: "Architectural Slimline" },
        { label: "Wallpapers", val: "Imported 3D Vinyl" },
        { label: "Sound Comfort", val: "Noise Dampening" },
      ],
      applications: "Conference rooms, TV lounges, living feature walls, sliding glass doors",
      badgeColor: "text-[#38BDF8] border-[#0284C7]/40 bg-[#0284C7]/10",
      userBenefit: "Eliminates room echo and creates stunning hotel-suite interior aesthetics.",
    },
    {
      id: "elevation",
      title: "Turnkey Elevation Works",
      category: "Complete Architectural Elevation",
      desc: "Complete end-to-end facade transformation: from initial 3D design preview and laser site measurement to material supply, C-channel structural framing, and final silicone weather-sealing. Single point of contact, zero headache.",
      metrics: [
        { label: "Contract Type", val: "100% Turnkey" },
        { label: "Survey Tech", val: "3D Digital Laser Scan" },
        { label: "Supervision", val: "Dedicated Site Engineer" },
        { label: "Documentation", val: "Official GST Billing" },
      ],
      applications: "Residential villa elevations, commercial complexes, retail showrooms, hospitals",
      badgeColor: "text-[#E5BD68] border-[#D4AF37]/40 bg-[#D4AF37]/10",
      userBenefit: "You approve the 3D design, we handle every single step until final key handover.",
    },
  ];

  // Authentic Executed Projects
  const portfolioProjects: ProjectItem[] = [
    {
      id: "curved-facade",
      title: "Curved Architectural Facade & Cove Lighting",
      category: "Exterior Facade Cladding",
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
      category: "Exterior Facade & Louvers",
      type: "exterior",
      image: "/images/projects/project-bungalow-wood-louvers.jpg",
      location: "DLF Phase 2, Gurugram",
      materials: "Vertical WPC Louver Fins + Stone Tile Veneer + High-Performance Glazing",
      highlight: "Thermal Sun-Shading & Deep Linear Shadow-Lines",
      tag: "Modern Bungalow",
      desc: "Striking vertical architectural louver fin tower paired with horizontal wooden soffit cantilevers, stone veneer cladding, and acoustic exterior window frames.",
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

  const clientReviews = [
    {
      name: "Rajesh Sharma",
      role: "Luxury Villa Owner, Golf Course Road, Gurugram",
      rating: 5,
      comment:
        "SS Exterior transformed our 3-story villa facade. The HPL wooden finish and cove lighting look magnificent. Best of all, they finished 4 days ahead of schedule with zero mess. Highly recommended!",
    },
    {
      name: "Ar. Ananya Sen",
      role: "Principal Architect, Studio Form & Space",
      rating: 5,
      comment:
        "As an architect, finding contractors who maintain true laser millimeter alignment is rare. SS Exterior's team executed our C-channel substructure and vertical WPC louvers to perfection.",
    },
    {
      name: "Vikas Malik",
      role: "Commercial Retail Developer, Sohna Road",
      rating: 5,
      comment:
        "We hired them for our high-street showroom elevation. Clear official GST billing, genuine certified materials, and prompt execution. Truly a hassle-free experience.",
    },
  ];

  const executionSteps = [
    {
      num: "01",
      title: "Free On-Site Laser Survey",
      desc: "Our engineer visits your site, measures exact structural dimensions with digital laser levels, and creates a tailored 3D elevation blueprint.",
    },
    {
      num: "02",
      title: "Genuine Material Selection",
      desc: "You choose colors and textures from certified ACP, HPL, or WPC samples. All materials are direct factory-sourced with full written warranties.",
    },
    {
      num: "03",
      title: "Precision Laser Fitting",
      desc: "Our full-time certified technicians install heavy C-channel framing with seismic anchors and millimeter-straight panel alignments.",
    },
    {
      num: "04",
      title: "Weather-Sealing & Final Handover",
      desc: "Every joint is sealed with structural weather-proof silicone, pressure-tested for rain leakages, and handed over with official GST invoicing.",
    },
  ];

  const faqs = [
    {
      q: "Which is better for my home: ACP or HPL?",
      a: "For luxury homes and residential villas, HPL (High Pressure Laminates) is generally preferred because it provides the rich, warm look of natural wood or stone without any rotting or termite damage. ACP (Aluminium Composite Panels) is lightweight, sleek, and metallic, making it the top choice for commercial office towers, showroom fronts, and modern retail facades.",
    },
    {
      q: "Will WPC louvers warp or fade in the harsh Delhi NCR summer heat?",
      a: "Not at all. Our architectural WPC louvers are specifically manufactured with heavy-density UV stabilizers. They are engineered to endure 45°C+ summer heat, dust storms, and monsoon rains without warping, rotting, or fading. They never require painting or polishing.",
    },
    {
      q: "Do you offer a complete turnkey service (materials + framing + installation)?",
      a: "Yes! SS Exterior provides 100% turnkey service. We supply certified materials, engineer the structural C-channel sub-framing, and carry out millimeter-accurate laser installation with our own experienced in-house technicians. You have a single point of contact.",
    },
    {
      q: "Can you provide official GST invoices for commercial tax credit?",
      a: "Yes, SS Exterior is an officially registered business with GSTIN 06DQEPK3236F1Z3. Every contract is accompanied by official GST tax invoices, enabling full Input Tax Credit (ITC) for B2B and commercial projects.",
    },
    {
      q: "How fast can you start work on our site in Gurugram / Delhi NCR?",
      a: "We can schedule a free site survey within 24 to 48 hours. After finalizing your 3D design and materials, installation typically begins within 3 to 5 business days.",
    },
  ];

  const getEstimatorWhatsAppUrl = (phone: string = siteConfig.contact.phone, partnerName: string = "Satyajeet ji") => {
    const text = encodeURIComponent(
      `Hello ${partnerName} (SS Exterior)!\n\nI calculated my project scope on your website and would like an official quotation:\n\n📋 Solution: ${estimatorService}\n📐 Estimated Area: ${estimatorArea.toLocaleString()} sq. ft.\n📍 Project Region: Gurugram / Delhi NCR\n\nPlease share your product catalog and schedule a free digital laser site inspection.`
    );
    return `https://wa.me/91${phone}?text=${text}`;
  };

  return (
    <div className="relative min-h-screen bg-[#080B11] text-slate-100 selection:bg-[#D4AF37] selection:text-[#080B11] architectural-grid">
      {/* Subtle Ambient Radial Lighting */}
      <div className="ambient-glow-gold top-10 left-1/4 w-80 sm:w-[32rem] h-80 sm:h-[32rem] -translate-x-1/2 opacity-70" />
      <div className="ambient-glow-cobalt top-72 right-6 sm:right-20 w-80 sm:w-[30rem] h-80 sm:h-[30rem] opacity-55" />

      {/* 1. HERO SECTION */}
      <section id="overview" className="relative z-10 pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6] to-[#F1F5F9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
                <StyledPulseBadge $variant="gold">
                  Premier Architectural Facade & Interior Specialists
                </StyledPulseBadge>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/30">
                  <VerifiedIcon fontSize="inherit" /> Official GST: {siteConfig.contact.gst}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.14] text-slate-950">
                Turn Ordinary Buildings Into{" "}
                <span className="text-metallic-gold block mt-1">
                  Modern Architectural Landmarks.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Whether you are building a luxury villa, modern bungalow, or commercial office complex—SS Exterior supplies certified materials and delivers laser-accurate turnkey installations across Delhi NCR.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-lg shadow-[#D4AF37]/25 transition-all w-full sm:w-auto"
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>Book Free Site Inspection</span>
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 border border-[#D4AF37]/50 bg-white hover:bg-amber-50/50 hover:text-[#926A06] transition-colors shadow-sm w-full sm:w-auto"
                >
                  <PhotoCameraIcon fontSize="small" />
                  <span>See Real Finished Projects (6)</span>
                </a>
              </div>

              {/* Engineering Metrics Strip */}
              <div className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200/80 text-left">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#926A06] font-bold">Durability</p>
                  <p className="text-xl font-extrabold text-slate-900">15+ Years</p>
                  <p className="text-[11px] text-slate-500">Weather & UV Warranty</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#926A06] font-bold">Accuracy</p>
                  <p className="text-xl font-extrabold text-slate-900">Laser Plumb</p>
                  <p className="text-[11px] text-slate-500">Millimeter Alignment</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#926A06] font-bold">Facility</p>
                  <p className="text-xl font-extrabold text-slate-900">Gurugram</p>
                  <p className="text-[11px] text-slate-500">Sohna, Delhi NCR</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-[#926A06] font-bold">Tax Billing</p>
                  <p className="text-xl font-extrabold text-slate-900">100% GST</p>
                  <p className="text-[11px] text-slate-500">Input Tax Credit Ready</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Architectural Showcase (Hero 3D Facade & Emblem) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-0">
              <div className="w-full max-w-sm sm:max-w-md space-y-3">
                {/* Visual Mode Selector Tabs */}
                <div className="flex items-center justify-center p-1 rounded-xl bg-white/90 border border-slate-200 shadow-sm backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setHeroVisualTab("3d")}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      heroVisualTab === "3d"
                        ? "bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] text-[#080B11] shadow-md shadow-[#D4AF37]/25"
                        : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    <span>✦ 3D Facade Model</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHeroVisualTab("emblem")}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      heroVisualTab === "emblem"
                        ? "bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] text-[#080B11] shadow-md shadow-[#D4AF37]/25"
                        : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    <span>Official Emblem</span>
                  </button>
                </div>

                {heroVisualTab === "3d" ? (
                  <div className="space-y-3">
                    {/* Interactive Three.js 3D Architectural Facade */}
                    <Hero3DCanvas />

                    {/* Brand Meta Bar */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md backdrop-blur-xl text-center space-y-3">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black tracking-wider text-slate-900 uppercase">
                          SS <span className="text-metallic-gold">EXTERIOR</span>
                        </h2>
                        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#926A06]">
                          Facades & Architectural Design
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-2.5 pt-1">
                        <a
                          href={siteConfig.contact.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 hover:text-pink-600 hover:bg-slate-100 transition-colors border border-slate-200"
                        >
                          <InstagramIcon fontSize="small" />
                          <span>Instagram</span>
                        </a>
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 transition-colors border border-emerald-500/30"
                        >
                          <WhatsAppIcon fontSize="small" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Luxury Ivory Card with Official Emblem */
                  <Tilt3DCard maxTilt={8} scale={1.02}>
                    <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-white via-[#FAF9F6] to-[#F1F5F9] border border-[#D4AF37]/35 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.1),0_0_25px_rgba(212,175,55,0.15)] backdrop-blur-xl text-center space-y-4 relative overflow-hidden group">
                      {/* Ambient Spotlight */}
                      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#D4AF37]/15 via-[#38BDF8]/10 to-transparent blur-3xl pointer-events-none" />

                      {/* 3D Architectural Emblem */}
                      <div className="relative mx-auto h-40 sm:h-48 w-40 sm:w-48 flex items-center justify-center">
                        <Image
                          src="/images/logo-icon.png"
                          alt="SS Exterior Architectural Emblem"
                          fill
                          className="object-contain drop-shadow-[0_8px_20px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>

                      {/* Brand Typography */}
                      <div className="space-y-1.5 pt-1">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 uppercase">
                          SS <span className="text-metallic-gold">EXTERIOR</span>
                        </h2>
                        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#926A06]">
                          Facades & Architectural Design
                        </p>
                      </div>

                      {/* Divider & Slogan */}
                      <div className="pt-3 border-t border-slate-200 space-y-1">
                        <p className="text-xs italic text-slate-600 font-medium">
                          "Where Architectural Vision Meets Precision Execution"
                        </p>
                        <span className="inline-block text-[11px] uppercase tracking-widest text-[#926A06] font-bold">
                          Sohna • Gurugram • Delhi NCR
                        </span>
                      </div>

                      {/* Quick Action Badges */}
                      <div className="flex items-center justify-center gap-2.5 pt-1">
                        <a
                          href={siteConfig.contact.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 hover:text-pink-600 hover:bg-slate-100 transition-colors border border-slate-200"
                        >
                          <InstagramIcon fontSize="small" />
                          <span>Instagram</span>
                        </a>
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 transition-colors border border-emerald-500/30"
                        >
                          <WhatsAppIcon fontSize="small" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </Tilt3DCard>
                )}
              </div>
            </div>
    </div>
        </div >
      </section >

    {/* 2. USER-FRIENDLY "PROJECT MATCHMAKER": WHAT ARE YOU BUILDING? */}
    <section className="relative z-10 py-12 sm:py-16 border-b border-slate-200/80 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
            Quick Guide for Property Owners
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            What Type of Project Are You Planning?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select your project type below to see the recommended materials, design ideas, and durability benefits.
          </p>
        </div>

        {/* Matchmaker Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => setProjectType("villa")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${projectType === "villa"
              ? "bg-[#D4AF37] text-slate-950 border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
              : "bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
              }`}
          >
            <HomeWorkIcon fontSize="small" />
            <span>Luxury Villa / Bungalow</span>
          </button>
          <button
            onClick={() => setProjectType("commercial")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${projectType === "commercial"
              ? "bg-[#D4AF37] text-slate-950 border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
              : "bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
              }`}
          >
            <ApartmentIcon fontSize="small" />
            <span>Commercial Showroom / Office</span>
          </button>
          <button
            onClick={() => setProjectType("interior")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${projectType === "interior"
              ? "bg-[#D4AF37] text-slate-950 border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
              : "bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
              }`}
          >
            <WeekendIcon fontSize="small" />
            <span>Luxury Home Interiors</span>
          </button>
        </div>

        {/* Dynamic Matchmaker Card */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-md">
          {projectType === "villa" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Recommended for Residential Villas & Bungalows</h3>
                  <p className="text-xs text-[#926A06] font-semibold">HPL Wood-Grain Cladding + Vertical WPC Louver Fins</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 font-semibold self-start sm:self-auto border border-emerald-500/20">
                  Top Trending in Gurugram
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real wood looks beautiful on blueprints but warps and rots in the Delhi NCR monsoon and harsh sun. Our Exterior HPL panels give you the authentic warmth of rich walnut or natural teakwood, backed by vertical WPC louvers that block direct sunlight and add sophisticated privacy to balconies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-[#926A06]">Zero Polish Hassle</p>
                  <p className="text-slate-500">Never needs varnish or repainting.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-emerald-700">Termite & Water Immune</p>
                  <p className="text-slate-500">100% moisture and insect proof.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-sky-700">LED Strip Ready</p>
                  <p className="text-slate-500">Seamless integration with warm lighting.</p>
                </div>
              </div>
            </div>
          )}

          {projectType === "commercial" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Recommended for Corporate Towers & Retail Showrooms</h3>
                  <p className="text-xs text-[#926A06] font-semibold">Fire-Rated ACP (Aluminium Composite) + Structural Glazing + C-Channel</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 font-semibold self-start sm:self-auto border border-blue-500/20">
                  Commercial Grade
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Commercial facades demand clean, sharp lines, zero maintenance, and strict fire-safety compliance. Our Class-A fire-retardant ACP panels provide an ultra-modern metallic finish engineered on galvanized C-channel framing to withstand high-velocity wind loads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-[#926A06]">Class-A Fire Certified</p>
                  <p className="text-slate-500">Complies with safety codes.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-emerald-700">Wind-Load Tested</p>
                  <p className="text-slate-500">Heavy-gauge sub-framing.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-sky-700">GST Tax Invoiced</p>
                  <p className="text-slate-500">Claim 100% Input Tax Credit.</p>
                </div>
              </div>
            </div>
          )}

          {projectType === "interior" && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Recommended for Luxury Home & Suite Interiors</h3>
                  <p className="text-xs text-[#926A06] font-semibold">Acoustic Fluted Louvers + European AC5 Wooden Flooring + 3D Wallpaper</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 font-semibold self-start sm:self-auto border border-purple-500/20">
                  Interior Elegance
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Give your TV media wall, master bed headboard, and living lounge a five-star hotel presence. Our vertical fluted wall louvers eliminate unpleasant room echoes while adding refined architectural textures that pair seamlessly with luxury engineered hardwood flooring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-[#926A06]">Acoustic Sound Comfort</p>
                  <p className="text-slate-500">Softens echoes in TV lounges.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-emerald-700">Scratch-Resistant AC5</p>
                  <p className="text-slate-500">Heavy-duty European flooring.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-sky-700">Quick Clean Install</p>
                  <p className="text-slate-500">Completed in 2 to 4 days.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* 3. REAL PROJECT GALLERY SHOWCASE (7 REAL IMAGES) */}
    <section id="portfolio" className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold">
              <PhotoCameraIcon fontSize="small" /> Authentic Site Handover Photos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              Real Projects. Real Craftsmanship.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Browse our real-world turnkey exterior elevations and interior wall louvers executed across Gurugram and Delhi NCR. Click any photo to see material details!
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setPortfolioFilter("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${portfolioFilter === "all"
                ? "bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20"
                : "text-slate-600 hover:text-slate-950"
                }`}
            >
              All Projects (6)
            </button>
            <button
              onClick={() => setPortfolioFilter("exterior")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${portfolioFilter === "exterior"
                ? "bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20"
                : "text-slate-600 hover:text-slate-950"
                }`}
            >
              Facades (4)
            </button>
            <button
              onClick={() => setPortfolioFilter("interior")}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${portfolioFilter === "interior"
                ? "bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20"
                : "text-slate-600 hover:text-slate-950"
                }`}
            >
              Interiors (2)
            </button>
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Tilt3DCard key={project.id} maxTilt={7} scale={1.02} className="h-full">
              <div
                onClick={() => setActiveLightbox(project)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 bg-white hover:border-[#D4AF37]/70 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#926A06] border border-[#D4AF37]/40 shadow-sm">
                      {project.tag}
                    </span>
                    <span className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ZoomInIcon fontSize="small" />
                    </span>
                  </div>

                  {/* Bottom Text in Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-amber-200 font-semibold drop-shadow-sm">
                      <LocationOnIcon fontSize="inherit" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Info */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#926A06]">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-[#926A06] transition-colors tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                    <div>
                      <span className="text-[#926A06] font-semibold">Materials: </span>
                      <span className="text-slate-500 line-clamp-1">{project.materials}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                        <DoneAllIcon fontSize="inherit" /> Handover Completed
                      </span>
                      <span className="text-xs font-bold text-[#926A06] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        <span>Tap to Enlarge</span>
                        <ChevronRightIcon fontSize="small" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>

    {/* LIGHTBOX MODAL FOR HIGH-RES PROJECT VIEW */}
    {activeLightbox && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-4 sm:p-6"
        onClick={() => setActiveLightbox(null)}
      >
        <div
          className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl bg-white border border-[#D4AF37]/50 shadow-2xl p-4 sm:p-6 space-y-5 text-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="space-y-0.5">
              <span className="text-[11px] uppercase tracking-wider text-[#926A06] font-bold">
                {activeLightbox.category} • {activeLightbox.location}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {activeLightbox.title}
              </h3>
            </div>
            <button
              onClick={() => setActiveLightbox(null)}
              className="h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shrink-0"
            >
              <CloseIcon fontSize="small" />
            </button>
          </div>

          {/* High-Resolution Project Photo */}
          <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
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
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="font-bold text-[#926A06] uppercase tracking-wider text-[11px]">Material Scope</p>
              <p className="text-slate-700">{activeLightbox.materials}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="font-bold text-emerald-700 uppercase tracking-wider text-[11px]">Key Highlights</p>
              <p className="text-slate-700">{activeLightbox.highlight}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeLightbox.desc}
          </p>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <span className="text-xs text-slate-500">
              Executed by <strong className="text-slate-900">SS Exterior</strong> • Sohna, Gurugram
            </span>
            <a
              href={`https://wa.me/917905080922?text=Hello%20SS%20Exterior!%20I%20am%20interested%20in%20a%20project%20like:%20${encodeURIComponent(
                activeLightbox.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-md shadow-[#D4AF37]/25 transition-all"
            >
              <WhatsAppIcon fontSize="small" />
              <span>Inquire on WhatsApp for Similar Design</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  {/* 4. USER-FRIENDLY MATERIALS CATALOG */}
  <section id="materials" className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Certified Materials & Products
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          Explore Our Architectural Materials
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Every material we supply is batch-certified, weather-tested, and covered by written warranties. Click on any material to see what makes it special.
        </p>
      </div>

      {/* Interactive Material Selection Tabs */}
      <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap gap-2 touch-pan-x scrollbar-none">
        {materialsData.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => setActiveMaterial(idx)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${activeMaterial === idx
              ? "bg-[#D4AF37] text-slate-950 border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
              : "bg-white text-slate-700 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
              }`}
          >
            {m.title.split("(")[0].trim()}
          </button>
        ))}
      </div>

      {/* Active Material Technical Detail Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${materialsData[activeMaterial].badgeColor}`}>
                {materialsData[activeMaterial].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {materialsData[activeMaterial].title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {materialsData[activeMaterial].desc}
            </p>

            {/* Clear Customer Benefit Callout */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
              <CheckCircleIcon className="text-emerald-600 shrink-0" />
              <p className="text-xs sm:text-sm text-emerald-800 font-medium">
                <strong>Why customers love it:</strong> {materialsData[activeMaterial].userBenefit}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-md shadow-[#D4AF37]/20 transition-all shrink-0"
              >
                <WhatsAppIcon fontSize="small" />
                <span>Request Free Catalog & Samples</span>
              </a>
            </div>
          </div>

          {/* Interactive 3D Material Specimen Inspector */}
          <div className="lg:col-span-5">
            <Material3DViewer
              materialId={materialsData[activeMaterial].id}
              materialTitle={materialsData[activeMaterial].title}
            />
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {materialsData[activeMaterial].metrics.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{item.label}</p>
              <p className="text-base sm:text-lg font-bold text-slate-900">{item.val}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700">
            <DoneAllIcon className="text-[#926A06]" fontSize="small" />
            <span className="font-semibold text-slate-900">Ideal For:</span>
            <span>{materialsData[activeMaterial].applications}</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 shrink-0">
            Available in Stock • Instant Dispatch
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* 5. USER-FRIENDLY TURNKEY COST ESTIMATOR */}
  <section id="estimator" className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAF9F6]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Transparent Planning
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          Calculate Your Approximate Project Scope
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Drag the area slider below to see estimated material requirements and send it directly to our team for an itemized zero-obligation quote.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Selection */}
          <div className="space-y-4">
            <label className="text-xs uppercase font-bold tracking-wider text-slate-700 block">
              1. Choose Your Preferred Solution
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
                  className={`w-full p-3.5 rounded-xl text-xs font-bold text-left transition-all border flex items-center justify-between ${estimatorService === srv
                    ? "bg-[#D4AF37] text-slate-950 border-[#FDE68A] shadow-md shadow-[#D4AF37]/25"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
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
                <label className="text-xs uppercase font-bold tracking-wider text-slate-700">
                  2. Approximate Area to Cover
                </label>
                <span className="text-xl font-extrabold text-[#926A06]">
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
                className="w-full accent-[#D4AF37] h-2 bg-slate-200 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                <span>500 sq. ft. (Boutique)</span>
                <span>7,500 sq. ft.</span>
                <span>15,000+ sq. ft. (High-Rise)</span>
              </div>
            </div>

            {/* Estimate Summary Box */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Selected Solution:</span>
                <span className="font-bold text-slate-900">{estimatorService}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Sub-Framing & Anchorage:</span>
                <span className="font-bold text-emerald-700">Included (Heavy GI/Aluminium)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Tax Invoicing:</span>
                <span className="font-bold text-[#926A06]">100% Official GST Eligible</span>
              </div>
            </div>

            {/* Dual Smart WhatsApp Inquiry Buttons */}
            <div className="space-y-2.5">
              <p className="text-[11px] font-bold text-[#926A06] uppercase tracking-wider text-center">
                Send Scope & Request Free Site Survey via WhatsApp:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={getEstimatorWhatsAppUrl(siteConfig.contact.phone, "Satyajeet ji")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-md shadow-[#D4AF37]/20 transition-all text-center"
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>WhatsApp Satyajeet (7905080922)</span>
                </a>
                <a
                  href={getEstimatorWhatsAppUrl(siteConfig.contact.secondaryPhone, "Shubham ji")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-700 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all text-center"
                >
                  <WhatsAppIcon fontSize="small" />
                  <span>WhatsApp Shubham (7982522313)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 6. HOW WE WORK: 4 SIMPLE STEPS */}
  <section id="process" className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Easy 4-Step Process
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          How We Transform Your Building
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Zero confusion, zero headaches. From your first phone call to final handover, here is how smoothly your project moves forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {executionSteps.map((step, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 space-y-4 hover:border-[#D4AF37]/60 transition-colors shadow-sm"
          >
            <div className="text-4xl font-extrabold text-[#D4AF37] tracking-tight">
              {step.num}
            </div>
            <h3 className="text-base font-bold text-slate-950 tracking-tight">{step.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* 7. REAL CLIENT REVIEWS / TESTIMONIALS */}
  <section className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAF9F6]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          Trusted by Villa Owners & Architects
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          See what property owners and leading architects in Delhi NCR say about our precision work and on-time delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clientReviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 space-y-4 flex flex-col justify-between hover:border-[#D4AF37]/50 shadow-sm transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(rev.rating)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-950">{rev.name}</p>
              <p className="text-[11px] text-[#926A06] font-semibold">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* 8. VERIFIED FACILITY & OFFICIAL OFFICE PLAQUE */}
  <section id="credentials" className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Registered Office & Plaque
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          Verified Corporate Identity & GST
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          SS Exterior is an officially registered enterprise operating from our Gurugram facility, offering full corporate accountability and verified tax billing.
        </p>
      </div>

        {/* Row 1: Both Official Business Cards Side-by-Side with 3D Tilt Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Front Side (Key Personnel & Contacts) */}
          <Tilt3DCard maxTilt={9} scale={1.02} className="h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-slate-50 flex flex-col justify-between group hover:border-[#D4AF37] transition-all">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/visiting-card-front.jpg"
                  alt="SS Exterior Official Visiting Card - Satyajeet Kumar & Shubham Tiwari"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-white border-t border-slate-200 text-center">
                <span className="text-xs text-[#926A06] font-bold">
                  Official Business Card (Front) • Satyajeet Kumar & Shubham Tiwari
                </span>
              </div>
            </div>
          </Tilt3DCard>

          {/* Card 2: Back Side (Specialized Architectural Services) */}
          <Tilt3DCard maxTilt={9} scale={1.02} className="h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-xl bg-slate-50 flex flex-col justify-between group hover:border-[#D4AF37] transition-all">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src="/images/visiting-card-back.jpg"
                  alt="SS Exterior Official Services List"
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-white border-t border-slate-200 text-center">
                <span className="text-xs text-[#926A06] font-bold">
                  Official Business Card (Back) • Specialized Architectural Services
                </span>
              </div>
            </div>
          </Tilt3DCard>
        </div>

        {/* Row 2: Credential Details & Both Contact Personnel */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-[#926A06] tracking-wider">
                Official Business Entity
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                SS <span className="text-metallic-gold">EXTERIOR</span>
              </h3>
            </div>
            <span className="self-start sm:self-auto px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 flex items-center gap-1.5">
              <VerifiedIcon fontSize="inherit" /> Verified Active Taxpayer
            </span>
          </div>

          {/* GSTIN & Office Address in 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GSTIN */}
            <div className="p-4 rounded-xl bg-slate-50 border border-[#D4AF37]/40 space-y-1.5">
              <label className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
                Goods & Services Tax Identification Number (GSTIN)
              </label>
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg font-mono font-bold text-[#926A06] tracking-wider">
                  {siteConfig.contact.gst}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30">
                  Govt. Registered
                </span>
              </div>
            </div>

            {/* Office Address, Google Maps & Email */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <LocationOnIcon fontSize="small" className="text-[#926A06] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{siteConfig.contact.address.full}</span>
                </div>
                
                {/* 1-Click Google Maps Navigation Button */}
                <a
                  href={siteConfig.contact.address.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#926A06] border border-[#D4AF37]/40 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37] transition-all"
                >
                  <LocationOnIcon sx={{ fontSize: 14 }} className="text-emerald-700" />
                  <span>Get Directions on Google Maps ↗</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-200">
                <EmailIcon fontSize="small" className="text-[#926A06] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-slate-950 transition-colors truncate">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Both Contact Persons (Satyajeet Kumar & Shubham Tiwari) */}
          <div className="space-y-3 pt-2">
            <label className="text-xs uppercase font-bold text-[#926A06] tracking-wider block">
              Direct Contact Personnel & Project Coordinators
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Satyajeet Kumar */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <p className="text-sm font-extrabold text-slate-950">Satyajeet Kumar</p>
                  <p className="text-[11px] text-slate-500 font-medium">Partner • Operations & Inquiries</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:7905080922"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#926A06] border border-[#D4AF37]/40 bg-white hover:bg-amber-50 transition-colors shadow-xs"
                  >
                    <PhoneIcon fontSize="inherit" />
                    <span>7905080922</span>
                  </a>
                  <a
                    href="https://wa.me/917905080922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-bold text-emerald-700 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                    aria-label="WhatsApp Satyajeet"
                  >
                    <WhatsAppIcon fontSize="inherit" />
                  </a>
                </div>
              </div>

              {/* Shubham Tiwari */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div>
                  <p className="text-sm font-extrabold text-slate-950">Shubham Tiwari</p>
                  <p className="text-[11px] text-slate-500 font-medium">Partner • Execution & Site Operations</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:7982522313"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#926A06] border border-[#D4AF37]/40 bg-white hover:bg-amber-50 transition-colors shadow-xs"
                  >
                    <PhoneIcon fontSize="inherit" />
                    <span>7982522313</span>
                  </a>
                  <a
                    href="https://wa.me/917982522313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-bold text-emerald-700 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                    aria-label="WhatsApp Shubham"
                  >
                    <WhatsAppIcon fontSize="inherit" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>

  {/* 9. FREQUENTLY ASKED QUESTIONS */}
  <section className="relative z-10 py-16 sm:py-24 border-b border-slate-200/80 bg-[#FAF9F6]">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#926A06] font-bold block">
          Clear Answers
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
          Got Questions? We Have Answers.
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Clear, transparent information about material guarantees, pricing, site visits, and billing.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
          >
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-950 hover:text-[#926A06] transition-colors"
            >
              <span>{faq.q}</span>
              <ExpandMoreIcon
                className={`transition-transform duration-300 shrink-0 ${openFaq === idx ? "rotate-180 text-[#D4AF37]" : "text-slate-400"
                  }`}
              />
            </button>
            {openFaq === idx && (
              <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* 10. FINAL CALL TO ACTION BANNER */}
  <section className="relative z-10 py-16 sm:py-24 bg-[#FAF9F6]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-white via-[#FAF9F6] to-[#F1F5F9] p-8 sm:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
        <div className="ambient-glow-gold top-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-40 pointer-events-none" />

        <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#926A06] block">
          Start Your Landmark Project
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight max-w-3xl mx-auto">
          Ready to Upgrade Your Building's Facade or Interior?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have a blueprint, architectural plan, or photo of your site? Send it on WhatsApp for a fast, free estimate and 3D preview.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#080B11] bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B88E28] hover:brightness-105 shadow-xl shadow-[#D4AF37]/25 transition-all"
          >
            <WhatsAppIcon fontSize="small" />
            <span>Chat on WhatsApp (+91 7905080922)</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-800 border border-[#D4AF37]/50 bg-white hover:bg-amber-50/50 transition-colors shadow-xs"
          >
            <PhoneIcon fontSize="small" />
            <span>Call Hotline</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* 11. MOBILE STICKY BOTTOM ACTION BAR */}
  <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-3 shadow-xl">
    <a
      href={`tel:${siteConfig.contact.phone}`}
      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-xs font-bold text-[#926A06]"
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
      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700"
    >
      <CalculateIcon fontSize="inherit" />
      <span>Estimate</span>
    </a>
  </div>
</div>
);
}
