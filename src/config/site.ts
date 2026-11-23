export const siteConfig = {
  name: "SS Exterior",
  tagline: "Redefining Spaces with Premium Interiors, Exteriors & Architectural Facades",
  subHeadline:
    "We deliver high-grade architectural products and precision installation services that bring modern elegance, durability, and superior craftsmanship to your residential and commercial projects.",
  description:
    "Premier provider of end-to-end Interior, Exterior, and Architectural Facade solutions in Gurugram, Delhi NCR and across India. Specializing in ACP Work, HPL Cladding, WPC Louvers & Decking, Wooden Flooring, MS Structural & Fabrication, and All Elevation Works.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  contact: {
    // Both Key Personnel from Official Visiting Card
    partners: [
      {
        name: "Satyajeet Kumar",
        phone: "7905080922",
        displayPhone: "+91 7905080922",
        whatsapp: "https://wa.me/917905080922?text=Hello%20Satyajeet%20ji%20(SS%20Exterior),%20I%20would%20like%20to%20consult%20for%20my%20building%20project.",
        role: "Partner & Operations",
      },
      {
        name: "Shubham Tiwari",
        phone: "7982522313",
        displayPhone: "+91 7982522313",
        whatsapp: "https://wa.me/917982522313?text=Hello%20Shubham%20ji%20(SS%20Exterior),%20I%20would%20like%20to%20consult%20for%20my%20building%20project.",
        role: "Partner & Execution",
      },
    ],
    // Primary fallback
    phone: "7905080922",
    displayPhone: "+91 7905080922",
    secondaryPhone: "7982522313",
    secondaryDisplayPhone: "+91 7982522313",
    email: "ssexterior7668@gmail.com",
    whatsapp: "https://wa.me/917905080922?text=Hello%20SS%20Exterior,%20I%20would%20like%20to%20get%20a%20free%20consultation.",
    whatsappSecondary: "https://wa.me/917982522313?text=Hello%20SS%20Exterior,%20I%20would%20like%20to%20get%20a%20free%20consultation.",
    instagram:
      "https://www.instagram.com/ssexteri_or?utm_source=qr&cnvx=MWwxZm55YnVsbWMxcw==",
    address: {
      plot: "U289, Vashnav Enclave",
      street: "Near Indian Gas, Sector 67",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122101",
      full: "U289, Vashnav Enclave, Near Indian Gas, Sector 67, Gurugram, Haryana - 122101",
      googleMaps: "https://maps.google.com/?q=U289,+Vashnav+Enclave,+Near+Indian+Gas,+Sector+67,+Gurugram,+Haryana+122101",
    },
    gst: "06DQEPK3236F1Z3",
  },
  slogans: [
    "Where Architectural Vision Meets Precision Execution.",
    "Building Aesthetics. Engineering Durability.",
    "Premium Products. Flawless Installation. Lasting Impressions.",
  ],
  services: [
    {
      id: "wooden-flooring",
      title: "Wooden Flooring",
      short: "Luxury engineered and laminated European hardwood flooring.",
      icon: "Square",
    },
    {
      id: "hpl",
      title: "HPL Cladding",
      short: "High-density UV-resistant exterior panels with rich wood and stone finishes.",
      icon: "Shield",
    },
    {
      id: "acp",
      title: "ACP Work",
      short: "Modern, fire-retardant aluminium composite facade cladding.",
      icon: "Layers",
    },
    {
      id: "wpc",
      title: "WPC Louvers & Decking",
      short: "Weatherproof architectural louvers, privacy fins & outdoor decking.",
      icon: "Grid",
    },
    {
      id: "elevation",
      title: "All Elevation Work",
      short: "Turnkey architectural facade design, fabrication & precision installation.",
      icon: "Building2",
    },
    {
      id: "ms-structural",
      title: "MS Structural & Fabrication Work",
      short: "Heavy structural metal frameworks, C-channels, gates & pergola fabrication.",
      icon: "Construction",
    },
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#materials" },
    { label: "Projects", href: "#portfolio" },
    { label: "Estimator", href: "#estimator" },
    { label: "Credentials & Contact", href: "#credentials" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
