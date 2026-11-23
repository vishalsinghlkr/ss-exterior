# SS Exterior - Enterprise Next.js Architecture

A production-ready, scalable web architecture built with **Next.js (App Router)**, **React**, **TypeScript**, **Redux Toolkit & RTK Query**, **Redux Persist**, **Tailwind CSS**, **Material UI (MUI v6)**, and **Styled-Components**.

---

## 🚀 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js (App Router)](https://nextjs.org/) | Server Components, routing, SSR, and asset optimization |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | End-to-end type safety |
| **Global State** | [Redux Toolkit (RTK)](https://redux-toolkit.js.org/) | Predictable centralized state slices |
| **Data Fetching** | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Normalized caching, optimistic updates, and polling |
| **Persistence** | [Redux Persist](https://github.com/rt2zz/redux-persist) | SSR-safe local storage state rehydration |
| **Utility Styling** | [Tailwind CSS](https://tailwindcss.com/) | Rapid, responsive, utility-first CSS |
| **Component Library** | [Material UI (MUI v6)](https://mui.com/) | Accessible enterprise UI widgets & theme system |
| **Dynamic CSS** | [Styled-Components](https://styled-components.com/) | Scoped CSS-in-JS with Next.js SSR registry |

---

## 📁 Scalable Folder Structure

```text
src/
├── app/                        # Next.js App Router (pages, layouts, metadata)
│   ├── layout.tsx              # Root HTML & body with AppProviders & font setup
│   ├── page.tsx                # Main showcase & dashboard page
│   ├── loading.tsx             # Suspense loading skeleton
│   ├── not-found.tsx           # Custom 404 handler
│   ├── error.tsx               # Error boundary
│   └── globals.css             # Tailwind CSS base directives & design tokens
│
├── components/                 # Shared UI Component Library
│   ├── common/                 # Atomic reusable UI components (Button, Card, Input)
│   ├── layout/                 # Structural UI (Navbar, Footer, Sidebar)
│   └── styled/                 # Custom styled-components primitives & keyframe animations
│
├── config/                     # Application-wide configurations
│   ├── env.ts                  # Type-safe environment variables
│   ├── site.ts                 # Metadata, routes, brand details
│   └── constants.ts            # Storage keys, timeouts, pagination constants
│
├── features/                   # Domain-driven feature modules
│   ├── counter/                # Feature: Persisted client state slice
│   ├── posts/                  # Feature: RTK Query caching & data endpoints
│   └── theme/                  # Feature: MUI Light/Dark theme mode slice
│
├── hooks/                      # Custom reusable React hooks (useMediaQuery, useDebounce)
│
├── providers/                  # Application Provider wrappers
│   ├── AppProviders.tsx        # Root provider combining Redux, MUI, and Styled-Components
│   ├── ReduxProvider.tsx       # Redux Store + PersistGate
│   ├── MuiThemeProvider.tsx    # MUI Emotion Cache + ThemeProvider + CssBaseline
│   └── StyledRegistry.tsx      # Styled-Components SSR Style Registry (prevents FOUC)
│
├── store/                      # Redux Store Architecture
│   ├── index.ts                # Store configuration & middleware
│   ├── rootReducer.ts          # Persist whitelist configuration
│   ├── hooks.ts                # Typed useAppDispatch & useAppSelector hooks
│   ├── storage.ts              # SSR-safe storage engine (noop on server)
│   └── api/                    # RTK Query base API definition
│       └── baseApi.ts          # createApi with tag types & fetchBaseQuery
│
├── styles/                     # Global styling and theming
│   └── theme/                  # MUI theme setup, palettes & component overrides
│
├── types/                      # Global TypeScript definitions
│   ├── api.ts                  # Generic API responses, pagination, data models
│   └── common.ts               # Component props and utility types
│
└── utils/                      # Helper utilities
    └── cn.ts                   # Tailwind merge + clsx utility function
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
pnpm build
pnpm start
```

### 5. Type Checking
```bash
pnpm type-check
```

---

## 🧩 Key Architecture Features

### SSR-Safe Redux Persist
`src/store/storage.ts` provides a custom storage fallback:
- Returns a `noopStorage` during Next.js server rendering (SSR) so `window` is never accessed prematurely.
- Binds to `window.localStorage` on client hydration.

### Zero-FOUC Styled-Components & Material UI
- **MUI**: Wrapped with `@mui/material-nextjs/v15-appRouter` (`AppRouterCacheProvider`) to extract Emotion styles during SSR.
- **Styled-Components**: Wrapped with `StyledComponentsRegistry` using Next.js `useServerInsertedHTML` to stream styles to the client.

### RTK Query Normalized Cache
`src/store/api/baseApi.ts` serves as the central API gateway with tag-based caching (`providesTags`, `invalidatesTags`). Feature modules inject endpoints on demand using `baseApi.injectEndpoints`.
