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

- Uses only Wuchale core and the builtin adapter-vanilla
- Works directly with the DOM
- Uses a single catalog per locale

### 2. `svelte`

[![Svelte example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/svelte?file=wuchale.config.js)

- Shows how to use Wuchale in a basic Svelte app (no routing)
- Great for client-only Svelte projects
- Uses a single catalog per locale

### 3. `sveltekit`

[![SvelteKit TS example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/sveltekit?file=wuchale.config.js)

- Basic SvelteKit integration with locale inside query parameters `/?locale=en`
- Supports SSR so it works even without JavaScript
- Uses a single catalog per locale

### 4. `sveltekit-advanced`

[![Advanced SvelteKit example on StackBlitz](https://img.shields.io/badge/StackBlitz-Demo-blue?logo=stackblitz)](https://stackblitz.com/github/wuchalejs/examples/tree/main/sveltekit-advanced?file=wuchale.config.js)

- Routes directly as URL parameters like `/en`
- Supports SSR so it works even without JavaScript
- Uses multiple adapters and that means multiple catalogs for different parts of the application
- Some of the adapters divide the compiled catalogs into smaller parts for granular loading
- Supports server generated messages using the builtin adapter-vanilla
- Ideal for production-grade apps with large or modular UIs

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

- Main repo: github.com/K1DV5/wuchale
- NPM: npmjs.com/package/wuchale

> If you find this helpful, give it a ⭐ on GitHub and share your feedback or feature ideas!
