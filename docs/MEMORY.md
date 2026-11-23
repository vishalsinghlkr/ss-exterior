# Project Memory & Business Dossier

## 1. Business Profile & Contact Record
- **Company Name:** SS Exterior
- **Branding Slogan:** Premium Facades & Design | Redefining Spaces with Premium Interiors, Exteriors & Architectural Façades
- **Mobile Number:** `+91 7905080922`
- **Email Address:** `Ssexterior7668@gmail.com`
- **Official Address:** Plot No U 289, Vaishnav Enclave, Jail Road, Near Indian Gas, Sohna, Gurugram, Haryana - 122001
- **GST Identification Number (GSTIN):** `06DQEPK3236F1Z3`
- **Official Instagram Profile:** [https://www.instagram.com/ssexteri_or](https://www.instagram.com/ssexteri_or?utm_source=qr&cnvx=MWwxZm55YnVsbWMxcw==)
- **Primary Stakeholders:** Vishal Singh, Djjs Satyajit Bhaiya

---

## 2. Core Specializations & Material Inventory
1. **ACP (Aluminium Composite Panels):** Commercial & residential exterior cladding.
2. **HPL (High Pressure Laminates):** High-density UV-resistant exterior decorative panels.
3. **WPC (Wood Plastic Composite):** Exterior and interior louvers, pergolas, and vertical cladding.
4. **C-Channel Systems:** Structural aluminium framing and support channels.
5. **Wooden Flooring:** Premium engineered, laminated, and hardwood interior flooring.
6. **Designer Wallpapers:** Modern residential and office decorative wall solutions.
7. **Aluminium Work:** Windows, glass partitions, structural curtain walling.
8. **Elevation Works:** Turnkey design, fabrication, and precision millimeter fitting.

---

## 3. Approved Marketing Copy & Slogans

### Hero Headline:
> "Redefining Spaces with Premium Interiors, Exteriors & Architectural Façades"

### Hero Sub-Headline:
> "We deliver high-grade architectural products and precision installation services that bring modern elegance, durability, and superior craftsmanship to your residential and commercial projects."

### Call to Action (Buttons):
- "Get a Free Consultation"
- "Explore Our Work"

### About Us Text:
> "We are a premier provider of end-to-end Interior, Exterior, and Architectural Façade solutions. With a strong commitment to quality, innovation, and perfection, we transform ordinary structures into modern architectural landmarks. Whether you are building a luxury residence, a corporate office, or a commercial complex, we supply top-tier materials and execute flawless installations tailored to your exact vision."

### Brand Slogans:
- *"Where Architectural Vision Meets Precision Execution."*
- *"Building Aesthetics. Engineering Durability."*
- *"Premium Products. Flawless Installation. Lasting Impressions."*

---

## 4. Architectural & Tech Stack Decisions
- **Framework:** Next.js 15 (App Router). Migrated away from Vite to support SSR, SEO, and enterprise scalability.
- **State Layer:** Redux Toolkit + RTK Query for normalized API caching + Redux Persist for local state rehydration.
- **SSR-Safe Storage:** Custom engine in `src/store/storage.ts` avoids `window is not defined` errors during server build.
- **Styling Architecture:**
  - Tailwind CSS for layout, spacing, and responsive design.
  - Material UI (MUI v6) with Emotion AppRouterCacheProvider for zero-FOUC UI controls.
  - Styled-Components v6 with `StyledRegistry` for reactive CSS-in-JS components.
