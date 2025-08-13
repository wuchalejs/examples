# 📜`wuchale` Examples🪶

This repo contains fully working examples of
**[`wuchale`](https://github.com/wuchalejs/wuchale)**, the modern, normal code
based internationalization toolkit for JavaScript, TypeScript, and Svelte
projects.

Each example demonstrates a different use case and integration strategy — from
minimal setups to advanced per-file catalog loading, including server-side
support.

## 🔰 Examples Overview

### 1. `vanilla`

[![Vanilla TS example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/vanilla?file=wuchale.config.js)

- Uses only `wuchale` core and the builtin adapter-vanilla
- Works directly with the DOM
- Uses a single catalog per locale

### 2. `react`

[![React example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/react?file=wuchale.config.js,src%2FApp.tsx)

- Shows how to use `wuchale` in a basic React app
- Great for client-only React projects
- Uses a single catalog per locale

### 3. `svelte`

[![Svelte example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/svelte?file=wuchale.config.js,src%2FApp.svelte)

- Shows how to use `wuchale` in a basic Svelte app (no routing)
- Great for client-only Svelte projects
- Uses a single catalog per locale

### 4. `sveltekit`

[![SvelteKit TS example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/sveltekit?file=wuchale.config.js,src%2Froutes%2F+page.svelte)

- Basic SvelteKit integration with locale inside query parameters `/?locale=en`
- Supports SSR so it works even without JavaScript
- Uses a single catalog per locale

### 5. `sveltekit-advanced`

[![Advanced SvelteKit example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/sveltekit-advanced?file=wuchale.config.js,src%2Froutes%2F[locale]%2F%2Bpage.svelte)

- Routes directly as URL parameters like `/en`
- Supports SSR so it works even without JavaScript
- Uses multiple adapters and that means multiple catalogs for different parts of the application
- Some of the adapters divide the compiled catalogs into smaller parts for granular loading
- Supports server generated messages using the builtin adapter-vanilla
- Ideal for production-grade apps with large or modular UIs

### 6. `solidjs`

[![SolidJS example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/solidjs?file=wuchale.config.js,src%2FApp.tsx)

- Shows how to use `wuchale` in a basic SolidJS app
- Great for client-only SolidJS projects
- Uses a single catalog per locale

### 6. `server`

[![Server example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/server?file=wuchale.config.js,src%2Findex.js&startScript=serve)

- Uses the write files functionality to work in the absense of Vite
- Uses only the builtin vanilla adapter
- Uses Express as the framework
- Shows how to use `wuchale` with server-only projects

## 🚀 Getting Started

1. **Clone the repo** and go to one of the examples.
    ```bash
    git clone https://github.com/wuchalejs/examples.git
    cd examples/sveltekit
    ```
2. **Install dependencies**
    ```bash
    pnpm install
    # or
    npm install
    ```
3. **Start the dev server**
    ```bash
    pnpm dev
    # or
    npm run dev
    ```

## 🐦 Follow development

- Website: [wuchale.dev](https://wuchale.dev)
- Main repo: [github.com/wuchalejs/wuchale](https://github.com/wuchalejs/wuchale)
- NPM:
    - [wuchale](https://npmjs.com/package/wuchale)
    - [@wuchale/svelte](https://npmjs.com/package/@wuchale/svelte)

> If you find this helpful, give it a ⭐ on GitHub and share your feedback or feature ideas!
