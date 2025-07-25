# 📜`wuchale` Examples🪶

This repo contains fully working examples of
**[`wuchale`](https://github.com/K1DV5/wuchale)**, the modern
internationalization toolkit for JavaScript, TypeScript, and Svelte projects.

Each example demonstrates a different use case and integration strategy — from
minimal setups to advanced per-file catalog loading, including server-side
support.

---

## 🔰 Examples Overview

| Example              | Description                                                        | Catalog Strategy  |
|----------------------|--------------------------------------------------------------------|-------------------|
| `vanilla`            | Minimal setup in plain JS/TS (no framework)                        | Single catalog    |
| `svelte`             | Svelte integration (no routing, no SvelteKit)                      | Single catalog    |
| `sveltekit`          | Basic SvelteKit routing + language detection + SSR                 | Single catalog    |
| `sveltekit-advanced` | - `sveltekit` example                                              | Multiple, dynamic |
|                      | - locale in route                                                  |                   |
|                      | - `Tailwind` integration                                           |                   |
|                      | - multiple adapters: granular, per-file and group-based catalogs   |                   |

> The sveltekit examples are fully functional even with JavaScript disabled.

---

## 🚀 Getting Started

1. **Clone the repo** and go to one of the examples.
    ```bash
    git clone https://github.com/K1DV5/wuchale-examples.git
    cd wuchale-examples/sveltekit
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
