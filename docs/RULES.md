# Project Engineering Rules & Standards

## 1. Codebase Philosophy
1. **Clean Code & Strong Typing:** No implicit `any` types. All models, props, and API contracts must be defined in `src/types/` or feature-specific types.
2. **Feature-Driven Modularity:** Keep related state, hooks, components, and API endpoints together inside `src/features/<feature-name>/`.
3. **Immutability & Safety:** State mutations must only occur within Redux Toolkit createSlice reducers via Immer.
4. **Performance & Hydration:** Never access `window` or `document` directly in Server Components or top-level module scope; use `useEffect` or SSR guards.

---

## 2. Technology Guidelines

### 2.1 Next.js 15 (App Router)
- By default, components in `src/app/` are React Server Components (RSC) unless interactive features (state, event listeners, context) require `"use client"`.
- Keep `"use client"` boundaries as low in the component tree as possible.
- Use Next.js `<Image />` for optimized asset delivery with explicit width and height or fill.

### 2.2 Redux Toolkit & RTK Query
- Use typed hooks (`useAppDispatch`, `useAppSelector`) instead of standard `useDispatch` and `useSelector`.
- Keep RTK Query endpoints organized: declare the root API in `src/store/api/baseApi.ts` and use `.injectEndpoints()` in feature services.
- Never store non-serializable objects (functions, classes, promises) inside the Redux state tree.

### 2.3 Styling (Tailwind + MUI + Styled-Components)
- Use **Tailwind CSS** for layout, spacing, flex/grid structures, and responsive sizing.
- Use **Material UI (MUI)** for enterprise interactive widgets (dialogs, menus, selects, buttons, tooltips).
- Use **Styled-Components** for custom dynamic components requiring props-driven styles, keyframe animations, or glassmorphism.
- Merge classes using the `cn(...)` utility (`src/utils/cn.ts`).

---

## 3. Naming Conventions

| Entity | Convention | Example |
| :--- | :--- | :--- |
| **Components** | PascalCase | `Navbar.tsx`, `PostsDemo.tsx` |
| **Hooks** | camelCase with `use` prefix | `useMediaQuery.ts`, `useDebounce.ts` |
| **Redux Slices** | camelCase with `Slice` suffix | `counterSlice.ts`, `themeSlice.ts` |
| **API Services** | camelCase with `Api` suffix | `postsApi.ts`, `contactApi.ts` |
| **Utilities** | camelCase | `cn.ts`, `formatters.ts` |
| **Types & Interfaces**| PascalCase | `PostItem`, `ApiResponse<T>` |
| **Constants** | UPPER_SNAKE_CASE | `REDUX_PERSIST_KEY`, `API_TIMEOUT_MS` |

---

## 4. Git & Workflow Standards
- **Commit Messages:** Follow conventional commits:
  - `feat: add WhatsApp consultation modal`
  - `fix: resolve SSR hydration mismatch on theme toggle`
  - `docs: update PRD with Gurugram office address`
  - `refactor: extract reusable card component`
- **Verification Before Merge:**
  - Run `pnpm type-check` (`tsc --noEmit`) to verify zero TypeScript errors.
  - Run `pnpm build` to verify Next.js production compilation.
