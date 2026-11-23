# Design System & UI Specifications

## 1. Brand Identity & Aesthetic

**SS Exterior** represents architectural prestige, precision engineering, and modern luxury. The visual identity fuses architectural geometry with metallic bronze and structural cobalt blue accents, inspired by the official brand insignia.

---

## 2. Color Palette & Tokens

### 2.1 Primary Brand Accents
- **Bronze / Copper (Architectural Metal):**
  - Light Accent: `#c27d42`
  - Metallic Base: `#b06a30`
  - Deep Bronze: `#8a4f1e`
- **Architectural Blue (Curtain Glazing):**
  - Electric Blue: `#0284c7`
  - Deep Facade Navy: `#0369a1`
  - Night Glass: `#0c4a6e`
- **Slate & Monolithics:**
  - Steel Charcoal: `#0f172a`
  - Concrete Slate: `#64748b`
  - Cloud White: `#f8fafc`

### 2.2 Functional UI Colors
- **Success:** `#16a34a` (Certified, Active, Verified GST)
- **Warning:** `#d97706` (In Progress, Consultation Queue)
- **Danger:** `#dc2626` (Error, Invalidation)
- **Info:** `#2563eb` (Specification, Blueprint)

---

## 3. Typography System

- **Font Family:** Modern Sans-Serif (`-apple-system`, `BlinkMacSystemFont`, `Inter`, `Segoe UI`, `sans-serif`)
- **Display Headings (H1):** `font-black` (800/900), tracking tight (`-0.03em`), gradient fill text.
- **Section Headers (H2, H3):** `font-bold` (700), uppercase tracking wide for category labels.
- **Body Prose:** `font-normal` (400), line height `1.6`, high contrast text (`#0f172a` light / `#f8fafc` dark).
- **Code & Specs:** Monospace (`font-mono`) for GST numbers, measurements, and millimeter tolerances.

---

## 4. UI Component Library Integration

### 4.1 Material UI (MUI v6)
- **Theme Definition:** `src/styles/theme/index.ts`
- **Border Radius:** Default radius set to `12px` to `16px` for luxury aesthetic.
- **Button Styling:** Overridden with soft elevation shadows, `8px 20px` padding, and disabled uppercase transforming.
- **Surface Elevation:** Translucent paper with backdrop blur support (`backdrop-blur-md`).

### 4.2 Tailwind CSS Framework
- **Responsive Breakpoints:**
  - `sm`: 640px (Mobile landscape & Phablet)
  - `md`: 768px (Tablet portrait)
  - `lg`: 1024px (Laptops & Desktop)
  - `xl`: 1280px (Wide screens)
  - `2xl`: 1536px (Large architectural displays)

### 4.3 Styled-Components Library
- Used for high-impact visual components:
  - `StyledPulseBadge`: Animated pill badge with keyframe pulse animation.
  - `StyledGlassCard`: Frosted glassmorphism panel with dynamic hover elevation and glow effects.

---

## 5. Imagery & Asset Guidelines
- **Logo Asset:** `public/images/logo.jpg` (or `public/logo.jpg`) — Official bronze & blue 3D insignia with building elevation silhouette.
- **Office Signboard:** `public/images/signboard.jpg` — Stainless steel plaque with official address and GST number.
- **Portfolio Imagery:** High-resolution architectural photography of ACP, HPL, WPC louvers, and interior installations.
