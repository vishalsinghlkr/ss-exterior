export const siteConfig = {
  name: "SS Exterior",
  tagline: "Redefining Spaces with Premium Interiors, Exteriors & Architectural Façades",
  subHeadline:
    "We deliver high-grade architectural products and precision installation services that bring modern elegance, durability, and superior craftsmanship to your residential and commercial projects.",
  description:
  "Premier provider of end-to-end Interior, Exterior, and Architectural Façade solutions in Gurugram, Delhi NCR and across India. Specializing in ACP, HPL, WPC Louvers, C-Channel, Wooden Flooring, Aluminium, and Elevation Works.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    contact: {
      phone: "7905080922",
      displayPhone: "+91 7905080922",
      email: "Ssexterior7668@gmail.com",
      whatsapp: "https://wa.me/917905080922?text=Hello%20SS%20Exterior,%20I%20would%20like%20to%20get%20a%20free%20consultation.",
      instagram:
        "https://www.instagram.com/ssexteri_or?utm_source=qr&cnvx=MWwxZm55YnVsbWMxcw==",
      address: {
        plot: "Plot No U 289, Vaishnav Enclave",
        street: "Jail Road, Near Indian Gas",
        city: "Sohna, Gurugram",
        state: "Haryana",
        pincode: "122001",
        full: "Plot No U 289, Vaishnav Enclave, Jail Road, Near Indian Gas, Sohna, Gurugram, Haryana - 122001",
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
        id: "acp",
        title: "ACP (Aluminium Composite Panels)",
        short: "Modern, weather-resistant facade cladding for corporate and luxury projects.",
        icon: "Layers",
      },
      {
        id: "hpl",
        title: "HPL (High Pressure Laminates)",
        short: "High-density UV-resistant exterior panels with rich wood and stone finishes.",
        icon: "Shield",
      },
      {
        id: "wpc",
        title: "WPC Louvers & Exterior Finishes",
        short: "Architectural louvers and panels designed to withstand harsh weather.",
        icon: "Grid",
      },
      {
        id: "c-channel",
        title: "C-Channel Systems",
        short: "Precision-engineered structural metal channel frameworks and supports.",
        icon: "Construction",
      },
      {
        id: "wooden-flooring",
        title: "Luxury Wooden Flooring",
        short: "Engineered and laminate flooring bringing warmth, elegance, and durability.",
        icon: "Square",
      },
      {
        id: "wallpaper-aluminium",
        title: "Wallpapers & Aluminium Works",
        short: "Designer wall coverings, glazing partitions, curtain walls, and window systems.",
        icon: "Sparkles",
      },
      {
        id: "elevation",
        title: "All Elevation Works",
        short: "Turnkey architectural facade design, fabrication, and precision millimeter fitting.",
        icon: "Building2",
      },
    ],
    navItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "About Us", href: "#about" },
      { label: "Why Us", href: "#why-us" },
      { label: "Credentials & Contact", href: "#contact" },
    ],
  } as const;

  export type SiteConfig = typeof siteConfig;
